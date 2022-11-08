#!/bin/bash
## SET VARIABLES
BUILDER_DIR=launcher-builder
APP_DIR=launcher-app

## MAIN BUILD SCRIPTS
rm -rf ./$BUILDER_DIR/build
rm -rf ./$BUILDER_DIR/out

npm run --prefix ./$APP_DIR build
cp -r ./$APP_DIR/build ./$BUILDER_DIR/

npm run --prefix ./$BUILDER_DIR package
