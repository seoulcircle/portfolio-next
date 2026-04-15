"use client";
import { useTranslations } from "next-intl";
import { S } from "../styles/ZoomDeveloper.style";

const Accessibility = () => {
  const t = useTranslations("accessibility");

  const whyItems = t.raw("insight.why.items") as string[];
  const voiceItems = t.raw("sensory.voice.items") as string[];
  const hapticItems = t.raw("sensory.haptic.items") as string[];
  const ideItems = t.raw("dx.ide.items") as string[];
  const ciItems = t.raw("dx.ci.items") as string[];
  const storybookItems = t.raw("dx.storybook.items") as string[];
  const manualItems = t.raw("dx.manual.items") as string[];
  const tossItems = t.raw("casestudy.toss.items") as string[];

  return (
    <S.Developer>
      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("insight.title")}</h2>
          </header>
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

      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("sensory.title")}</h2>
          </header>
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

      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("dx.title")}</h2>
          </header>
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

      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("casestudy.title")}</h2>
          </header>
        </S.Title>
        <S.ArticleItem>
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
