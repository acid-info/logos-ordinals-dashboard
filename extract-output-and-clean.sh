#!/usr/bin/env bash
# vim: set ft=sh:

set -e
set -x

REPO_PATH="$(pwd)/repo"
TAR_FILE_PATH="$(REPO_PATH)/out.tar.gz"

if [ -f "${TAR_FILE_PATH}" ]; then
    echo "Found tar file"

    if /usr/bin/tar -xzf "${TAR_FILE_PATH}" -C "${REPO_PATH}" --strip-components=1; then
        echo "Successfully extracted tar file"

    else
        echo "Failed to extract tar file"
        exit 1
    fi
else
    echo "Tar file not found"
    exit 1
fi
