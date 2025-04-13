"use client";
/** @jsxImportSource @emotion/react */
import { ArrowRight, X } from "lucide-react";
import { S } from "../styles/Zoom.style";
import { ZoomContentProps } from "../types/main.types";
import Developer from "./ZoomDeveloper";
import Image from "next/image";
import useLockBodyZoomScroll from "../hooks/useLockBodyZoom";
import MapArchive from "./MapArchive";
import GithubIcon from "../data/githubIcon";
import TextButton from "@components/Button/TextButton";
import Badge from "@components/Badge/Badge";
import IconButton from "@components/Button/IconButton/IconButton";

const ZoomContent = ({ project, onClose }: ZoomContentProps) => {
  useLockBodyZoomScroll(true);
  return (
    <>
      {project.id === "developer" ? (
        <Developer />
      ) : project.id === "dots" ? (
        <MapArchive />
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 1px" }}>
              {project.stack?.map((item) => (
                <Badge key={item} style={{ marginRight: "5px" }}>
                  {item}
                </Badge>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 1px" }}>
              {project.api?.map((item) => (
                <Badge key={item} style={{ marginRight: "5px" }}>
                  {item}
                </Badge>
              ))}
            </div>
            <S.DemoGitWrapper>
              {project.route ? (
                <TextButton
                  href={project.route}
                  icon={<ArrowRight size={20} strokeWidth={1.5} />}
                  variant="black"
                  size="md"
                >
                  <strong>DEMO</strong>
                </TextButton>
              ) : null}
              {project.git ? (
                <IconButton
                  href={project.git}
                  icon={<GithubIcon width={30} height={30} />}
                />
              ) : null}
            </S.DemoGitWrapper>
          </S.DetailInfo>
        </S.Detail>
      )}
      {/* <S.CloseButton onClick={onClose}>
        <X size={30} strokeWidth={1.5} />
      </S.CloseButton> */}
      <IconButton
        aria-label="닫기"
        icon={<X size={30} strokeWidth={1.5} />}
        onClick={onClose}
        style={{ position: "absolute", top: "20px", right: "20px" }}
      />
    </>
  );
};

export default ZoomContent;
