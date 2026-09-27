"use client";

import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import ClockHero from "./ClockHero";
import { works } from "../data/works";
import { pageStyles } from "../styles/pageStyles";

const EMAIL = "honglee.circle@gmail.com";


type Pillar = { name: string; desc: string };

const Studio = () => {
  const t = useTranslations("studio");
  const pillars = t.raw("about.pillars") as Pillar[];
  const background = t.raw("about.background") as string[];

  return (
    <>
      <Global styles={pageStyles} />
      <ClockHero />

      <S.Section id="work" aria-labelledby="work-title">
        <S.Head>
          <h2 id="work-title">{t("work.title")}</h2>
          <p>{t("work.lead")}</p>
        </S.Head>
        <S.Grid>
          {works.map(({ slug, image }) => (
            <li key={slug}>
              <S.Tile href={`/work/${slug}`}>
                <S.Thumb>{image && <Image src={image} alt="" sizes="(max-width: 639px) 100vw, 33vw" />}</S.Thumb>
                <S.Caption>
                  <span>{t(`work.items.${slug}.title`)}</span>
                  {t(`work.items.${slug}.type`) && <span>{t(`work.items.${slug}.type`)}</span>}
                </S.Caption>
              </S.Tile>
            </li>
          ))}
        </S.Grid>
      </S.Section>

      <S.Section id="about" aria-labelledby="about-title">
        <S.Head>
          <h2 id="about-title">{t("about.title")}</h2>
        </S.Head>
        <S.Lead>
          <strong>{t("about.statement")}</strong>
          <p>
            {/* Each sentence starts a new line; within one, lines only break after a comma. */}
            {`${t("about.lead")} ${t("about.close")}`.split(/(?<=\.)\s+/).map((sentence) => (
              <S.Sentence key={sentence}>
                {sentence.split(", ").map((part, i, all) => (
                  <span key={i}>
                    {part}
                    {i < all.length - 1 && ", "}
                  </span>
                ))}
              </S.Sentence>
            ))}
          </p>
        </S.Lead>
        <S.Pillars>
          {pillars.map(({ name, desc }) => (
            <li key={name}>
              <h3>{name}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </S.Pillars>
        <S.Founder>
          <p>
            <span>{t("about.founderLabel")}</span>
            {t("about.founder")}
          </p>
          <ul>
            {background.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </S.Founder>
      </S.Section>

      <S.Section id="contact" aria-labelledby="contact-title">
        <S.Head>
          <h2 id="contact-title">{t("contact.title")}</h2>
          <p>{t("contact.lead")}</p>
        </S.Head>
        <S.Mail href={`mailto:${EMAIL}`}>
          <S.Dot aria-hidden />
          {EMAIL}
        </S.Mail>
        <S.Footer>
          <span>© 2026 Seoul Circle</span>
          <span>{t("contact.footer")}</span>
        </S.Footer>
      </S.Section>
    </>
  );
};

export default Studio;

const S = {
  Section: styled.section`
    padding: clamp(96px, 14vw, 200px) var(--gutter) 0;
    scroll-margin-top: 96px; /* clear the fixed header */

    &:last-of-type {
      min-height: 80svh;
      display: flex;
      flex-direction: column;
    }
  `,
  Head: styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
    gap: 16px 48px;
    margin-bottom: clamp(40px, 6vw, 80px);

    & h2 {
      font-size: clamp(56px, 9vw, 96px);
      font-weight: 300;
      letter-spacing: -0.04em;
      line-height: 0.9;
    }
    & p {
      max-width: 36ch;
      font-size: clamp(17px, 1.5vw, 20px);
      line-height: 1.55;
      color: var(--muted);
      word-break: keep-all;
    }
    @media (max-width: 639px) {
      grid-template-columns: 1fr;
    }
  `,
  Grid: styled.ol`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(40px, 5vw, 64px) clamp(16px, 2.5vw, 32px);

    @media (max-width: 1023px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 639px) {
      grid-template-columns: 1fr;
    }
  `,
  Tile: styled(Link)`
    display: block;

    &:hover img {
      transform: scale(1.03);
    }
    &:hover span:first-of-type {
      text-decoration: underline;
      text-underline-offset: 0.2em;
      text-decoration-thickness: 1px;
    }
  `,
  Thumb: styled.div`
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #f2f2f2;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `,
  Caption: styled.p`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 14px;
    font-size: 16px;
    line-height: 1.4;
    word-break: keep-all;

    & span + span {
      color: var(--muted);
      text-align: right;
    }
  `,
  Lead: styled.div`
    display: grid;
    gap: 0.6em;
    font-size: clamp(17px, 1.5vw, 20px);
    line-height: 1.6;
    word-break: keep-all;

    & strong {
      font-weight: 600;
    }
  `,
  Sentence: styled.span`
    display: block;

    @media (min-width: 1024px) {
      & span {
        white-space: nowrap;
      }
    }
  `,
  Pillars: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px 48px;
    margin-top: clamp(72px, 10vw, 144px);

    & h3 {
      font-size: clamp(28px, 3vw, 44px);
      font-weight: 300;
      letter-spacing: -0.035em;
      margin-bottom: 16px;
    }
    & p {
      max-width: 34ch;
      font-size: 17px;
      line-height: 1.6;
      color: var(--muted);
      word-break: keep-all;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  `,
  Founder: styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 16px 48px;
    margin-top: clamp(72px, 10vw, 144px);
    font-size: 17px;
    line-height: 1.6;

    & p span {
      display: block;
      color: var(--muted);
      margin-bottom: 4px;
    }
    & ul {
      display: grid;
      gap: 6px;
      word-break: keep-all;
    }
    @media (max-width: 639px) {
      grid-template-columns: 1fr;
    }
  `,
  Mail: styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.35em;
    align-self: flex-start;
    font-size: clamp(28px, 6.4vw, 96px);
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 1;
    overflow-wrap: anywhere;

    &:hover span {
      transform: scale(1.35);
    }
  `,
  Dot: styled.span`
    flex: none;
    width: 0.22em;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--accent);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  `,
  Footer: styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: auto;
    padding: 96px 0 28px;
    font-size: 15px;
    color: var(--muted);
  `,
};
