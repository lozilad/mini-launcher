#!/bin/bash

rm -rf ./launcher-builder/build
rm -rf ./launcher-builder/out

npm run --prefix ./launcher-app build
cp -r ./launcher-app/build ./launcher-builder/

npm run --prefix ./launcher-builder package