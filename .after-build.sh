#!/bin/bash

set -e

cd ./dist/

if test -e ./MarkdownPalettesBrowser.umd.min.js
then
    mv ./MarkdownPalettesBrowser.umd.min.js ./markdown-palettes.min.js
    mv ./MarkdownPalettesBrowser.umd.js ./markdown-palettes.js
    mv ./MarkdownPalettesBrowser.css ./markdown-palettes.css

    rm -rf ./MarkdownPalettesBrowser.common.js
fi

if test -e ./MarkdownPalettes.umd.js
 then
rm -rf ./MarkdownPalettes.umd.js
rm -rf ./MarkdownPalettes.umd.*.js
fi

