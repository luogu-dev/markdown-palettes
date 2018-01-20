# Markdown*Palettes

**Markdown*Palettes** is an open-source Markdown editor for the modern web.

### Usage

#### Directly use js release

Get the latest [release](https://github.com/luogu-dev/markdown-palettes/releases).

````html
<div id="editor"></div>
<script>
    var markdownEditor = new MarkdownPalettes("#editor");
    markdownEditor.editor.setCode("# 233");
    var code = markdownEditor.editor.getCode();
</script>
````

#### Use as a Vue component
````html
<div>
    <markdown-palettes v-model="code"></markdown-palettes>
</div>

<script>
    import Editor from 'markdown-palettes'
    export default {
        components: {
            Editor
        }
    }
</script>
````

#### Development
```bash
$ npm install
$ npm run dev
```

### Credits

Developed by @darkflames and @lin_toto of the Luogu Dev Team