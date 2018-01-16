<template>
    <div id="preview-area" :style="{ 'height': height }">
        <div id="preview-content" v-html="content"></div>
    </div>
</template>

<style>
    #preview-content {
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        overflow-y: auto;
        word-wrap:break-word;
    }

    #preview-area {
    }

    #preview-content table {
        border-collapse: collapse;
        border-spacing: 0;
        display: block;
        width: 100%;
        overflow: auto;
        word-break: keep-all;
        margin: 10px;
    }

    #preview-content table th, td {
        border: 1px solid #ddd;
        padding: 6px 13px;
    }
</style>

<script>
import { ContentParser } from './ContentParser'

export default {
  name: 'preview-area',
  props: {
    value: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '400px'
    },
    parsers: {
      type: Array
    }
  },
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    this.updateContent(this.value)
  },
  methods: {
    updateContent (newContent) {
      this.content = ContentParser(newContent, this.parsers)
    }
  },
  watch: {
    value (newContent) {
      this.updateContent(newContent)
    }
  }
}
</script>