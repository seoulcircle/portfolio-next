"use client";
/** @jsxImportSource @emotion/react */
import { ArrowRight } from "lucide-react";
import { S } from "./Zoom.style";
import Link from "next/link";
import { ZoomContentProps } from "../types/types";

const ZoomContent = ({ project }: ZoomContentProps) => {
  return (
    <S.Detail>
      {project.thumbnail && (
        <S.ThumbImg src={project.thumbnail} alt={`${project.name} thumbnail`} />
      )}
      <S.DetailInfo>
        {project.id === "honglee" ? (
          <S.Introduction
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        ) : (
          <p>{project.description}</p>
        )}
        <S.Badge>
          {project.stack?.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </S.Badge>
        <S.Badge>
          {project.api?.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </S.Badge>
        {project.route ? (
          <Link href={project.route} passHref>
            <S.RouteButton>
              <ArrowRight size={30} strokeWidth={1.5} />
              DEMO
            </S.RouteButton>
          </Link>
        ) : null}
      </S.DetailInfo>
    </S.Detail>
  );
};

export default ZoomContent;
