"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { S } from "../styles/ZoomDeveloper.style";
import styled from "@emotion/styled";
import { breakpoints } from "@styles/theme";
import { typography } from "@styles/tokens/legacy";

import carbon1 from "@assets/images/a11y/carbon-1.png";
import carbon2 from "@assets/images/a11y/carbon-2.png";
import gestalt from "@assets/images/a11y/gestalt.png";
import primer from "@assets/images/a11y/primer.png";

const ImgWrapper = styled.div`
  position: relative;
  width: 60%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Caption = styled.p`
  font-size: ${typography.fontSize.base};
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 16px !important;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 11px;
  }
`;

const TocList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
  }
`;

const TocItem = styled.li<{ $active: boolean }>`
  list-style: none;
  font-size: 11px;
  opacity: ${({ $active }) => ($active ? 1 : 0.22)};
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  transition: opacity 0.3s ease;
  white-space: nowrap;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10px;
  }
`;

const SECTION_KEYS = ["insight", "designsystems", "dx", "sensory", "casestudy"] as const;

const Accessibility = () => {
  const t = useTranslations("accessibility");

  const whyItems = t.raw("insight.why.items") as string[];
  const voiceItems = t.raw("sensory.voice.items") as string[];
  const hapticItems = t.raw("sensory.haptic.items") as string[];
  const carbonItems = t.raw("designsystems.carbon.items") as string[];
  const gestaltItems = t.raw("designsystems.gestalt.items") as string[];
  const primerItems = t.raw("designsystems.primer.items") as string[];
  const ideItems = t.raw("dx.ide.items") as string[];
  const ciItems = t.raw("dx.ci.items") as string[];
  const auditItems = t.raw("casestudy.audit.items") as string[];
  const storybookItems = t.raw("dx.storybook.items") as string[];
  const manualItems = t.raw("dx.manual.items") as string[];
  const tossItems = t.raw("casestudy.toss.items") as string[];
  const joinuskoreaItems = t.raw("casestudy.joinuskorea.items") as string[];

  const tocLabels: Record<(typeof SECTION_KEYS)[number], string> = {
    insight: t("insight.title"),
    designsystems: "디자인 시스템",
    dx: "DX",
    sensory: t("sensory.title"),
    casestudy: t("casestudy.title"),
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollTop = container.scrollTop;
        const threshold = container.clientHeight * 0.3;
        let current = 0;
        sectionRefs.current.forEach((ref, i) => {
          if (!ref) return;
          if (ref.offsetTop - threshold <= scrollTop) current = i;
        });
        setActiveIndex(current);
      });
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const renderToc = () => (
    <TocList>
      {SECTION_KEYS.map((key, i) => (
        <TocItem key={key} $active={i === activeIndex}>
          {tocLabels[key]}
        </TocItem>
      ))}
    </TocList>
  );

  return (
    <S.Developer ref={containerRef}>
      <S.Wrapper ref={(el) => { sectionRefs.current[0] = el; }}>
        <S.Title>
          <header>
            <h2>{t("insight.title")}</h2>
          </header>
          {renderToc()}
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("insight.story.title")}</h3>
            </S.ArticleHeader>
            <p>{t("insight.story.body")}</p>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("insight.why.title")}</h3>
            </S.ArticleHeader>
            <ul>
              {whyItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

      <S.Wrapper ref={(el) => { sectionRefs.current[1] = el; }}>
        <S.Title>
          <header>
            <h2>{t("designsystems.title")}</h2>
          </header>
          {renderToc()}
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("designsystems.carbon.title")}</h3>
            </S.ArticleHeader>
            <ImgWrapper>
              <Image src={carbon1} alt="IBM Carbon accessibility documentation" placeholder="blur" />
            </ImgWrapper>
            <Caption>{t("designsystems.carbon.caption1")}</Caption>
            <ImgWrapper>
              <Image src={carbon2} alt="IBM Carbon keyboard interaction docs" placeholder="blur" />
            </ImgWrapper>
            <Caption>{t("designsystems.carbon.caption2")}</Caption>
            <ul>
              {carbonItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("designsystems.gestalt.title")}</h3>
            </S.ArticleHeader>
            <ImgWrapper>
              <Image src={gestalt} alt="Pinterest Gestalt accessibility props" placeholder="blur" />
            </ImgWrapper>
            <Caption>{t("designsystems.gestalt.caption")}</Caption>
            <ul>
              {gestaltItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("designsystems.primer.title")}</h3>
            </S.ArticleHeader>
            <ImgWrapper>
              <Image src={primer} alt="GitHub Primer accessibility tab" placeholder="blur" />
            </ImgWrapper>
            <Caption>{t("designsystems.primer.caption")}</Caption>
            <ul>
              {primerItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

      <S.Wrapper ref={(el) => { sectionRefs.current[2] = el; }}>
        <S.Title>
          <header>
            <h2>{t("dx.title")}</h2>
          </header>
          {renderToc()}
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dx.ide.title")}</h3>
              <span>{t("dx.ide.tool")}</span>
            </S.ArticleHeader>
            <ul>
              {ideItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dx.ci.title")}</h3>
              <span>{t("dx.ci.tool")}</span>
            </S.ArticleHeader>
            <ul>
              {ciItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dx.storybook.title")}</h3>
              <span>{t("dx.storybook.tool")}</span>
            </S.ArticleHeader>
            <ul>
              {storybookItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dx.manual.title")}</h3>
            </S.ArticleHeader>
            <ul>
              {manualItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

      <S.Wrapper ref={(el) => { sectionRefs.current[3] = el; }}>
        <S.Title>
          <header>
            <h2>{t("sensory.title")}</h2>
          </header>
          {renderToc()}
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("sensory.voice.title")}</h3>
              <span>{t("sensory.voice.api")}</span>
            </S.ArticleHeader>
            <ul>
              {voiceItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("sensory.haptic.title")}</h3>
              <span>{t("sensory.haptic.api")}</span>
            </S.ArticleHeader>
            <ul>
              {hapticItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

      <S.Wrapper ref={(el) => { sectionRefs.current[4] = el; }}>
        <S.Title>
          <header>
            <h2>{t("casestudy.title")}</h2>
          </header>
          {renderToc()}
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("casestudy.audit.title")}</h3>
              <a
                href={t("casestudy.audit.toolUrl")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "inherit", color: "inherit", textDecoration: "underline", opacity: 0.6 }}
              >
                {t("casestudy.audit.tool")}
              </a>
            </S.ArticleHeader>
            <ul>
              {auditItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("casestudy.joinuskorea.title")}</h3>
              <a
                href={t("casestudy.joinuskorea.toolUrl")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "inherit", color: "inherit", textDecoration: "underline", opacity: 0.6 }}
              >
                {t("casestudy.joinuskorea.tool")}
              </a>
            </S.ArticleHeader>
            <ul>
              {joinuskoreaItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("casestudy.toss.title")}</h3>
            </S.ArticleHeader>
            <ul>
              {tossItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

    </S.Developer>
  );
};

export default Accessibility;
