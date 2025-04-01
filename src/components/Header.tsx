"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import home from "../../public/home.svg";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useState, useEffect } from "react";

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
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);
  // 홈에서는 헤더 숨기기
  if (pathname === "/") return null;

  if (!mounted) return null; // 또는 skeleton

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
