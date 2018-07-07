#!/usr/bin/env bash
set -e
boot prod
git add .
git commit -m build
git push origin master
