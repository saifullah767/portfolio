#!/usr/bin/env bash
set -euo pipefail

rm -rf public
mkdir -p public

cp index.html public/index.html
cp -R assets public/assets

echo "Built Cloudflare Pages output in ./public"
