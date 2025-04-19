#!/bin/bash

set -e
source ./scripts/env.storybook

pnpm build-storybook

mkdir -p apps/storybook/.vercel/output

cat > apps/storybook/.vercel/output/config.json << EOF
{
  "version": 3,
  "outputDirectory": "../../storybook-static"
}
EOF

cd apps/storybook

vercel deploy --prod --prebuilt \
  --yes \
  --token $VERCEL_TOKEN

cd -
