#!/usr/bin/env bash
# vim: set ft=sh:

set -e
set -x

if [ -f "out.tar.gz" ]; then
    echo "Found tar file"

    if /usr/bin/tar -xzf "out.tar.gz" -C .; then
        echo "Successfully extracted tar file"

        if /usr/bin/rm -f "out.tar.gz"; then
            echo "Successfully cleaned up tar file"
            exit 0
        else
            echo "Failed to clean up tar file"
            exit 1
        fi
    else
        echo "Failed to extract tar file"
        exit 1
    fi
else
    echo "Tar file not found"
    exit 1
fi
