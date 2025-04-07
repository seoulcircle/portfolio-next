"use client";
import { S } from "@/features/main/styles/ZoomDeveloper.style";

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
              <h3>검색 컬렉션의 유지, 보수 및 개선 담당</h3>
              <span>2022.04 - 2024.05</span>
            </S.ArticleHeader>

            <p>
              ‘다음(Daum)’ 검색 컬렉션의 프론트엔드 개발을 담당하며, 다양한
              직군과 협업해 정확한 검색 결과와 일관된 UI 경험을 제공하는 데
              집중했습니다.
            </p>

            <h4>주요 업무</h4>
            <ul>
              <li>
                장소, 세계시간, 주식, 부동산, 날씨 등 다양한 검색 컬렉션의
                프론트엔드 개발 및 기능 개선을 담당하며, 검색 UI의 안정성과
                사용성을 지속적으로 개선
              </li>
              <li>
                기획자·디자이너·백엔드와 긴밀히 협업하여, 기술적 제약 고려한
                기획 조율, 웹 접근성을 고려한 디자인 일관성, 데이터 구조 설계
                등을 조율
              </li>
              <li>
                40여 개의 브라우저·디바이스 환경에서 철저한 테스트를 통해,
                웹·모바일·앱·카카오톡 샵검색 등 다양한 유입 경로에서도 일관된
                UI를 제공하고 주요 이슈를 사전에 방지
              </li>
            </ul>

            <h4>기술 스택</h4>
            <p>JavaScript, jQuery, Freemarker, SCSS, Webpack</p>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>제22대 국회의원선거 컬렉션 개발</h3>
              <span>2023.12 - 2024.04</span>
            </S.ArticleHeader>
            <p>
              국가 단위 이벤트인 총선에 맞춰 한시적으로 운영되는 시즈널
              컬렉션으로, 빠른 응답성과 높은 정확도를 우선하며 투표소 탭과 공통
              UI 컴포넌트를 개발했습니다.
            </p>

            <h4>주요 업무</h4>
            <ul>
              <li>
                검색어 입력 또는 현위치 기반 요청 시, 리스트 영역만 AJAX로 교체
                렌더링되도록 구성하고, 프레임워크 없이도 빠른 검색 UI를
                효율적으로 구현
              </li>
              <li>
                정규식 검증 및 인코딩 처리를 기반으로, 파라미터 변조·XSS 등
                기초적인 클라이언트 공격을 사전에 차단하는 입력값 필터링 로직을
                설계
              </li>
              <li>
                카카오맵 장소 서비스팀과 협업하여, 검색 반경·정렬 기준·키워드
                해석 방식을 통일해 다음 검색과 카카오맵 간의 검색 결과 정합도 약
                97% 달성
              </li>
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>검색 컬렉션 컴포넌트 Storybook 이관</h3>
              <span>2024.01 - 2024.05</span>
            </S.ArticleHeader>
            <p>
              기존 Spring Boot + Freemarker 기반 템플릿 구조에서 React +
              Storybook 기반 컴포넌트 구조로 이관하며, 디자인 시스템의 일관성과
              프론트엔드의 독립적인 개발 환경을 통해 UI 개발 효율성을 높이는 데
              기여했습니다.
            </p>

            <h4>주요 업무</h4>
            <ul>
              <li>
                기획·디자인팀과의 협업을 통해 일관적인 UI 구성 원칙을 수립하고
                React 컴포넌트화를 진행, 신규 컬렉션 개발 생산성과 기존 컬렉션의
                유지보수 효율을 동시에 향상
              </li>
              <li>
                점진적인 마이그레이션을 위해 기존 Freemarker 구조를 최대한
                유지하면서도, 조건 분기와 반복 구조는 React의 상태 기반 렌더링과
                JSX 표현식으로 전환해 마크업 중복을 해소
              </li>
              <li>
                React의 props 기반 상태 관리와 Storybook 시각화를 통해, 디자인
                커뮤니케이션과 QA 효율을 약 1.5배 이상 개선
              </li>
              <li>
                React 기반 구조 전환과 함께 도입된 Node 기반 배포 시스템과
                프론트 중심의 빌드 환경 전환 과정을 직접 경험
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>React, TypeScript, Storybook, SCSS, Freemarker </p>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>부동산 컬렉션 신규 기능 구현 및 개선</h3>
              <span>2023.06 - 2023.10</span>
            </S.ArticleHeader>
            <p>
              주소 기반 필터, 실거래가 비교 등 사용자의 탐색 흐름에 맞춘 신규
              기능을 개발하고, 복잡한 부동산 정보를 직관적으로 전달할 수 있도록
              UI를 개선했습니다.
            </p>

            <h4>주요 업무</h4>
            <ul>
              <li>
                3단계 지역 드롭다운 필터를 구현하여 상위 지역 선택 시 하위
                지역은 비동기 로딩, 적용 시 쿼리 기반 새로고침의 동기 처리로
                검색 엔진 색인 최적화와 사용자 유입 경로 확보에 기여
              </li>
              <li>
                한 차트에 혼합된 4종의 실거래 유형 데이터를 항목별로 분리해 각각
                시각화함으로써, 사용자가 원하는 항목을 빠르게 비교하고 파악할 수
                있도록 개선
              </li>
              <li>
                Flipsnap 슬라이드 UI, 카카오톡 공유 기능, 면적 단위 변경 등 주요
                UI 요소를 jQuery 기반으로 구현
              </li>
              <li>
                기존 백엔드 중심의 개발 흐름을, 프론트에서 목업 데이터로
                선개발하고 기획·디자인 컨펌 이후 백엔드에 구조를 요청하는
                방식으로 전환하여 협업 효율성과 개발 생산성을 향상시킴
              </li>
            </ul>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>장소 컬렉션 렌더링 구조 개선 및 유지보수</h3>
              <span>2023.01 - 2023.04</span>
            </S.ArticleHeader>
            <p>
              기존 동적 렌더링 구조를 유지하면서, 장소 필터와 현위치 조건을
              추가하여 다양한 검색 조건을 처리할 수 있도록 확장하고 이를 통해
              정보의 폭과 검색 편의성을 동시에 향상시켰습니다.
            </p>

            <h4>주요 업무</h4>
            <ul>
              <li>
                선택된 장소 필터 조건에 따라 검색 쿼리를 조합하고, 지도 이미지와
                리스트 영역을 AJAX로 비동기 갱신하여 평균 150ms 내외의 응답
                속도로 빠르고 정확한 검색 경험 유지
              </li>
              <li>
                카카오 공통 위치 모듈을 활용해 사용자 현재 위치 기반의 지역 정보
                수집 및 검색 기능 구현
              </li>
              <li>
                주소 복사, 정보 팝업, 동명 지역 구분 툴팁 등 보조 기능 개발로
                컬렉션의 클릭 로그 지표와 체류 시간 향상에 긍정적인 영향 기여
              </li>
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>
      <S.Wrapper>
        <S.Title>
          <header>
            <h2>기타 활동</h2>
          </header>
        </S.Title>
        <S.ArticleItem>
          <S.Article>
            <S.ArticleHeader>
              <h3>광주 법무부 솔로몬파크 키오스크 웹툰 콘텐츠 개발</h3>
              <span>2024.02</span>
            </S.ArticleHeader>
            <p>
              법무부의 웹툰 콘텐츠 탐색을 위한 웹 기반 키오스크 UI를 기획,
              디자인 및 개발까지 단독 수행하였습니다.
            </p>

            <h4>주요 업무</h4>
            <ul>
              <li>
                사용자의 연령과 시청 목적 및 UX 흐름을 고려한 콘텐츠 탐색
                인터페이스 구현
              </li>
              <li>
                키오스크 환경에 맞춘 해상도 대응 및 터치 기반 인터랙션을 고려한
                웹툰 뷰어 설계
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>HTML, CSS, JavaScript, Swiper.js</p>
          </S.Article>

          <S.Article>
            <S.ArticleHeader>
              <h3>
                학회지 논문 기고: 「디지털 패션 테크 플랫폼 무신사의 반응형 웹
                디자인 개발」
              </h3>
              <span>2022.09</span>
            </S.ArticleHeader>
            <p>
              무신사의 기존 적응형 웹 구조를 반응형으로 재설계하며, 개발하는
              과정을 정리한 논문을 기고하였습니다.
            </p>

            <h4>주요 업무</h4>
            <ul>
              <li>
                다양한 해상도 및 디바이스 환경에서의 사용자 경험을 분석하고,
                유연한 레이아웃 구조 및 그리드 시스템 설계 방향 제안
              </li>
              <li>
                디지털 패션 플랫폼의 특성과 사용자 행동 패턴을 고려한 UI/UX 개선
                방안을 중심으로 기술
              </li>
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>
    </S.Developer>
  );
};

export default Developer;
