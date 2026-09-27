"use client";

import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";

const KST_OFFSET = 9 * 3600000;
const DAY = 86400000;
const INTRO_MS = 1500;
const TICK_MS = 450;
// At the top of the page the first downward scroll gesture doesn't scroll: it changes
// the clock into the lockup in place (over ALIGN_MS). Scroll input is held a little
// longer so trackpad momentum doesn't carry straight past it.
const ALIGN_MS = 700;
const HOLD_MS = ALIGN_MS + 300;
// When the hour hand (studio) nears the minute hand (seoul circle) it blurs back so the
// brand stays legible: most blurred at OVERLAP_DEG apart, sharp once CLEAR_DEG apart.
const OVERLAP_DEG = 6;
const CLEAR_DEG = 40;
const BLUR_EM = 0.08; // blur radius at full overlap, relative to the hand's font size

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const seoulNow = () => (Date.now() + KST_OFFSET) % DAY;

const useSeoulLabel = () => {
  const [label, setLabel] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date(seoulNow());
      setLabel(
        `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`
      );
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return label;
};

type Els = {
  wrap: HTMLDivElement;
  dial: HTMLDivElement;
  studio: HTMLSpanElement;
  name: HTMLSpanElement;
  tag: HTMLSpanElement;
};

// Hands are the live clock at scroll 0 and one straight line through the dot at scroll 1.
// Every word is anchored at its left-middle and placed along its hand.
const useClockToLockup = (refs: { [K in keyof Els]: React.RefObject<Els[K] | null> }) => {
  useEffect(() => {
    const els = Object.fromEntries(
      Object.entries(refs).map(([k, r]) => [k, r.current])
    ) as Els;
    if (Object.values(els).some((el) => !el)) return;

    // The clock is the first impression: a reload starts at the top, not mid-alignment.
    // Anchor links (#work, …) keep their position.
    if (!window.location.hash) {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();

    let m = { R: 0, wt: 0, wn: 0, ws: 0, th: 0 };
    const measure = () => {
      m = {
        R: parseFloat(getComputedStyle(els.name).fontSize) / 0.22,
        wt: els.tag.offsetWidth,
        wn: els.name.offsetWidth,
        ws: els.studio.offsetWidth,
        th: els.tag.offsetHeight,
      };
    };
    measure();

    // A word lies along its hand (pointing at `hand`), centered at gap + w/2 from the dot.
    // `flip` 0 reads outward from the dot, 1 reads inward toward it; the word spins
    // about its own center in between.
    // `ox`/`oy` nudge the word off its hand (used to drop the tagline to its own line).
    const place = (el: HTMLElement, w: number, gap: number, hand: number, flip: number, o = 1, ox = 0, oy = 0) => {
      const r = gap + w / 2;
      const rad = (hand * Math.PI) / 180;
      el.style.transform = `translate(${Math.cos(rad) * r + ox}px, ${Math.sin(rad) * r + oy}px) rotate(${hand + 180 * flip}deg) translate(-50%, -50%)`;
      el.style.opacity = String(o);
    };
    // Nearest angle to `a` that points at `target` (mod 360).
    const toward = (a: number, target: number) => target + Math.round((a - target) / 360) * 360;

    let raf = 0;
    let raw = 0;
    let last = performance.now();
    let aligned = false;
    let holdUntil = 0;

    // Scroll intent at the top toggles the lockup instead of moving the page.
    const atTop = () => window.scrollY <= 1;
    const intent = (down: boolean, e: Event) => {
      const now = performance.now();
      if (now < holdUntil) {
        e.preventDefault();
        return;
      }
      if (!atTop() || down === aligned) return;
      e.preventDefault();
      aligned = down;
      holdUntil = now + HOLD_MS;
    };
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0.5) intent(e.deltaY > 0, e);
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const dy = touchY - e.touches[0].clientY;
      if (Math.abs(dy) > 6) intent(dy > 0, e);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest("input, textarea, select")) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) intent(true, e);
      else if (["ArrowUp", "PageUp"].includes(e.key)) intent(false, e);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const prev = last;
      last = now;

      const vh = window.innerHeight;
      const scrolled = -els.wrap.getBoundingClientRect().top;
      if (scrolled > vh * 2) return; // hero is off screen
      // Reached further down some other way (anchor link, scrollbar): show the lockup.
      if (scrolled > 1) aligned = true;
      // Time-based, so there is no half-changed resting state.
      const target = aligned ? 1 : 0;
      const step = reduced ? 1 : (now - prev) / ALIGN_MS;
      raw = target > raw ? Math.min(target, raw + step) : Math.max(target, raw - step);
      const p = easeInOut(raw);

      // Live Seoul clock, in degrees clockwise from 12.
      const t = seoulNow();
      const sec = Math.floor(t / 1000);
      const tick = reduced ? 1 : easeOut(clamp01((t % 1000) / TICK_MS));
      const intro = reduced ? 1 : easeOut(clamp01((now - start) / INTRO_MS));
      const hour = ((t / 120000) % 360) * intro;
      const minute = ((t / 10000) % 360) * intro;
      const second = (((sec - 1 + tick) * 6) % 360) * intro;

      // CSS angles: 0 = pointing right.
      const gap = m.R * 0.07;
      const hh = hour - 90;
      const hm = minute - 90;
      const hs = second - 90;

      // Minimal transition: words fade out where they are, then fade in at the lockup
      // with a small rise. Only the dot glides. q is the pose (0 clock, 1 lockup).
      const q = raw < 0.5 ? 0 : 1;
      const o = easeOut(Math.abs(1 - 2 * raw));
      const rise = q * (1 - o) * 12;

      const apart = Math.abs((((hour - minute) % 360) + 540) % 360 - 180);
      const clear = clamp01((apart - OVERLAP_DEG) / (CLEAR_DEG - OVERLAP_DEG));
      const blur = q ? 0 : (1 - clear) * m.R * 0.22 * BLUR_EM;
      els.studio.style.filter = blur > 0.1 ? `blur(${blur.toFixed(1)}px)` : "";
      // Clock: hands as they are (name and studio read outward, tagline inward).
      // Lockup: name and studio left of the dot, tagline right, all upright.
      const nameHand = q ? toward(hm, 180) : hm;
      const studioHand = q ? toward(hh, 180) : hh;
      const tagHand = q ? toward(hs, 0) : hs;
      const F = m.R * 0.22;
      const lead = F * 0.95;

      const vw = window.innerWidth;
      if (vw < 640) {
        // Dot stays put: "seoul circle / studio" above it, tagline below.
        const gapV = Math.min(22, Math.max(12, m.R * 0.05)) / 2 + 14;
        place(els.name, m.wn, gap, nameHand, q, o, (gap + m.wn / 2) * q, -(F / 2 + gapV + lead) * q + rise);
        place(els.studio, m.ws, gap, studioHand, q, o, (gap + m.ws - m.wn / 2) * q, -(F / 2 + gapV) * q + rise);
        place(els.tag, m.wt, gap, tagHand, 1 - q, o, -(gap + m.wt / 2) * q, (m.th / 2 + gapV) * q + rise);
        const s = lerp(1, Math.min(1, (vw - 32) / Math.max(m.wn, m.wt)), p);
        els.dial.style.transform = `scale(${s})`;
      } else {
        // "seoul circle ● tagline" with studio on the line below, block centered.
        place(els.name, m.wn, gap, nameHand, q, o, 0, rise);
        place(els.studio, m.ws, gap, studioHand, q, o, (m.ws - m.wn) * q, lead * q + rise);
        place(els.tag, m.wt, gap, tagHand, 1 - q, o, 0, rise);
        const s = lerp(1, Math.min(1, (vw - 32) / (2 * gap + m.wt + m.wn)), p);
        els.dial.style.transform = `translate(${((m.wn - m.wt) / 2) * s * p}px, ${(-lead / 2) * s * p}px) scale(${s})`;
      }
      els.dial.style.opacity = "1";
    };

    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 0);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return scrolled;
};

const ClockHero = () => {
  const t = useTranslations("studio");
  const locale = useLocale();
  const label = useSeoulLabel();
  const scrolled = useScrolled();
  const refs = {
    wrap: useRef<HTMLDivElement>(null),
    dial: useRef<HTMLDivElement>(null),
    studio: useRef<HTMLSpanElement>(null),
    name: useRef<HTMLSpanElement>(null),
    tag: useRef<HTMLSpanElement>(null),
  };
  useClockToLockup(refs);

  return (
    <S.Wrap ref={refs.wrap} id="top">
      <S.Hero>
        <S.Top data-scrolled={scrolled || undefined}>
          <S.Time>
            <span>{t("hero.city")}</span>
            <time aria-label={t("hero.clock")}>{label || "—"}</time>
          </S.Time>
          <S.Nav aria-label={t("nav.label")}>
            <a href="#top">{t("nav.home")}</a>
            <a href="#work">{t("nav.work")}</a>
            <a href="#about">{t("nav.about")}</a>
            <a href="#contact">{t("nav.contact")}</a>
          </S.Nav>
          <S.Lang aria-label={t("nav.lang")}>
            {(["ko", "en"] as const).map((l) => (
              <Link
                key={l}
                href="/"
                locale={l}
                aria-current={l === locale ? "true" : undefined}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </S.Lang>
        </S.Top>

        <S.Dial ref={refs.dial}>
          <h1>
            <S.Word ref={refs.studio}>studio</S.Word>{" "}
            <S.Word ref={refs.name}>seoul circle</S.Word>
          </h1>
          <S.Tag ref={refs.tag}>Designing and building digital experiences.</S.Tag>
          <S.Pivot aria-hidden />
        </S.Dial>

        <S.Bottom>
          <p>{t("hero.pillars")}</p>
        </S.Bottom>
      </S.Hero>
    </S.Wrap>
  );
};

export default ClockHero;

const S = {
  Wrap: styled.div`
    height: 100svh;
    min-height: 520px;
  `,
  Hero: styled.section`
    /* R: clock radius, kept clear of the top and bottom lines */
    --R: min(50vw - 20px, 50svh - 48px);
    position: relative;
    height: 100%;
    min-height: 520px;
    overflow: hidden;
  `,
  Top: styled.header`
    position: fixed;
    inset: 0 0 auto;
    z-index: 10;
    transition:
      background-color 0.3s,
      backdrop-filter 0.3s;

    /* Glass only once the page has scrolled; the clock sits on bare white. */
    &[data-scrolled] {
      background-color: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(16px) saturate(1.4);
      -webkit-backdrop-filter: blur(16px) saturate(1.4);
    }
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 28px var(--gutter);
    font-size: 17px;

    @media (max-width: 639px) {
      grid-template-columns: 1fr auto;
      row-gap: 8px;
      padding-top: 20px;

      & > p,
      & > div {
        font-size: 13px;
        letter-spacing: 0.02em;
      }
    }
  `,
  Time: styled.p`
    display: flex;
    gap: 10px;
    color: var(--muted);
    font-variant-numeric: tabular-nums;

    @media (max-width: 639px) {
      order: 2;
    }
  `,
  Nav: styled.nav`
    display: flex;
    gap: clamp(20px, 5vw, 72px);

    @media (max-width: 639px) {
      order: 1;
      grid-column: 1 / -1;
      justify-content: space-between;
    }
  `,
  Lang: styled.div`
    justify-self: end;
    display: flex;
    gap: 12px;

    & a {
      color: var(--muted);
    }
    & a[aria-current] {
      color: var(--ink);
      pointer-events: none;
    }
    @media (max-width: 639px) {
      order: 3;
    }
  `,
  Dial: styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 0.4s;
    & h1 {
      font: inherit;
    }
  `,
  Word: styled.span`
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    white-space: nowrap;
    font-size: calc(var(--R) * 0.22);
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.04em;
    will-change: transform;
  `,
  Tag: styled.span`
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    white-space: nowrap;
    font-size: clamp(13px, calc(var(--R) * 0.05), 22px);
    line-height: 1.25;
    will-change: transform;
  `,
  Pivot: styled.span`
    position: absolute;
    left: 0;
    top: 0;
    width: clamp(12px, calc(var(--R) * 0.05), 22px);
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--accent);
    transform: translate(-50%, -50%);
  `,
  Bottom: styled.div`
    position: absolute;
    inset: auto 0 0;
    display: flex;
    justify-content: flex-end;
    padding: 28px var(--gutter);
    font-size: clamp(16px, 1.6vw, 22px);

    @media (max-width: 639px) {
      padding-bottom: 24px;
    }
  `,
};
