#!/bin/bash

set -e

src=dist/MarkdownPalettes.umd.min.js
dist=dist/markdown-palettes.js
vue=https://cdn.jsdelivr.net/npm/vue@2.5

wget $vue -O $dist
echo >> $dist
cat $src >> $dist
cat - >> $dist << EOF

(function(mp){
  'use strict'
  class MarkdownPalettes {
      constructor (el, config = {}) {
          this.config = config
          this.editor = new Vue(mp)
          this.editor.\$mount(el)
      }
      getContentParaser () {
          return this.editor.contentParser
      }
  }
  window.MarkdownPalettes = MarkdownPalettes
})(MarkdownPalettes)
EOF
