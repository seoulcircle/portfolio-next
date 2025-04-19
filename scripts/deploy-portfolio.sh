#!/bin/bash

set -e

# 환경 파일 설정
source ./scripts/env.portfolio

# apps/portfolio 디렉토리로 이동


# Vercel 배포 실행
vercel deploy --prod --yes --token $VERCEL_TOKEN

# 원래 디렉토리로 돌아가기
cd -
