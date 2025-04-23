"use client";
import { S } from "../styles/ZoomDeveloper.style";

const Developer = () => {
  return (
    <S.Developer>
      <S.Wrapper>
        <S.Title>
          <header>
            <h2>디케이테크인</h2>
            <div>
              <span>검색서비스 개발팀</span>
              <span>2022.02 - 2024.05</span>
            </div>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>다음(Daum) 검색 컬렉션 프론트엔드 개발</h3>
              <span>2022.04 - 2024.05</span>
            </S.ArticleHeader>

            <ul>
              <li>
                장소, 주식, 세계시간, 날씨 등 다양한 컬렉션의 UI 개발 및 기능
                개선
              </li>
              <li>
                기획·디자인·백엔드와 협업해 기술 제약, 접근성, 데이터 구조를
                고려한 UI 설계 조율
              </li>
              <li>
                40여 개 디바이스/브라우저 환경 대응 테스트로 UI 일관성 확보
              </li>
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>2024 제22대 국회의원선거 컬렉션 개발</h3>
              <span>2023.12 - 2024.04</span>
            </S.ArticleHeader>

            <ul>
              <li>
                총선 기간 운영되는 시즈널 컬렉션으로, 빠른 응답성과 높은
                정확도를 우선한 투표소 검색 UI 개발
              </li>
              <li>
                검색어 또는 현위치 기반 요청 시, 리스트 영역만 AJAX로 교체
                렌더링해 경량 UI 구현
              </li>
              <li>
                정규식 기반 입력값 필터링으로 파라미터 변조·XSS 등 기초적인
                클라이언트 보안 위협 사전 차단
              </li>
              <li>
                카카오맵 서비스팀과 협업해 검색 반경·정렬 기준·키워드 해석 방식
                일치화 → 정합도 약 97% 달성
              </li>
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>검색 UI Storybook 기반 구조로 전환</h3>
              <span>2024.01 - 2024.05</span>
            </S.ArticleHeader>

            <ul>
              <li>
                Freemarker → React + Storybook 컴포넌트 구조로 점진적 전환
              </li>
              <li>
                기획·디자인팀과 UI 구성 원칙 수립, 공통 요소를컴포넌트화하여
                신규 개발과 유지보수 시 재사용성을 확보
              </li>
              <li>
                Storybook 시각화 도입으로 QA·디자인 커뮤니케이션 효율 약 1.5배
                향상
              </li>
              <li>
                Node 기반 프론트 중심 빌드 및 배포 환경 전환 과정 직접 경험
              </li>
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>부동산 컬렉션 신규 기능 구현 및 개선</h3>
              <span>2023.06 - 2023.10</span>
            </S.ArticleHeader>

            <ul>
              <li>
                3단계 지역 드롭다운 필터 구현 및 쿼리 기반 새로고침으로 검색
                엔진 색인 최적화
              </li>
              <li>
                실거래 유형 데이터를 항목별로 분리 시각화해 비교 탐색 흐름 개선
              </li>
              <li>
                Flipsnap 슬라이드, 면적 단위 전환, 카카오 공유 등 UI 기능 jQuery
                기반으로 구현
              </li>
              <li>
                기존 백엔드 중심 개발 흐름을 목업 데이터 기반 프론트 선개발
                구조로 전환해 개발 속도와 협업 효율 향상
              </li>
            </ul>
            <p>
              기술 스택 : JavaScript · TypeScript · React · jQuery · Freemarker
              · SCSS · Storybook
            </p>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>
      <S.Wrapper>
        <S.Title>
          <header>
            <h2>프로젝트</h2>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>디자인 시스템 기반 UI 컴포넌트 구축 및 배포 자동화</h3>
            </S.ArticleHeader>

            <ul>
              <li>
                Figma 디자인 토큰을 기반으로 React + Storybook 컴포넌트 구현
              </li>
              <li>
                GitHub Actions로 정적(Storybook)·동적(Next.js) 서비스 분리 배포
                자동화
              </li>
              <li>
                Monorepo 구조로 프로젝트 관리, 유지보수성과 배포 효율성 향상
              </li>
            </ul>
            <p>
              기술 스택 : Next.js · React · TypeScript · Emotion · Storybook ·
              Figma · GitHub Actions · Vercel · pnpm
            </p>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>인터랙션 기반 포트폴리오 프로젝트</h3>
              <span>2023.06 - 2023.10</span>
            </S.ArticleHeader>

            <ul>
              <li>
                Framer Motion, Matter.js, dnd-kit 등을 활용한 인터랙션 중심 토이
                프로젝트 개발
              </li>
              <li>
                Alphabet Builder : 드래그 및 물리 엔진으로 알파벳 조합 게임 구현
              </li>
              <li>
                Day Palette : 날씨 데이터를 기반으로 컬러 그라데이션 UI 시각화
              </li>
              <li>
                Time Question : 시간대별 질문이 분 단위로 전환되는 인터랙션 기반
                UI
              </li>
            </ul>
            <p>
              기술 스택 : React · TypeScript · Emotion · Framer Motion ·
              Matter.js · dnd-kit
            </p>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>
      <S.Wrapper>
        <S.Title>
          <header>
            <h2>외부 활동</h2>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>광주 법무부 솔로몬파크 키오스크 웹 서비스 개발</h3>
              <span>2025.02</span>
            </S.ArticleHeader>

            <ul>
              <li>
                키오스크용 웹 기반 UI를 기획부터 디자인, 개발까지 단독 수행
              </li>
              <li>
                사용자 연령대와 시청 목적을 고려한 콘텐츠 구조 및 UX 흐름 설계
              </li>
              <li>터치 기반 인터랙션과 해상도 대응 중심의 웹툰 뷰어 구현</li>
            </ul>

            <p>기술 스택 : HTML · CSS · JavaScript · Swiper.js</p>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>
                「디지털 패션 테크 플랫폼 무신사의 반응형 웹 디자인 개발」 논문
                기고
              </h3>
              <span>2022.09</span>
            </S.ArticleHeader>

            <ul>
              <li>
                기존 적응형 웹 구조를 반응형 웹으로 재설계하는 과정을 논문화
              </li>
              <li>
                다양한 해상도 및 사용자 행동 패턴을 고려한 UI/UX 개선 방향 제안
              </li>
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>
    </S.Developer>
  );
};

export default Developer;
