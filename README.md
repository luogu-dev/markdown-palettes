# Markdown*Palettes

**Markdown*Palettes** is an open-source Markdown editor for the modern web.

## Usage

We have four bundle schemes. Choose what you prefer.
Note that to use **Markdown*Palettes**, your web page must be in standard mode and use UTF-8 encoding. e.g.:

```html
<!DOCTYPE html>
<meta charset="utf-8">
```

### With Build Tools (webpack, rollup, etc)

First install our npm package:

```console
$ yarn add markdown-palettes
```

Since **Markdown*Palettes** is a Vue component, we assume you're familiar with Vue.

#### Use the ES6 Module

If you use webpack v2+ or rollup, you can use the ES6 module:

```html
<template>
  <div style="height: 700px;">
    <markdown-palettes v-model="value"/>
  </div>
</template>
<script>
  import MarkdownPalettes from 'markdown-palettes'
  export default {
    components: [MarkdownPalettes],
    data: () => { value: 'Hello, **Markdown*Palettes**!' }
  }
</script>
```

Note that the ES6 module didn't resolve its dependencies and pack them inside. It doesn't matter if you configure your webpack or rollup to resolve into `node_modules`, which is the common practice. As a fallback, you can use the CommonJS module.

#### Use the CommonJS Module

Replacing the ES6 'import' statement with CommonJS 'require' function:

```javascript
const MarkdownPalettes = require('markdown-palettes')
require('markdown-palettes/dist/MarkdownPalettes.css')
```

The CommonJS module resolved its dependencies and packed them inside.

### Without Build Tools (use directly in HTML)

It's OK to use **Markdown*Palettes** without build tools, if you're not so familiar with Vue and Node.js toolchain.
Copy the items in `dist` directory into your project.

#### Use with Vue

This is recommended if you use other Vue components in your HTML page.

```html
<link rel="stylesheet" href="MarkdownPalettes.css">
<div id="editor-container" style="height: 700px;">
  <markdown-palettes v-model="value"></markdown-palettes>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5"></script>
<script src="MarkdownPalettes.umd.min.js"></script>
<script>
  var app = new Vue({
    el: '#editor-container',
    components: [MarkdownPalettes],
    data: () => { value: 'Hello, **Markdown*Palettes**!' }
  })
</script>
```

#### Use without Vue

This is suitable if you don't have other Vue components in your HTML page or you 'dislike' Vue. Note that this bundle includes Vue inside so it's larger.

```html
<link rel="stylesheet" href="MarkdownPalettes.css">
<script src="markdown-palettes.js"></script>
<div id="editor-container" style="height: 700px;">
  <div id="editor"></div>
</div>
<script>
  var markdownEditor = new MarkdownPalettes("#editor");
  markdownEditor.editor.setCode("Hello, **Markdown*Palettes**!");
  var code = markdownEditor.editor.getCode();
</script>
```

### External Resources

By default bundle don't contain syntax highlighting for programming languages. If you use the bundles other than ES6 module, unfortunately you have to build it by yourself to get extra language support. If you use ES6 module, you can easily import them:

```javascript
// register languages for hljs
import hljs from 'highlight.js/lib/highlight'
import cpp from 'highlight.js/lib/languages/cpp'
hljs.registerLanguage('cpp', cpp)

// register languages for CodeMirror
import 'codemirror/mode/clike/clike'
```

## Documentation

 _TODO_

## Development

First checkout this repo.

```console
$ yarn          # install dependencies
$ yarn dev      # start dev server
$ yarn build    # build dist
```

### Release

Please upload `dist` directory to npm together.

## Credits

Developed by @darkflames and @lin_toto of the Luogu Dev Team
