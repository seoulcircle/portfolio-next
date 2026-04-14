"use client";
import { useTranslations } from "next-intl";
import { S } from "../styles/ZoomDeveloper.style";

const Developer = () => {
  const t = useTranslations("developer");

  const freelancerKioskItems = t.raw("freelancer.kiosk.items") as string[];
  const freelancerYogaItems = t.raw("freelancer.yoga.items") as string[];
  const freelancerCafe24Items = t.raw("freelancer.cafe24.items") as string[];

  const daumItems = t.raw("dktechin.daum.items") as string[];
  const electionItems = t.raw("dktechin.election.items") as string[];
  const storybookItems = t.raw("dktechin.storybook.items") as string[];
  const realestateItems = t.raw("dktechin.realestate.items") as string[];

  const designSystemItems = t.raw("projects.designSystem.items") as string[];
  const portfolioItems = t.raw("projects.portfolio.items") as string[];

  const paperItems = t.raw("externalActivities.paper.items") as string[];

  return (
    <S.Developer>
      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("freelancer.title")}</h2>
            <div>
              <span>{t("freelancer.role")}</span>
              <span>{t("freelancer.period")}</span>
            </div>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("freelancer.kiosk.title")}</h3>
            </S.ArticleHeader>
            <ul>
              {freelancerKioskItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>{t("freelancer.yoga.title")}</h3>
            </S.ArticleHeader>
            <ul>
              {freelancerYogaItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>{t("freelancer.cafe24.title")}</h3>
            </S.ArticleHeader>
            <ul>
              {freelancerCafe24Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t("freelancer.cafe24.stack")}</p>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("dktechin.title")}</h2>
            <div>
              <span>{t("dktechin.team")}</span>
              <span>{t("dktechin.period")}</span>
            </div>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dktechin.daum.title")}</h3>
              <span>{t("dktechin.daum.period")}</span>
            </S.ArticleHeader>
            <ul>
              {daumItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dktechin.election.title")}</h3>
              <span>{t("dktechin.election.period")}</span>
            </S.ArticleHeader>
            <ul>
              {electionItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dktechin.storybook.title")}</h3>
              <span>{t("dktechin.storybook.period")}</span>
            </S.ArticleHeader>
            <ul>
              {storybookItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>{t("dktechin.realestate.title")}</h3>
              <span>{t("dktechin.realestate.period")}</span>
            </S.ArticleHeader>
            <ul>
              {realestateItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t("dktechin.realestate.stack")}</p>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("projects.title")}</h2>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("projects.designSystem.title")}</h3>
            </S.ArticleHeader>
            <ul>
              {designSystemItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t("projects.designSystem.stack")}</p>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>{t("projects.portfolio.title")}</h3>
              <span>{t("projects.portfolio.period")}</span>
            </S.ArticleHeader>
            <ul>
              {portfolioItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t("projects.portfolio.stack")}</p>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>

      <S.Wrapper>
        <S.Title>
          <header>
            <h2>{t("externalActivities.title")}</h2>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>{t("externalActivities.paper.title")}</h3>
              <span>{t("externalActivities.paper.period")}</span>
            </S.ArticleHeader>
            <ul>
              {paperItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>
    </S.Developer>
  );
};

export default Developer;
