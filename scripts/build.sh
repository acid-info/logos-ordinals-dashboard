#!/usr/bin/env bash
# vim: set ft=sh:

next build

# ghp-import in jenkins needs a directory
mkdir -p tiny-out
tar -czf tiny-out/out.tar.gz out/

# to execute in caddy-git exec post command
cp ./scripts/extract-output-and-clean.sh tiny-out/
