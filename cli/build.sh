#!/bin/sh

rm -rf build
mkdir build
cp -r src build/
cp manifest.json build/
zip -r build/popetick.zip build/*
