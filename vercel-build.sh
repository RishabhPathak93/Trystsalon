#!/bin/bash

echo "Installing Git LFS..."
apt-get update && apt-get install -y git-lfs

echo "Initializing Git LFS..."
git lfs install

echo "Pulling Git LFS files..."
git lfs pull

echo "Building the project..."
bun run build
