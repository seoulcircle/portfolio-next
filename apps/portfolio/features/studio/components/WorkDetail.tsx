"use client";

import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Link } from "../../../i18n/navigation";
import { works, type Work } from "../data/works";
import { pageStyles } from "../styles/pageStyles";

const WorkDetail = ({ slug }: { slug: Work["slug"] }) => {
  const t = useTranslations("studio");
  const index = works.findIndex((w) => w.slug === slug);
  const { image } = works[index];
  const next = works[(index + 1) % works.length];
  const key = `work.items.${slug}`;
  const type = t(`${key}.type`);
  const year = t(`${key}.year`);
  const summary = t(`${key}.summary`);
  const details = t.raw(`${key}.details`) as string[];

  return (
    <>
      <Global styles={pageStyles} />
      <S.Top>
        <Link href="/">seoul circle</Link>
        <Link href="/#work">
          <ArrowLeft aria-hidden size="1em" strokeWidth={1.5} /> {t("work.back")}
        </Link>
      </S.Top>

      <S.Article>
        <S.Title>{t(`${key}.title`)}</S.Title>
        {(type || year) && (
          <S.Meta>
            {type && <span>{type}</span>}
            {year && <span>{year}</span>}
          </S.Meta>
        )}
        {summary && <S.Summary>{summary}</S.Summary>}

        <S.Hero>
          {image ? (
            <Image src={image} alt="" sizes="100vw" priority />
          ) : (
            <span>{t("work.imagePending")}</span>
          )}
        </S.Hero>

        {details.length > 0 && (
          <S.Details>
            {details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </S.Details>
        )}
      </S.Article>

      <S.Next href={`/work/${next.slug}`}>
        <span>{t("work.next")}</span>
        {t(`work.items.${next.slug}.title`)}
      </S.Next>
    </>
  );
};

export default WorkDetail;

const S = {
  Top: styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 28px var(--gutter);
    font-size: 17px;

    & svg {
      vertical-align: -0.125em;
    }
  `,
  Article: styled.article`
    padding: clamp(48px, 8vw, 120px) var(--gutter) 0;
  `,
  Title: styled.h1`
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 1;
    word-break: keep-all;
  `,
  Meta: styled.p`
    display: flex;
    gap: 16px;
    margin-top: 20px;
    font-size: 16px;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  `,
  Summary: styled.p`
    max-width: 36ch;
    margin-top: clamp(32px, 4vw, 56px);
    font-size: clamp(20px, 2vw, 28px);
    line-height: 1.5;
    letter-spacing: -0.02em;
    word-break: keep-all;
  `,
  Hero: styled.div`
    display: grid;
    place-items: center;
    aspect-ratio: 16 / 9;
    margin-top: clamp(48px, 6vw, 96px);
    overflow: hidden;
    background: #f2f2f2;
    font-size: 15px;
    color: var(--muted);

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  Details: styled.ul`
    display: grid;
    gap: 12px;
    max-width: 60ch;
    margin: clamp(48px, 6vw, 96px) 0 0 auto;
    width: 50%;
    font-size: 17px;
    line-height: 1.6;
    word-break: keep-all;

    & li::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 12px 0.2em 0;
      border-radius: 50%;
      background: var(--accent);
    }
    @media (max-width: 767px) {
      width: auto;
      margin-left: 0;
    }
  `,
  Next: styled(Link)`
    display: block;
    margin-top: clamp(96px, 12vw, 200px);
    padding: 0 var(--gutter) 48px;
    font-size: clamp(32px, 5vw, 64px);
    font-weight: 300;
    letter-spacing: -0.035em;

    & span {
      display: block;
      margin-bottom: 12px;
      font-size: 15px;
      letter-spacing: 0;
      color: var(--muted);
    }
    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.15em;
      text-decoration-thickness: 1px;
    }
  `,
};
