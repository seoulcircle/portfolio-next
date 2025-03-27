"use client";
/** @jsxImportSource @emotion/react */

// import { useEffect, useState, useRef } from "react";
import { S } from "./ZoomContent.style";
// import { projects } from "../data/projectList";

interface ZoomContentProps {
  project: {
    name: string;
    id: string;
  };
}

const ZoomContent = ({ project }: ZoomContentProps) => {
  return <S.Detail>{project.name}</S.Detail>;
};

export default ZoomContent;
