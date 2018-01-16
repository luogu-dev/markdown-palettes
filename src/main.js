import Vue from 'vue'
import LuoguMarkdownEditor from './components/LuoguMarkdownEditor.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#editor',
  data: function () {
    return {
      code: ''
    }
  },
  components: {
    LuoguMarkdownEditor
  },
  methods: {
    updateCode (newCode) {
      this.code = newCode
    }
  }
})
