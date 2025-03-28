"use client";

import styled from "@emotion/styled";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const StyledAnchor = styled.a`
//   cursor: pointer;
//   text-decoration: none;
// `;
const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;
  width: 100%;
`;

function Header() {
  const pathname = usePathname();
  // 홈에서는 헤더 숨기기
  if (pathname === "/") return null;

  return (
    <Link href="/" passHref>
      <HeaderDiv>
        <ArrowLeft size={30} strokeWidth={1.5} />
        HOME
      </HeaderDiv>
    </Link>
  );
}

export default Header;
