"use client";

import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import home from "../public/home.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Link } from "../i18n/navigation";

const HeaderNav = styled.nav<{ $isVisible: boolean; $isReady: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  cursor: pointer;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  align-items: center;
  gap: 16px;
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

const LangSwitch = styled(Link)`
  font-size: 13px;
  font-weight: 600;
  color: black;
  opacity: 0.5;
  letter-spacing: 0.05em;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

function Header() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  // pathname from next/navigation includes locale prefix e.g. /ko/alphabet
  const pathSegments = pathname.split("/").filter(Boolean);
  const pathWithoutLocale =
    pathSegments.length <= 1 ? "/" : "/" + pathSegments.slice(1).join("/");

  const isHomePage = pathWithoutLocale === "/";
  const isVisible = !isHomePage;
  const isReady = mounted;
  const otherLocale = locale === "ko" ? "en" : "ko";

  return (
    <HeaderNav $isVisible={isVisible} $isReady={isReady}>
      <Link href="/" passHref>
        <HomeBtn>
          <HomeIcon src={home} alt="home icon" width={40} height={40} />
          HOME
        </HomeBtn>
      </Link>
      <LangSwitch href={pathWithoutLocale} locale={otherLocale}>
        {otherLocale.toUpperCase()}
      </LangSwitch>
    </HeaderNav>
  );
}

export default Header;
