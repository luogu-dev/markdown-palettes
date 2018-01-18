<template>
    <div id="input-area">
        <codemirror
                :value="code"
                :options="editorOption"
                ref="editor"
                @change="updateCode">
        </codemirror>
    </div>
</template>

<script>
import {codemirror} from 'vue-codemirror-lite'
import 'codemirror/mode/markdown/markdown.js'

export default {
  name: 'input-area',
  props: {
    value: {
      type: String
    },
    editorOption: {
      type: Object
    },
    height: {
      type: String,
      default: '400px'
    },
    insertCode: {
      default: null
    }
  },
  computed: {
    editor () {
      return this.$refs.editor.editor
    }
  },
  watch: {
    insertCode: function (insert) {
      if (insert === null) {
        return
      }

      if (typeof insert === 'function') { insert = insert() }

      if (!Array.isArray(insert)) {
        insert = [insert, '']
      }

      let cursor = this.editor.getCursor()
      let selection = this.editor.getSelection()

      this.editor.replaceSelection(insert[0] + selection + insert[1])

      if (selection === '') {
        this.editor.setCursor(cursor.line, cursor.ch + 2)
      }

      this.$emit('finish')
    },
    height: function (newHeight) {
      this.editor.setSize('100%', newHeight)
    }
  },
  data: function () {
    return {
      code: ''
    }
  },
  components: {
    codemirror
  },
  mounted: function () {
    this.code = this.value
    this.editor.setSize('100%', this.height)
    this.editor.focus()
  },
  methods: {
    updateCode (code) {
      this.$emit('input', code)
    }
  }
}
</script>