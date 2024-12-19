#!/usr/bin/env bash
# vim: set ft=sh:

set -e
set -x

if [ -f "$(pwd)/out.tar.gz" ]; then
    echo "Found tar file"

    if /usr/bin/tar -xzf "$(pwd)/out.tar.gz"; then
        echo "Successfully extracted tar file"

    else
        echo "Failed to extract tar file"
        exit 1
    fi
else
    echo "Tar file not found"
    exit 1
fi
