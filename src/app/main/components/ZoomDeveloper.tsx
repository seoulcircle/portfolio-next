"use client";
import { S } from "./ZoomDeveloper.style";

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
            <h3>검색 컬렉션의 유지, 보수 및 개선 담당</h3>
            <span>2022.04 - 2024.05</span>

            <h4>Description</h4>
            <p>
              다음(Daum) 서비스의 다양한 검색 컬렉션의 프론트엔드 개선 업무를
              맡아, 안정성과 일관된 사용자 경험을 유지하며 UI를 개선했습니다.
            </p>

            <h4>My Task</h4>
            <ul>
              <li>
                · 다양한 브라우저 및 해상도 환경에서의 안정적인 UI 렌더링 보장을
                위해 크로스 브라우징 및 테스트 진행
              </li>
              <li>
                · 기획/디자인팀에서 전달된 개선 사항을 바탕으로 다수의 마이크로
                검색 기능에 대한 프론트엔드 대응
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>JavaScript, jQuery, Freemarker, SCSS</p>
          </S.Article>

          <S.Article>
            <h3>제22대 국회의원선거 컬렉션 개발</h3>
            <span>2023.12 - 2024.04</span>

            <h4>Description</h4>
            <p>
              검색 플랫폼의 안정성과 신뢰성 확보를 최우선으로 총선 컬렉션 중
              투표소 탭과 공통 UI 컴포넌트 개발을 담당했습니다.
            </p>

            <h4>My Task</h4>
            <ul>
              <li>
                · 사용자의 현위치를 기반으로 가까운 투표소를 자동 탐색 및
                리스트업 기능 구현
              </li>
              <li>
                · 장소 검색 쿼리에 대해 다양한 필터 기능을 적용하여 정밀한
                데이터 제공
              </li>
              <li>
                · 입력값 보안 강화를 위한 특수문자·기호·영문 예외처리 적용,
                클라이언트 차원의 해킹 방지 처리
              </li>
              <li>
                · 카카오 장소 서비스팀과의 지속적인 커뮤니케이션을 통해 데이터
                매칭 및 렌더링 안정성 확보
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>JavaScript, jQuery, Freemarker, SCSS</p>
          </S.Article>

          <S.Article>
            <h3>검색 컬렉션 컴포넌트 Storybook 이관</h3>
            <span>2024.01 - 2024.05</span>

            <h4>Description</h4>
            <p>
              기존 Spring Boot 기반의 Freemarker 템플릿 구조에서 React 기반
              컴포넌트 구조로 이관하여, 컴포넌트 재사용성과 프론트엔드의 독립적
              배포 환경을 구축했습니다.
            </p>

            <h4>My Task</h4>
            <ul>
              <li>
                · 주로 담당했던 컬렉션 단위와 공통 UI 컴포넌트 일부를 Storybook
                기반으로 재구성
              </li>
              <li>
                · 기획 및 디자인팀과의 협업을 통해 컴포넌트 기준, 상태 정의,
                스타일 가이드 정리 등 체계적인 UI 시스템 구축
              </li>
              <li>
                · 코드 재사용성과 테스트 효율성을 높여, 향후 검색 컬렉션 개발의
                생산성과 일관성 확보에 기여
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>React, TypeScript, Storybook, SCSS</p>
          </S.Article>

          <S.Article>
            <h3>부동산 컬렉션 신규 기능 구현 및 개선</h3>
            <span>2023.06 - 2023.10</span>

            <h4>Description</h4>
            <p>
              주소 기반 필터링, 실거래가 시각화, 길찾기 기능 등 사용자 중심의
              신규 기능을 구현하고 UI를 고도화했습니다.
            </p>

            <h4>My Task</h4>
            <ul>
              <li>
                · 3단계 구조의 주소 드롭다운 UI 구현, 지역 선택에 따른 하위 지역
                API 연동 및 비동기 렌더링 처리
              </li>
              <li>
                · 실거래가, 최근 시세, 분양 상세정보 데이터를 시각화하여 복잡한
                정보를 직관적으로 전달할 수 있는 UI 및 사용자 경험 개선
              </li>
              <li>
                · 길찾기, 거주민 리뷰, 매매 항목별 구분 등 다양한 신규 기능 구현
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>JavaScript, jQuery, Freemarker, SCSS</p>
          </S.Article>

          <S.Article>
            <h3>장소 컬렉션 렌더링 구조 개선 및 유지보수</h3>
            <span>2023.01 - 2023.04</span>

            <h4>Description</h4>
            <p>
              장소 필터 조건에 따라 API를 갱신하는 렌더링 로직을 구현하고,
              사용자 편의 기능을 개선했습니다.
            </p>

            <h4>My Task</h4>
            <ul>
              <li>
                · 필터 조건에 맞는 API 응답을 검색 구조에 맞게 처리하여
                클라이언트에서 DOM을 동적으로 갱신
              </li>
              <li>
                · 지역명 중복 이슈 대응을 위한 동명 지역 구분 UI 및 데이터 연동
                로직 구현
              </li>
              <li>
                · 현위치, 주소 정보 팝업, 복사 기능 등 사용자 편의 기능 개발 및
                개선
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>JavaScript, jQuery, Freemarker, SCSS</p>
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
            <h3>광주 법무부 솔로몬파크 키오스크 웹툰 콘텐츠 개발</h3>
            <span>2024.02</span>

            <h4>Description</h4>
            <p>
              법무부의 웹툰 콘텐츠 탐색을 위한 웹 기반 키오스크 UI를 기획,
              디자인 및 개발까지 단독 수행하였습니다.
            </p>

            <h4>My Task</h4>
            <ul>
              <li>
                · 사용자의 연령과 시청 목적 및 UX 흐름을 고려한 콘텐츠 탐색
                인터페이스 구현
              </li>
              <li>
                · 키오스크 환경에 맞춘 해상도 대응 및 터치 기반 인터랙션을
                고려한 웹툰 뷰어 설계
              </li>
            </ul>

            <h4>Tech Stack</h4>
            <p>HTML, CSS, JavaScript, Swiper.js</p>
          </S.Article>

          <S.Article>
            <h3>
              학회지 논문 기고: 「디지털 패션 테크 플랫폼 무신사의 반응형 웹
              디자인 개발」
            </h3>
            <span>2022.09</span>

            <h4>Description</h4>
            <p>
              무신사의 기존 적응형 웹 구조를 반응형으로 재설계하며, 개발하는
              과정을 정리한 논문을 기고하였습니다.
            </p>

            <h4>My Task</h4>
            <ul>
              <li>
                · 다양한 해상도 및 디바이스 환경에서의 사용자 경험을 분석하고,
                유연한 레이아웃 구조 및 그리드 시스템 설계 방향 제안
              </li>
              <li>
                · 디지털 패션 플랫폼의 특성과 사용자 행동 패턴을 고려한 UI/UX
                개선 방안을 중심으로 기술
              </li>
            </ul>
          </S.Article>
        </S.ArticleItem>
      </S.Wrapper>
    </S.Developer>
  );
};

export default Developer;
