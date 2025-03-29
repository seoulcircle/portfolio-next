"use client";

import styled from "@emotion/styled";
// import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import home from "../../public/home.svg";
import Image from "next/image";
import { useIsMobile } from "@/pages/TimeQuestion/hooks/useMediaQuery";

// const StyledAnchor = styled.a`
//   cursor: pointer;
//   text-decoration: none;
// `;
const HeaderNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  cursor: pointer;
  & a {
    text-decoration: none;
  }
`;

const HomeBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: black;
`;

function Header() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  // 홈에서는 헤더 숨기기
  if (pathname === "/") return null;

  return (
    <HeaderNav>
      <Link href="/" passHref>
        <HomeBtn>
          <Image
            src={home}
            alt="home icon"
            width={isMobile ? 30 : 40}
            height={isMobile ? 30 : 40}
          />
          HOME
        </HomeBtn>
      </Link>
    </HeaderNav>
  );
}

export default Header;
