"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import home from "../public/home.svg";
import Image from "next/image";
import { useIsMobile } from "@hooks/useMediaQuery";
import { useState, useEffect } from "react";

const HeaderNav = styled.nav<{ $isVisible: boolean; $isReady: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  cursor: pointer;
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  opacity: ${(props) => (props.$isReady ? 1 : 0)};
  pointer-events: ${(props) => (props.$isReady ? "auto" : "none")};
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

const HomeIcon = styled(Image)`
  width: 40px;
  height: 40px;

  @media (max-width: 639px) {
    width: 30px;
    height: 30px;
  }
`;

function Header() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomePage = pathname === "/";
  const isVisible = !isHomePage;
  const isReady = mounted;

  return (
    <HeaderNav $isVisible={isVisible} $isReady={isReady}>
      <Link href="/" passHref>
        <HomeBtn>
          <HomeIcon src={home} alt="home icon" width={40} height={40} />
          HOME
        </HomeBtn>
      </Link>
    </HeaderNav>
  );
}

export default Header;
