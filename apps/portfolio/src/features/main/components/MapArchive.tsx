import styled from "@emotion/styled";
import { ReactSVG } from "react-svg";
import { useIsMobile } from "@hooks/useMediaQuery";

const FullscreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  transform: ${({ isMobile }) => (isMobile ? "rotate(90deg)" : "none")};
  scale: ${({ isMobile }) => (isMobile ? "1.7" : "1")};
  svg {
    width: 90vw;
    height: auto;
    max-height: 90vh;
    display: block;
  }

  svg path {
    fill: white;
    stroke: #333;
    transition: fill 0.3s ease;
  }

  svg path.visited {
    fill: #f26b6b;
  }
`;

const visitedCountries = [
  "Republic of Korea",
  "Japan",
  "Northern Mariana Islands",
  "Guam",
  "Taiwan",
  "China",
  "Vietnam",
  "Thailand",
  "Malaysia",
  "India",
  "Mongolia",
  "United Arab Emirates",
  "Italy",
  "Czech Republic",
  "Germany",
  "Austria",
  "Switzerland",
  "Hungary",
  "Belgium",
  "Luxembourg",
  "United Kingdom",
  "Croatia",
  "Netherlands1",
  "Portugal",
  "Norway",
  "Morocco",
  "France",
  "Canada",
  "United States",
];

const placeFootprintDotsInOrder = (svg: SVGSVGElement) => {
  const paths = Array.from(svg.querySelectorAll("path"));
  const points: { name: string; cx: number; cy: number }[] = [];

  visitedCountries.forEach((country) => {
    const lower = country.toLowerCase();

    const matchedPaths = paths.filter((p) => {
      const name = p.getAttribute("name")?.toLowerCase();
      const className = p.getAttribute("class")?.toLowerCase();
      const id = p.getAttribute("id")?.toLowerCase();
      return name === lower || className === lower || id?.includes(lower);
    });

    if (matchedPaths.length === 0) {
      console.warn(`❌ No matching path for ${country}`);
      return;
    }

    // 중심 좌표 평균 계산
    let totalX = 0;
    let totalY = 0;

    matchedPaths.forEach((p) => {
      const bbox = p.getBBox();
      totalX += bbox.x + bbox.width / 2;
      totalY += bbox.y + bbox.height / 2;
    });

    const cx = totalX / matchedPaths.length;
    const cy = totalY / matchedPaths.length;

    points.push({ name: country, cx, cy });
  });

  points.forEach((point, index) => {
    const { cx, cy } = point;

    // 점과 점 사이 연결선
    if (index > 0) {
      const prev = points[index - 1];
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", prev.cx.toString());
      line.setAttribute("y1", prev.cy.toString());
      line.setAttribute("x2", cx.toString());
      line.setAttribute("y2", cy.toString());
      line.setAttribute("stroke", "rgba(254, 58, 58, 0.5)");
      line.setAttribute("stroke-width", "3");
      line.setAttribute("opacity", "0");
      line.style.transition = "opacity 0.2s ease";
      svg.appendChild(line);

      setTimeout(() => {
        line.setAttribute("opacity", "1");
      }, index * 600 - 300);
    }

    // 텍스트 (나라 이름)
    const label = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    label.textContent = point.name;
    label.setAttribute("x", (cx + 10).toString());
    label.setAttribute("y", cy.toString());
    label.setAttribute("font-size", "24");
    label.setAttribute("fill", "#000");
    label.setAttribute("font-weight", "300");
    label.setAttribute("text-anchor", "start");
    label.setAttribute("dominant-baseline", "middle");
    label.setAttribute("opacity", "0");
    label.style.transition = "opacity 0.4s ease";
    svg.appendChild(label);

    // 점 (circle)
    const dot = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    dot.setAttribute("cx", cx.toString());
    dot.setAttribute("cy", cy.toString());
    dot.setAttribute("r", "6");
    dot.setAttribute("fill", "#333");
    dot.setAttribute("opacity", "0");
    dot.style.transition = "opacity 0.2s ease";
    svg.appendChild(dot);

    // 애니메이션 타이밍
    setTimeout(() => {
      dot.setAttribute("opacity", "1");
      label.setAttribute("opacity", "1");
    }, index * 600);
  });
};

const MapArchive = () => {
  const isMobile = useIsMobile();
  return (
    <FullscreenContainer>
      <MapWrapper isMobile={isMobile}>
        <ReactSVG
          src="/svg/world.svg"
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 100%; height: auto;");
          }}
          afterInjection={(svg) => {
            placeFootprintDotsInOrder(svg);
          }}
        />
      </MapWrapper>
    </FullscreenContainer>
  );
};

export default MapArchive;
