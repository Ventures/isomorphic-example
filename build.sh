#!/bin/sh

browserify client/src/index.js \
  -t babelify \
  --outfile client/dist/app.js
