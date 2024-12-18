#!/usr/bin/env bash
# vim: set ft=sh:

set -e
set -x

if [ -f "out.tar.gz" ]; then
    echo "Found tar file"

    if /usr/bin/tar -xzf "out.tar.gz" -C $(pwd) --strip-components=1; then
        echo "Successfully extracted tar file"

    else
        echo "Failed to extract tar file"
        exit 1
    fi
else
    echo "Tar file not found"
    exit 1
fi
