"use client";
/** @jsxImportSource @emotion/react */
import { ArrowRight, X } from "lucide-react";
import { S } from "../styles/Zoom.style";
import Link from "next/link";
import { ZoomContentProps } from "../types/main.types";
import Developer from "./ZoomDeveloper";
import Image from "next/image";
import useLockBodyZoomScroll from "../hooks/useLockBodyZoom";

const ZoomContent = ({ project, onClose }: ZoomContentProps) => {
  useLockBodyZoomScroll(true);
  return (
    <>
      {project.id === "developer" ? (
        <Developer />
      ) : (
        <S.Detail>
          {project.thumbnail && (
            <S.ThumbImgWrapper>
              <Image
                src={project.thumbnail}
                alt={`${project.name} thumbnail`}
                fill
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL={project.thumbnail?.blurDataURL}
              />
            </S.ThumbImgWrapper>
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
      )}
      <S.CloseButton onClick={onClose}>
        <X size={30} strokeWidth={1.5} />
      </S.CloseButton>
    </>
  );
};

export default ZoomContent;
