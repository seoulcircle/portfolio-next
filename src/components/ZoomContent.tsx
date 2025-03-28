"use client";
/** @jsxImportSource @emotion/react */
import { ArrowRight } from "lucide-react";
// import { useEffect, useState, useRef } from "react";
import { S } from "./ZoomContent.style";

interface ZoomContentProps {
  project: {
    name: string;
    id: string;
    description: string;
    stack?: string[];
    api?: string[];
    thumbnail?: string;
  };
}

const ZoomContent = ({ project }: ZoomContentProps) => {
  // const overlayVariants = {
  //   rest: { opacity: 0, y: 10, transition: { duration: 0.2 } },
  //   hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  // };
  return (
    <S.Detail>
      {/* <S.DetailWrapper
        style={{
          position: "relative",
          width: "100%",

          aspectRatio: "4 / 3",
        }}
      > */}
      {project.thumbnail && (
        <S.ThumbImg src={project.thumbnail} alt={`${project.name} thumbnail`} />
      )}
      <S.DetailInfo>
        <p>{project.description}</p>
        <div>
          {project.stack?.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div>
          {project.api?.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
        <S.RouteButton>
          <ArrowRight size={30} strokeWidth={2} />
          LINK
        </S.RouteButton>
      </S.DetailInfo>
      {/* </S.DetailWrapper> */}
    </S.Detail>
  );
};

export default ZoomContent;
