#!/bin/bash

set -e

source ./scripts/env.storybook

cd apps/storybook

mkdir -p .vercel/output/static
cp -r storybook-static/* .vercel/output/static/

cat > .vercel/output/config.json <<EOF
{
  "version": 3
}
EOF

vercel deploy --prebuilt --prod --token $VERCEL_TOKEN
