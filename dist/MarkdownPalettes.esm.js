import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import _debounce from 'lodash/debounce';
import 'codemirror/mode/gfm/gfm';
import _inRange from 'lodash/inRange';
import _sortedIndexBy from 'lodash/sortedIndexBy';
import _sortBy from 'lodash/sortBy';
import hljs from 'highlight.js/lib/highlight';
import _cloneDeep from 'lodash/cloneDeep';
import KatexParser from '@luogu-dev/markdown-it-katex';
import 'katex/dist/katex.css';
import 'highlight.js/styles/tomorrow.css';
import MarkdownIt from 'markdown-it';
import _isRegExp from 'lodash/isRegExp';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var abstractInputComponent = {
  props: {
    requestField: {
      type: Object,
      required: true
    },
    fieldValue: {}
  },
  model: {
    prop: 'fieldValue',
    event: 'change'
  },
  computed: {
    title() {
      return this.t(this.requestField.title);
    },

    param() {
      return this.requestField.param;
    },

    value: {
      get() {
        return this.fieldValue;
      },

      set(val) {
        this.$emit('change', val);
      }

    }
  },
  inject: ['t']
};

//
var script = {
  name: 'dialog-input',
  extends: abstractInputComponent
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "mp-dialog-input"
  }, [_c("label", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    domProps: {
      value: _vm.value
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.value = $event.target.value;
      }
    }
  })]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-201a76d8_0", {
    source: "\n.mp-dialog-input[data-v-201a76d8] {\n    overflow: auto;\n}\n.mp-dialog-input label[data-v-201a76d8] {\n    float: left;\n    padding-top: 5px;\n    vertical-align: top;\n    margin-right: 10px;\n    width: 20%;\n    font-size: 14px;\n    color: #666;\n}\n.mp-dialog-input input[data-v-201a76d8] {\n    float: left;\n    width: 70%;\n    color: #999;\n    padding: 8px;\n    border: 1px solid #ddd;\n}\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogInput.vue"],
      "names": [],
      "mappings": ";AAQA;IACA,eAAA;CACA;AAEA;IACA,YAAA;IACA,iBAAA;IACA,oBAAA;IACA,mBAAA;IACA,WAAA;IACA,gBAAA;IACA,YAAA;CACA;AAEA;IACA,YAAA;IACA,WAAA;IACA,YAAA;IACA,aAAA;IACA,uBAAA;CACA",
      "file": "DialogInput.vue",
      "sourcesContent": ["<template>\n    <div class=\"mp-dialog-input\">\n        <label>{{ title }}</label>\n        <input v-model=\"value\">\n    </div>\n</template>\n\n<style scoped>\n    .mp-dialog-input {\n        overflow: auto;\n    }\n\n    .mp-dialog-input label {\n        float: left;\n        padding-top: 5px;\n        vertical-align: top;\n        margin-right: 10px;\n        width: 20%;\n        font-size: 14px;\n        color: #666;\n    }\n\n    .mp-dialog-input input {\n        float: left;\n        width: 70%;\n        color: #999;\n        padding: 8px;\n        border: 1px solid #ddd;\n    }\n</style>\n\n<script>\nimport AbstractDialogComponent from './AbstractDialogFormComponent'\n\nexport default {\n    name: 'dialog-input',\n    extends: AbstractDialogComponent\n}\n</script>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-201a76d8";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogInput.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var DialogInput = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

//
var script$1 = {
  name: 'dialog-select',
  extends: abstractInputComponent
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "mp-dialog-select"
  }, [_c("label", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.value = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.param.options, function (option) {
    return _c("option", {
      key: option.title,
      domProps: {
        value: option.value
      }
    }, [_vm._v(_vm._s(_vm.t(option.title)))]);
  }))]);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-9f78a7da_0", {
    source: "\n.mp-dialog-select[data-v-9f78a7da] {\n    overflow: auto;\n}\n.mp-dialog-select label[data-v-9f78a7da] {\n    float: left;\n    padding-top: 5px;\n    vertical-align: top;\n    margin-right: 10px;\n    width: 20%;\n    font-size: 14px;\n    color: #666;\n}\n.mp-dialog-select select[data-v-9f78a7da]{\n    float: left;\n    display: inline-block;\n    width: 70%;\n    margin-top: 5px;\n    color: #999;\n    border: 1px solid #ddd;\n}\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogSelect.vue"],
      "names": [],
      "mappings": ";AAUA;IACA,eAAA;CACA;AAEA;IACA,YAAA;IACA,iBAAA;IACA,oBAAA;IACA,mBAAA;IACA,WAAA;IACA,gBAAA;IACA,YAAA;CACA;AAEA;IACA,YAAA;IACA,sBAAA;IACA,WAAA;IACA,gBAAA;IACA,YAAA;IACA,uBAAA;CACA",
      "file": "DialogSelect.vue",
      "sourcesContent": ["<template>\n    <div class=\"mp-dialog-select\">\n        <label>{{ title }}</label>\n        <select v-model=\"value\">\n            <option v-for=\"option in param.options\" :key=\"option.title\" :value=\"option.value\">{{ t(option.title) }}</option>\n        </select>\n    </div>\n</template>\n\n<style scoped>\n    .mp-dialog-select {\n        overflow: auto;\n    }\n\n    .mp-dialog-select label {\n        float: left;\n        padding-top: 5px;\n        vertical-align: top;\n        margin-right: 10px;\n        width: 20%;\n        font-size: 14px;\n        color: #666;\n    }\n\n    .mp-dialog-select select{\n        float: left;\n        display: inline-block;\n        width: 70%;\n        margin-top: 5px;\n        color: #999;\n        border: 1px solid #ddd;\n    }\n</style>\n\n<script>\nimport AbstractDialogComponent from './AbstractDialogFormComponent'\n\nexport default {\n    name: 'dialog-select',\n    extends: AbstractDialogComponent\n}\n</script>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-9f78a7da";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* component normalizer */

function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogSelect.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__$1() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var DialogSelect = __vue_normalize__$1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, __vue_create_injector__$1, undefined);

//
var script$2 = {
  name: 'dialog-codemirror',
  extends: abstractInputComponent,

  data() {
    return {
      editor: null
    };
  },

  mounted() {
    this.editor = CodeMirror(this.$refs.inputArea, this.editorOption);
    this.editor.setValue(this.value);
    this.editor.on('change', cm => void (this.value = cm.getValue()));
  },

  computed: {
    editorOption() {
      const defaultSetting = {
        lineNumbers: true,
        lineWrapping: true,
        height: '200px'
      };
      Object.freeze(defaultSetting);
      return Object.assign({}, defaultSetting, this.param ? this.param.editorSetting : undefined);
    }

  },
  watch: {
    value(val) {
      if (this.editor.getValue() !== val) {
        this.editor.setValue(val);
      }
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "mp-dialog-codemirror"
  }, [_vm.title ? _c("label", [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "inputArea",
    staticClass: "mp-dialog-codemirror-editor"
  })]);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-78e523fb_0", {
    source: "\n.mp-dialog-codemirror[data-v-78e523fb] {\n  overflow: auto;\n}\n.mp-dialog-codemirror label[data-v-78e523fb] {\n  padding-top: 5px;\n  vertical-align: top;\n  margin-right: 10px;\n  width: 20%;\n  font-size: 14px;\n  color: #666;\n}\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogCodeMirror.vue", "DialogCodeMirror.vue"],
      "names": [],
      "mappings": ";AAQA;EACA,eAAA;CCPC;ADQD;EACA,iBAAA;EACA,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;CCNC",
      "file": "DialogCodeMirror.vue",
      "sourcesContent": [null, ".mp-dialog-codemirror {\n  overflow: auto;\n}\n.mp-dialog-codemirror label {\n  padding-top: 5px;\n  vertical-align: top;\n  margin-right: 10px;\n  width: 20%;\n  font-size: 14px;\n  color: #666;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-78e523fb";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* component normalizer */

function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogCodeMirror.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__$2() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var DialogCodeMirror = __vue_normalize__$2({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, __vue_create_injector__$2, undefined);

//
var script$3 = {
  name: 'file',
  extends: abstractInputComponent,
  methods: {
    async handleFile(event) {
      let file = event.target.files[0];
      this.fieldValue = await this.param.callback(file);
    }

  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "mp-dialog-input"
  }, [_c("label", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("input", {
    attrs: {
      type: "file",
      name: "picture"
    },
    on: {
      change: _vm.handleFile
    }
  })]);
};

var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-46a465ae_0", {
    source: "\n.mp-dialog-input[data-v-46a465ae] {\n    overflow: auto;\n}\n.mp-dialog-input label[data-v-46a465ae] {\n    float: left;\n    padding-top: 5px;\n    vertical-align: top;\n    margin-right: 10px;\n    width: 20%;\n    font-size: 14px;\n    color: #666;\n}\n.mp-dialog-input input[data-v-46a465ae] {\n    float: left;\n    width: 70%;\n    color: #999;\n    padding: 8px;\n}\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogFile.vue"],
      "names": [],
      "mappings": ";AAQA;IACA,eAAA;CACA;AAEA;IACA,YAAA;IACA,iBAAA;IACA,oBAAA;IACA,mBAAA;IACA,WAAA;IACA,gBAAA;IACA,YAAA;CACA;AAEA;IACA,YAAA;IACA,WAAA;IACA,YAAA;IACA,aAAA;CACA",
      "file": "DialogFile.vue",
      "sourcesContent": ["<template>\n    <div class=\"mp-dialog-input\">\n        <label>{{ title }}</label>\n        <input type=\"file\" name=\"picture\" @change=\"handleFile\">\n    </div>\n</template>\n\n<style scoped>\n    .mp-dialog-input {\n        overflow: auto;\n    }\n\n    .mp-dialog-input label {\n        float: left;\n        padding-top: 5px;\n        vertical-align: top;\n        margin-right: 10px;\n        width: 20%;\n        font-size: 14px;\n        color: #666;\n    }\n\n    .mp-dialog-input input {\n        float: left;\n        width: 70%;\n        color: #999;\n        padding: 8px;\n    }\n</style>\n\n<script>\nimport abstractInputComponent from './AbstractDialogFormComponent'\n\nexport default {\n    name: 'file',\n    extends: abstractInputComponent,\n    methods: {\n        async handleFile (event) {\n            let file = event.target.files[0]\n            this.fieldValue = await this.param.callback(file)\n        }\n    }\n}\n</script>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-46a465ae";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* component normalizer */

function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/FormComponent/DialogFile.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__$3() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var DialogFile = __vue_normalize__$3({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, __vue_create_injector__$3, undefined);

var DialogComponents = {
  'dialog-input': DialogInput,
  'dialog-select': DialogSelect,
  'dialog-codemirror': DialogCodeMirror,
  'dialog-file': DialogFile
};

//
var script$4 = {
  name: 'dialog-form',
  props: {
    fields: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },

  data() {
    const initialData = {};
    this.fields.forEach(field => {
      initialData[field.name] = field.default ? field.default : '';
    });
    return {
      selectId: 1,
      data: initialData
    };
  },

  watch: {
    data: {
      deep: true,

      callback(newData) {
        this.$emit('change', newData);
      }

    }
  },
  components: DialogComponents,
  inject: ['t']
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "dialog-form"
  }, _vm._l(_vm.fields, function (field) {
    return _c("div", {
      key: field.name,
      staticClass: "mp-dialog-field"
    }, [_c(field.type || field.component, {
      tag: "component",
      attrs: {
        "request-field": field
      },
      model: {
        value: _vm.data[field.name],
        callback: function callback($$v) {
          _vm.$set(_vm.data, field.name, $$v);
        },
        expression: "data[field.name]"
      }
    })], 1);
  }));
};

var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;
/* style */

const __vue_inject_styles__$4 = function (inject) {
  if (!inject) return;
  inject("data-v-42781105_0", {
    source: "\n.mp-dialog-field[data-v-42781105] {\n    margin: 10px 8px;\n    overflow:auto;\n}\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/DialogForm.vue"],
      "names": [],
      "mappings": ";AAmDA;IACA,iBAAA;IACA,cAAA;CACA",
      "file": "DialogForm.vue",
      "sourcesContent": ["<template>\n    <div class=\"dialog-form\">\n        <div class=\"mp-dialog-field\" v-for=\"field in fields\" :key=\"field.name\">\n            <component :is=\"field.type || field.component\" :request-field=\"field\" v-model=\"data[field.name]\"></component>\n        </div>\n    </div>\n</template>\n\n<script>\nimport DialogComponents from './FormComponent/DialogFormComponentMap'\n\nexport default {\n    name: 'dialog-form',\n    props: {\n        fields: {\n            type: Array,\n            required: true\n        },\n        value: {\n            type: Object,\n            required: true\n        }\n    },\n    model: {\n        prop: 'value',\n        event: 'change'\n    },\n    data () {\n        const initialData = {}\n        this.fields.forEach((field) => {\n            initialData[field.name] = field.default ? field.default : ''\n        })\n        return {\n            selectId: 1,\n            data: initialData\n        }\n    },\n    watch: {\n        data: {\n            deep: true,\n            callback (newData) {\n                this.$emit('change', newData)\n            }\n        }\n    },\n    components: DialogComponents,\n    inject: ['t']\n}\n</script>\n\n<style scoped>\n    .mp-dialog-field {\n        margin: 10px 8px;\n        overflow:auto;\n    }\n</style>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$4 = "data-v-42781105";
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* component normalizer */

function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/DialogForm.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__$4() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var DialogForm = __vue_normalize__$4({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, __vue_create_injector__$4, undefined);

//
var script$5 = {
  name: 'dialog-tab',
  props: {
    fields: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },

  data() {
    const initialData = {};
    this.fields.forEach(category => {
      initialData[category.name] = {};
      category.body.forEach(field => {
        initialData[category.name][field.name] = field.default ? field.default : {};
      });
    });
    return {
      selectId: 1,
      data: initialData,
      count: this.fields.length
    };
  },

  watch: {
    data: {
      deep: true,

      callback(newData) {
        this.$emit('change', newData);
      }

    }
  },
  methods: {
    focus(index) {
      this.selectId = index;
    }

  },
  components: {
    DialogForm
  },
  inject: ['t']
};

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "dialog-tab"
  }, [_c("div", {
    staticClass: "dialog-switch-container"
  }, [_c("ul", _vm._l(this.fields, function (category, index) {
    return _c("li", {
      key: category.name,
      staticClass: "dialog-switch",
      class: {
        "dialog-switch-focus": _vm.selectId === index,
        "dialog-switch-not-focus": _vm.selectId !== index,
        "dialog-switch-not-last": index !== _vm.count - 1
      },
      style: {
        width: 100 / _vm.count + "%"
      },
      on: {
        click: function click($event) {
          _vm.focus(index);
        }
      }
    }, [_c("strong", [_vm._v(_vm._s(category.title) + " ")])]);
  }))]), _vm._v(" "), _c("div", {
    staticClass: "dialog-panel-container"
  }, _vm._l(this.fields, function (category, index) {
    return _c("div", {
      key: category.name,
      staticClass: "dialog-panel",
      class: _vm.selectId === index ? "dialog-panel-focus" : "dialog-panel-hide"
    }, [_c("dialog-form", {
      attrs: {
        fields: category.body
      },
      model: {
        value: _vm.data[category.name],
        callback: function callback($$v) {
          _vm.$set(_vm.data, category.name, $$v);
        },
        expression: "data[category.name]"
      }
    })], 1);
  }))]);
};

var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;
/* style */

const __vue_inject_styles__$5 = function (inject) {
  if (!inject) return;
  inject("data-v-6faaf33d_0", {
    source: "\n.dialog-tab[data-v-6faaf33d] {\n    width: 100%;\n    margin-bottom: 10px;\n    border: 1px solid #ddd;\n    border-radius: 3px 3px 0 0;\n}\n.dialog-switch-container[data-v-6faaf33d] {\n    width: 100%;\n    height: 25px;\n}\n.dialog-switch-container ul[data-v-6faaf33d] {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\n.dialog-switch[data-v-6faaf33d] {\n    float: left;\n    height: 100%;\n    cursor: pointer;\n    list-style: none;\n    text-align: center;\n    box-sizing: border-box;\n}\n.dialog-switch-not-last[data-v-6faaf33d] {\n    border-right: 1px solid #ddd;\n}\n.dialog-switch-not-focus[data-v-6faaf33d] {\n    border-bottom: 1px solid #ddd;\n}\n.dialog-panel-container[data-v-6faaf33d] {\n    width: 100%;\n}\n.dialog-panel-hide[data-v-6faaf33d] {\n    display: none;\n}\n\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/DialogTab.vue"],
      "names": [],
      "mappings": ";AAuEA;IACA,YAAA;IACA,oBAAA;IACA,uBAAA;IACA,2BAAA;CACA;AACA;IACA,YAAA;IACA,aAAA;CACA;AAEA;IACA,UAAA;IACA,WAAA;IACA,YAAA;IACA,aAAA;CAEA;AAEA;IACA,YAAA;IACA,aAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,uBAAA;CACA;AAEA;IACA,6BAAA;CACA;AAEA;IACA,8BAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,cAAA;CACA",
      "file": "DialogTab.vue",
      "sourcesContent": ["<template>\n    <div class=\"dialog-tab\">\n        <div class=\"dialog-switch-container\">\n            <ul>\n                <li class=\"dialog-switch\" :class=\"{\n                        'dialog-switch-focus': selectId === index,\n                        'dialog-switch-not-focus': selectId !== index,\n                        'dialog-switch-not-last': index !== count - 1\n                    }\" :style=\"{'width': (100 / count) + '%'}\"\n                    v-for=\"(category, index) in this.fields\" :key=\"category.name\" @click=\"focus(index)\">\n                    <strong>{{ category.title }} </strong>\n                </li>\n            </ul>\n        </div>\n        <div class=\"dialog-panel-container\">\n            <div class=\"dialog-panel\" :class=\"selectId === index ? 'dialog-panel-focus' : 'dialog-panel-hide'\"\n                 v-for=\"(category, index) in this.fields\" :key=\"category.name\">\n                <dialog-form :fields=\"category.body\" v-model=\"data[category.name]\"></dialog-form>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\nimport DialogForm from './DialogForm.vue'\n\nexport default {\n    name: 'dialog-tab',\n    props: {\n        fields: {\n            type: Array,\n            required: true\n        },\n        value: {\n            type: Object,\n            required: true\n        }\n    },\n    data () {\n        const initialData = {}\n        this.fields.forEach((category) => {\n            initialData[category.name] = {}\n            category.body.forEach((field) => {\n                initialData[category.name][field.name] = field.default ? field.default : {}\n            })\n        })\n        return {\n            selectId: 1,\n            data: initialData,\n            count: this.fields.length\n        }\n    },\n    watch: {\n        data: {\n            deep: true,\n            callback (newData) {\n                this.$emit('change', newData)\n            }\n        }\n    },\n    methods: {\n        focus (index) {\n            this.selectId = index\n        }\n    },\n    components: { DialogForm },\n    inject: ['t']\n}\n</script>\n\n<style scoped>\n    .dialog-tab {\n        width: 100%;\n        margin-bottom: 10px;\n        border: 1px solid #ddd;\n        border-radius: 3px 3px 0 0;\n    }\n    .dialog-switch-container {\n        width: 100%;\n        height: 25px;\n    }\n\n    .dialog-switch-container ul {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 100%;\n\n    }\n\n    .dialog-switch {\n        float: left;\n        height: 100%;\n        cursor: pointer;\n        list-style: none;\n        text-align: center;\n        box-sizing: border-box;\n    }\n\n    .dialog-switch-not-last {\n        border-right: 1px solid #ddd;\n    }\n\n    .dialog-switch-not-focus {\n        border-bottom: 1px solid #ddd;\n    }\n\n    .dialog-panel-container {\n        width: 100%;\n    }\n\n    .dialog-panel-hide {\n        display: none;\n    }\n\n</style>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$5 = "data-v-6faaf33d";
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* component normalizer */

function __vue_normalize__$5(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/DialogTab.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__$5() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var DialogTab = __vue_normalize__$5({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, __vue_create_injector__$5, undefined);

var script$6 = {
  name: 'editor-dialog',
  props: {
    request: {
      type: Object,
      required: true
    }
  },

  data() {
    const initialData = {};
    this.request.body.forEach(field => {
      if (this.request.type === 'form') {
        initialData[field.name] = field.default ? field.default : '';
      } else if (this.request.type === 'tab') {
        initialData[field.name] = {};
      }
    });
    return {
      responseData: initialData
    };
  },

  computed: {
    response() {
      return _objectSpread({}, this.request, {
        data: this.responseData
      });
    }

  },
  methods: {
    close() {
      this.$emit('close');
    },

    finish() {
      this.$emit('finish', this.response);
    }

  },
  components: {
    DialogForm,
    DialogTab
  },
  inject: ['t']
};

/* script */
const __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "mp-editor-dialog"
  }, [_c("div", {
    staticClass: "mp-dialog-mask"
  }, [_c("div", {
    staticClass: "mp-dialog-wrapper"
  }, [_c("div", {
    staticClass: "mp-dialog-container"
  }, [_c("div", {
    staticClass: "mp-dialog-header"
  }, [_c("strong", [_vm._v(_vm._s(_vm.t(_vm.request.title)))]), _vm._v(" "), _c("a", {
    staticClass: "fa fa-times mp-dialog-close",
    on: {
      click: _vm.close
    }
  })]), _vm._v(" "), _c("form", {
    staticClass: "mp-dialog-body",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.finish($event);
      }
    }
  }, [this.request.type === "form" ? _c("dialog-form", {
    attrs: {
      fields: this.request.body
    },
    model: {
      value: _vm.responseData,
      callback: function callback($$v) {
        _vm.responseData = $$v;
      },
      expression: "responseData"
    }
  }) : this.request.type === "tab" ? _c("dialog-tab", {
    attrs: {
      fields: this.request.body
    },
    model: {
      value: _vm.responseData,
      callback: function callback($$v) {
        _vm.responseData = $$v;
      },
      expression: "responseData"
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mp-dialog-footer"
  }, [_c("div", [_c("button", {
    staticClass: "mp-dialog-button",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.close
    }
  }, [_vm._v(_vm._s(_vm.t("取消")))]), _vm._v(" "), _c("button", {
    staticClass: "mp-dialog-button",
    staticStyle: {
      "margin-right": "7px"
    },
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.t("确定")))])])])], 1)])])])]);
};

var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;
/* style */

const __vue_inject_styles__$6 = function (inject) {
  if (!inject) return;
  inject("data-v-e20ada30_0", {
    source: "\n.mp-dialog-mask[data-v-e20ada30] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    transition: opacity .3s ease;\n}\n.mp-dialog-wrapper[data-v-e20ada30] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.mp-dialog-container[data-v-e20ada30] {\n    width: 500px;\n    margin: 0 auto;\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.mp-dialog-header[data-v-e20ada30] {\n    padding: 11px 20px;\n    border-bottom: 1px solid #eee;\n}\n.dialog-header strong[data-v-e20ada30] {\n    color: #666;\n}\n.mp-dialog-body[data-v-e20ada30] {\n    padding: 20px 30px;\n    padding-bottom: 10px;\n}\n.mp-dialog-footer[data-v-e20ada30] {\n    overflow:auto;\n}\n.mp-dialog-button[data-v-e20ada30] {\n    display: inline-block;\n    float: right;\n    color: #666;\n    min-width: 75px;\n    cursor: pointer;\n    background: #fff;\n    padding: 7px 10px;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n}\n.mp-dialog-enter[data-v-e20ada30] {\n    opacity: 0;\n}\n.mp-dialog-leave-active[data-v-e20ada30] {\n    opacity: 0;\n}\n.mp-dialog-enter .mp-dialog-container[data-v-e20ada30],\n.mp-dialog-leave-active .mp-dialog-container[data-v-e20ada30] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n.mp-dialog-close[data-v-e20ada30] {\n    font-size: 18px;\n    color: #ccc;\n    float: right;\n}\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/Dialog.vue"],
      "names": [],
      "mappings": ";AA8BA;IACA,gBAAA;IACA,cAAA;IACA,OAAA;IACA,QAAA;IACA,YAAA;IACA,aAAA;IACA,oCAAA;IACA,eAAA;IACA,6BAAA;CACA;AAEA;IACA,oBAAA;IACA,uBAAA;CACA;AAEA;IACA,aAAA;IACA,eAAA;IACA,uBAAA;IACA,mBAAA;IACA,yCAAA;IACA,yBAAA;IACA,0CAAA;CACA;AACA;IACA,mBAAA;IACA,8BAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,mBAAA;IACA,qBAAA;CACA;AAEA;IACA,cAAA;CACA;AAEA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,kBAAA;IACA,uBAAA;IACA,mBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,8BAAA;IACA,sBAAA;CACA;AAEA;IACA,gBAAA;IACA,YAAA;IACA,aAAA;CACA",
      "file": "Dialog.vue",
      "sourcesContent": ["<template>\n    <div class=\"mp-editor-dialog\">\n        <div class=\"mp-dialog-mask\">\n            <div class=\"mp-dialog-wrapper\">\n                <div class=\"mp-dialog-container\">\n\n                    <div class=\"mp-dialog-header\">\n                        <strong>{{ t(request.title) }}</strong>\n                        <a class=\"fa fa-times mp-dialog-close\" @click=\"close\"></a>\n                    </div>\n\n                    <form class=\"mp-dialog-body\" @submit.prevent=\"finish\">\n                        <dialog-form v-if=\"this.request.type === 'form'\" :fields=\"this.request.body\" v-model=\"responseData\"></dialog-form>\n                        <dialog-tab v-else-if=\"this.request.type === 'tab'\" :fields=\"this.request.body\" v-model=\"responseData\"></dialog-tab>\n\n                        <div class=\"mp-dialog-footer\">\n                            <div>\n                                <button class=\"mp-dialog-button\" type=\"button\" @click=\"close\">{{ t('取消') }}</button>\n                                <button class=\"mp-dialog-button\" type=\"submit\" style=\"margin-right: 7px\">{{ t('确定') }}</button>\n                            </div>\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style scoped>\n    .mp-dialog-mask {\n        position: fixed;\n        z-index: 9998;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .5);\n        display: table;\n        transition: opacity .3s ease;\n    }\n\n    .mp-dialog-wrapper {\n        display: table-cell;\n        vertical-align: middle;\n    }\n\n    .mp-dialog-container {\n        width: 500px;\n        margin: 0 auto;\n        background-color: #fff;\n        border-radius: 2px;\n        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n        transition: all .3s ease;\n        font-family: Helvetica, Arial, sans-serif;\n    }\n    .mp-dialog-header {\n        padding: 11px 20px;\n        border-bottom: 1px solid #eee;\n    }\n\n    .dialog-header strong {\n        color: #666;\n    }\n\n    .mp-dialog-body {\n        padding: 20px 30px;\n        padding-bottom: 10px;\n    }\n\n    .mp-dialog-footer {\n        overflow:auto;\n    }\n\n    .mp-dialog-button {\n        display: inline-block;\n        float: right;\n        color: #666;\n        min-width: 75px;\n        cursor: pointer;\n        background: #fff;\n        padding: 7px 10px;\n        border: 1px solid #ddd;\n        border-radius: 3px;\n    }\n\n    .mp-dialog-enter {\n        opacity: 0;\n    }\n\n    .mp-dialog-leave-active {\n        opacity: 0;\n    }\n\n    .mp-dialog-enter .mp-dialog-container,\n    .mp-dialog-leave-active .mp-dialog-container {\n        -webkit-transform: scale(1.1);\n        transform: scale(1.1);\n    }\n\n    .mp-dialog-close {\n        font-size: 18px;\n        color: #ccc;\n        float: right;\n    }\n</style>\n\n<script>\nimport DialogForm from './DialogForm.vue'\nimport DialogTab from './DialogTab.vue'\n\nexport default {\n    name: 'editor-dialog',\n    props: {\n        request: {\n            type: Object,\n            required: true\n        }\n    },\n    data () {\n        const initialData = {}\n        this.request.body.forEach((field) => {\n            if (this.request.type === 'form') {\n                initialData[field.name] = field.default ? field.default : ''\n            } else if (this.request.type === 'tab') {\n                initialData[field.name] = {}\n            }\n        })\n        return {\n            responseData: initialData\n        }\n    },\n    computed: {\n        response () {\n            return { ...this.request, data: this.responseData }\n        }\n    },\n    methods: {\n        close () {\n            this.$emit('close')\n        },\n        finish () {\n            this.$emit('finish', this.response)\n        }\n    },\n    components: { DialogForm, DialogTab },\n    inject: ['t']\n}\n</script>\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$6 = "data-v-e20ada30";
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* component normalizer */

function __vue_normalize__$6(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/components/Dialog/Dialog.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__$6() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var Dialog = __vue_normalize__$6({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, __vue_create_injector__$6, undefined);

var InputAreaMixin = {
  data() {
    return {
      inputAreaScrollSynced: false,
      inputAreaScrollAnimation: null
    };
  },

  mounted() {
    this.editor = CodeMirror(this.$refs.inputArea, this.editorOption);
    this.editor.on('change', cm => {
      const code = cm.getValue();

      if (this.code !== code) {
        this.$emit('input', code);
      }

      this.code = code;
    });
    this.setCode(this.value);

    const debouncedEmitScrollSync = _debounce(this.inputAreaEmitScrollSync, 50, {
      maxWait: 50
    });

    const scrollSync = () => {
      if (this.inputAreaScrollSynced) {
        this.inputAreaScrollSynced = false;
      } else {
        debouncedEmitScrollSync();

        if (this.inputAreaScrollAnimation) {
          this.inputAreaScrollAnimation.cancel();
        }
      }
    };

    this.editor.on('cursorActivity', scrollSync);
    this.editor.on('scroll', scrollSync);
  },

  methods: {
    inputAreaEmitScrollSync() {
      if (!this.scrollSync) return;
      const cursorLine = this.editor.getCursor().line;
      const scrollInfo = this.editor.getScrollInfo('local');
      const viewport = {
        from: this.editor.lineAtHeight(scrollInfo.top, 'local'),
        to: this.editor.lineAtHeight(scrollInfo.top + scrollInfo.clientHeight, 'local') + 1
      };
      const linesOffset = [];

      for (let line = viewport.from; line < viewport.to; ++line) {
        const coords = this.editor.cursorCoords({
          line,
          ch: 0
        }, 'local');
        linesOffset[line] = {
          top: coords.top - scrollInfo.top,
          bottom: coords.bottom - scrollInfo.top
        };
      }

      const event = {
        cursorLine,
        scrollInfo,
        viewport,
        linesOffset
      };
      this.doScrollSync('inputArea', event);
    },

    inputAreaUpdateScrollSync({
      scrollInfo,
      linesOffset
    }) {
      if (!linesOffset.length) {
        return;
      }

      const scrollMid = scrollInfo.height / 2;
      let syncLine;
      linesOffset.forEach(({
        top
      }, line) => {
        if (typeof syncLine === 'undefined' || Math.abs(top - scrollMid) < Math.abs(linesOffset[syncLine].top - scrollMid)) {
          syncLine = line;
        }
      });
      const scrollTop = this.editor.getScrollInfo().top;
      const editorLineOffset = this.editor.heightAtLine(syncLine, 'local') - scrollTop;

      if (this.inputAreaScrollAnimation) {
        this.inputAreaScrollAnimation.cancel();
      }

      let animationCancelled = false;
      let animationSkipFrame = false;
      const animationFrom = scrollTop;
      const animationTo = scrollTop + editorLineOffset - linesOffset[syncLine].top;
      const animationStartTime = Date.now();
      const animationDuration = 200;

      const animationFrameCallback = () => {
        if (animationSkipFrame) {
          // skip frame so that user can scroll to interrupt animation
          requestAnimationFrame(animationFrameCallback);
          animationSkipFrame = false;
        } else if (!animationCancelled) {
          const currentTime = Date.now();
          const precent = (currentTime - animationStartTime) / animationDuration;
          this.inputAreaScrollSynced = true;

          if (precent >= 1) {
            this.editor.scrollTo(null, animationTo);
          } else {
            this.editor.scrollTo(null, (animationTo - animationFrom) * precent + animationFrom);
            requestAnimationFrame(animationFrameCallback);
            animationSkipFrame = true;
          }
        }
      };

      animationFrameCallback();
      this.inputAreaScrollAnimation = {
        cancel() {
          animationCancelled = true;
        }

      };
    }

  }
};

var PreviewAreaMixin = {
  data() {
    return {
      previewAreaLinesBounding: [],
      previewAreaScrollSynced: false
    };
  },

  computed: {
    previewContent() {
      return this.contentParser(this.code);
    }

  },

  created() {
    this.debouncedPreviewAreaEmitScrollSync = _debounce(this.previewAreaEmitScrollSync, 100, {
      maxWait: 100
    });
  },

  watch: {
    previewContent() {
      if (this.scrollSync) {
        this.$nextTick(this.previewAreaMaintainLinesBounding);
      } else {
        this.previewAreaLinesBounding = [];
      }
    },

    scrollSync(val) {
      if (val && this.previewAreaLinesBounding.length === 0) {
        this.previewAreaMaintainLinesBounding();
      }
    }

  },
  methods: {
    previewAreaMaintainLinesBounding() {
      this.previewAreaUpdateLinesBounding();
      const previewArea = this.$refs.previewArea;
      Array.from(previewArea.getElementsByTagName('img')).forEach(img => {
        // img will become "bigger" when it's loaded
        img.addEventListener('load', this.previewAreaUpdateLinesBounding);
      });
    },

    previewAreaUpdateLinesBounding() {
      const previewArea = this.$refs.previewArea;
      const previewContent = this.$refs.previewContent;
      const outerTop = previewContent.getBoundingClientRect().top;
      this.previewAreaLinesBounding = [];
      previewArea.querySelectorAll('[data-line]').forEach(lineE => {
        const bounding = lineE.getBoundingClientRect();
        const line = parseInt(lineE.dataset.line);
        this.previewAreaLinesBounding.push({
          line,
          top: bounding.top - outerTop,
          bottom: bounding.bottom - outerTop
        });
      });

      _sortBy(this.previewAreaLinesBounding, [b => b.top]);
    },

    previewAreaScroll() {
      if (this.previewAreaScrollSynced) {
        this.previewAreaScrollSynced = false;
      } else {
        this.debouncedPreviewAreaEmitScrollSync();
      }
    },

    previewAreaEmitScrollSync() {
      if (!this.scrollSync) return;
      const previewArea = this.$refs.previewArea;
      const scrollTop = previewArea.scrollTop;
      const scrollBottom = scrollTop + previewArea.getBoundingClientRect().height;

      const lowerLinePos = _sortedIndexBy(this.previewAreaLinesBounding, {
        top: scrollTop
      }, b => b.top);

      const upperLinePos = _sortedIndexBy(this.previewAreaLinesBounding, {
        top: scrollBottom
      }, b => b.top);

      const linesOffset = [];

      for (let linePos = lowerLinePos; linePos < upperLinePos; ++linePos) {
        const line = this.previewAreaLinesBounding[linePos].line;
        linesOffset[line] = {
          top: this.previewAreaLinesBounding[linePos].top - scrollTop,
          bottom: this.previewAreaLinesBounding[linePos].bottom - scrollTop
        };
      }

      this.doScrollSync('previewArea', {
        scrollInfo: {
          top: scrollTop,
          bottom: scrollBottom,
          height: scrollBottom - scrollTop
        },
        linesOffset: linesOffset
      });
    },

    previewAreaUpdateScrollSync({
      cursorLine,
      scrollInfo,
      viewport,
      linesOffset
    }) {
      const previewArea = this.$refs.previewArea;

      const offset = ele => {
        const eleRect = ele.getBoundingClientRect();
        const araRect = previewArea.getBoundingClientRect();
        return {
          top: eleRect.top - araRect.top,
          bottom: eleRect.bottom - araRect.top
        };
      };

      const getLine = line => previewArea.querySelector(`[data-line="${line}"]`);

      const calcScroll = line => {
        const lineE = getLine(line);
        const previewLineOffset = offset(lineE);
        const editorLineOffset = linesOffset[line];

        if (typeof editorLineOffset === 'undefined') {
          return NaN;
        }

        let scroll = previewLineOffset.top - editorLineOffset.top;
        const tagName = lineE.tagName;

        if (/^h\d$/i.test(tagName)) {
          scroll = previewLineOffset.bottom - editorLineOffset.bottom;
        }

        if (previewLineOffset.top - scroll < 0) {
          scroll = -previewLineOffset.top;
        }

        return scroll;
      };

      const syncLine = _inRange(cursorLine, viewport.from, viewport.to) ? cursorLine : Math.round((viewport.from + viewport.to) / 2);
      let lowerLine, upperLine;

      for (lowerLine = syncLine; lowerLine >= viewport.from; --lowerLine) {
        if (getLine(lowerLine) !== null) {
          break;
        }
      }

      for (upperLine = syncLine; upperLine < viewport.to; ++upperLine) {
        if (getLine(upperLine) !== null) {
          break;
        }
      }

      const lowerLineE = getLine(lowerLine);
      const upperLineE = getLine(upperLine);
      const hasLowerLine = lowerLineE !== null;
      const hasUpperLine = upperLineE !== null;

      if (!hasLowerLine && !hasUpperLine) {
        // can't sync
        return;
      }

      let chosenLine;

      if (!hasLowerLine) {
        chosenLine = upperLine;
      } else if (!hasUpperLine) {
        chosenLine = lowerLine;
      } else if (lowerLine === upperLine) {
        chosenLine = lowerLine;
      } else {
        const lowerScroll = calcScroll(lowerLine);
        const upperScroll = calcScroll(upperLine);

        if (Math.abs(lowerScroll) < Math.abs(upperScroll) || isNaN(upperScroll)) {
          chosenLine = lowerLine;
        } else {
          chosenLine = upperLine;
        }
      }

      const scroll = calcScroll(chosenLine);

      if (!isNaN(scroll)) {
        this.previewAreaScrollSynced = true;
        previewArea.scrollTop += scroll;
      }
    }

  }
};

var ToolbarMixin = {
  methods: {
    toolbarAction(btn) {
      if (typeof btn.action === 'function') {
        btn.action.call(this);
      } else {
        this.toolbarHandleActionLegacy(btn.action);
      }
    },

    toolbarHandleActionLegacy(action) {
      if (action.event) {
        this.toolbarHandleEventLegacy(action.event);
      } else if (action.insert) {
        this.insertCode(action.insert);
      } else if (action.request) {
        this.requestData(action.request);
      }
    },

    toolbarHandleEventLegacy(event) {
      if (event === 'hide') {
        if (this.previewDisplay === 'normal') {
          if (window.screen.width > 768) {
            this.previewDisplay = 'hide';
          } else {
            this.previewDisplay = 'full';
          }
        } else {
          this.previewDisplay = 'normal';
        }
      }

      if (event === 'fullScreen') {
        this.fullScreen = !this.fullScreen;
      }

      if (event === 'scrollSync') {
        this.scrollSync = !this.scrollSync;
      }
    }

  }
};

var ActionMixin = {
  data() {
    return {
      showDialog: false,
      dialogRequest: {}
    };
  },

  methods: {
    insertCode(code) {
      if (code) {
        let insert = this.ensureValue(code);

        if (!Array.isArray(insert)) {
          insert = [insert, ''];
        }

        const _this$editor$getCurso = this.editor.getCursor('from'),
              lineFrom = _this$editor$getCurso.line,
              chFrom = _this$editor$getCurso.ch;

        const _this$editor$getCurso2 = this.editor.getCursor('to'),
              lineTo = _this$editor$getCurso2.line,
              chTo = _this$editor$getCurso2.ch;

        const _this$editor$getCurso3 = this.editor.getCursor('head'),
              lineHead = _this$editor$getCurso3.line,
              chHead = _this$editor$getCurso3.ch;

        const selection = this.editor.getSelection();
        this.editor.replaceSelection(insert[0] + selection + insert[1]);
        const bfLns = insert[0].split('\n');
        const secLns = selection.split('\n');
        const newLineFrom = lineFrom + bfLns.length - 1;
        const newLineTo = newLineFrom + (lineTo - lineFrom);
        const newChFrom = bfLns.length === 1 ? chFrom + bfLns[0].length : bfLns[bfLns.length - 1].length;
        const newChTo = secLns.length === 1 ? newChFrom + selection.length : chTo;
        const newFrom = {
          line: newLineFrom,
          ch: newChFrom
        };
        const newTo = {
          line: newLineTo,
          ch: newChTo
        };
        this.editor.setSelection(lineHead === lineFrom && chHead === chFrom ? newTo : newFrom, selection !== '' ? lineHead === lineFrom && chHead === chFrom ? newFrom : newTo : undefined);
        this.editor.focus();
      }
    },

    closeDialog() {
      this.showDialog = false;
    },

    openDialog(request) {
      this.dialogRequest = request;
      this.showDialog = true;
    },

    dialogFinish(request) {
      if (request.callback) {
        this.insertCode(request.callback(request.data));
      }

      this.closeDialog();
    },

    requestData(request) {
      if (this.showDialog) {
        return;
      }

      this.openDialog(request);
    }

  }
};

var HighlightjsParser = (md => {
  const highlighter = (code, lang) => {
    if (lang) {
      try {
        return hljs.highlight(lang, code).value;
      } catch (e) {}
    } else {
      try {
        return hljs.highlightAuto(code).value;
      } catch (e) {}
    }

    return md.utils.escapeHtml(code);
  };

  md.options.highlight = (code, lang) => `<pre><code>${highlighter(code, lang)}</code></pre>`;
});

var BtnBold = {
  name: 'bold',
  icon: 'fa-bold',
  title: '粗体',
  action: {
    insert: ['**', '**']
  }
};

var BtnItalic = {
  name: 'italic',
  icon: 'fa-italic',
  title: '斜体',
  action: {
    insert: [' _', '_ ']
  }
};

var BtnStrikeThrough = {
  name: 'strikethrough',
  icon: 'fa-strikethrough',
  title: '删除线',
  action: {
    insert: ['~~', '~~']
  }
};

var Divider = {
  name: '|'
};

var BtnImg = {
  name: 'img',
  icon: 'fa-image',
  title: '插入图片',
  action: {
    request: {
      title: '插入图片',
      body: [{
        name: 'address',
        title: '图片地址',
        type: 'dialog-input',
        default: ''
      }, {
        name: 'description',
        title: '图片描述',
        type: 'dialog-input',
        default: ''
      }],

      callback(data) {
        return '![' + data.description + '](' + data.address + ')';
      }

    }
  }
};

var BtnLink = {
  name: 'link',
  icon: 'fa-link',
  title: '插入链接',
  action: {
    request: {
      title: '插入链接',
      type: 'form',
      body: [{
        name: 'url',
        title: '链接地址',
        type: 'dialog-input',
        default: ''
      }, {
        name: 'description',
        title: '链接标题',
        type: 'dialog-input',
        default: ''
      }],

      callback(data) {
        return '[' + data.description + '](' + data.url + ')';
      }

    }
  }
};

var BtnTable = {
  name: 'table',
  icon: 'fa-table',
  title: '插入表格',
  action: {
    request: {
      title: '插入表格',
      type: 'form',
      body: [{
        name: 'row',
        title: '行数',
        type: 'dialog-input',
        default: '3'
      }, {
        name: 'col',
        title: '列数',
        type: 'dialog-input',
        default: '2'
      }, {
        name: 'align',
        title: '对齐方式',
        type: 'dialog-select',
        param: {
          options: [{
            title: '左对齐',
            value: 1
          }, {
            title: '居中',
            value: 2
          }, {
            title: '右对齐',
            value: 3
          }]
        },
        default: 0
      }],

      callback(data) {
        let rowString = '';

        for (let i = 0; i < data.col; i++) {
          rowString += '|  ';
        }

        rowString += '|';
        let divString = '';

        for (let i = 0; i < data.col; i++) {
          if (data.align === 1) {
            divString += '| :----------- ';
          } else if (data.align === 2) {
            divString += '| :----------: ';
          } else if (data.align === 3) {
            divString += '| -----------: ';
          } else {
            divString += '| -----------: ';
          }
        }

        divString += '|';
        let outputString = rowString + '\n' + divString + '\n';

        for (let i = 0; i < data.row - 1; i++) {
          outputString += rowString + '\n';
        }

        return outputString;
      }

    }
  }
};

function headerFactory(level) {
  return {
    name: 'h' + level,
    icon: 'icon-blold',
    content: 'H' + level,
    title: level + '级标题',

    action() {
      const line = this.editor.getCursor().line;
      const leading = this.editor.getRange({
        line,
        ch: 0
      }, {
        line,
        ch: 7
      });
      const match = /^(#{1,6} )/.exec(leading);
      this.editor.replaceRange(''.padEnd(level, '#') + ' ', {
        line,
        ch: 0
      }, match === null ? undefined : {
        line,
        ch: match[1].length
      });
      this.editor.focus();
    }

  };
}

var BtnUl = {
  name: 'ul',
  icon: 'fa-list-ul',
  title: '无序列表',
  action: {
    insert: '- '
  }
};

var BtnOl = {
  name: 'ol',
  icon: 'fa-list-ol',
  title: '有序列表',
  action: {
    insert: '1. '
  }
};

var BtnHr = {
  name: 'hr',
  icon: 'fa-minus',
  title: '分割线',
  action: {
    insert: '\n\n------------\n'
  }
};

var BtnCode = {
  name: 'img',
  icon: 'fa-code',
  title: '插入代码',

  action() {
    const selection = this.editor.getSelection();
    const request = {
      title: '插入代码',
      type: 'form',
      body: [{
        name: 'lang',
        title: '语言类型',
        type: 'dialog-select',
        param: {
          options: [{
            title: 'c',
            value: 'c'
          }, {
            title: 'cpp',
            value: 'cpp'
          }, {
            title: 'pascal',
            value: 'pascal'
          }, {
            title: 'python',
            value: 'python'
          }, {
            title: 'java',
            value: 'java'
          }, {
            title: 'javascript',
            value: 'javascript'
          }, {
            title: 'php',
            value: 'php'
          }, {
            title: 'latex',
            value: 'latex'
          }, {
            title: '未选择',
            value: ''
          }]
        },
        default: ''
      }, {
        name: 'code',
        type: 'dialog-codemirror',
        default: selection
      }],
      callback: data => {
        this.editor.replaceSelection('```' + data.lang + '\n' + data.code + '\n' + '```\n');
        this.editor.focus();
      }
    };
    this.requestData(request);
  }

};

var BtnHide = {
  name: 'hide',

  icon() {
    return this.previewDisplay === 'hide' ? 'fa-eye-slash' : 'fa-eye';
  },

  title() {
    return this.previewDisplay === 'hide' ? '显示预览' : '隐藏预览';
  },

  action: {
    event: 'hide'
  }
};

var BtnFullscreen = {
  name: 'fullScreen',
  icon: 'fa-expand-arrows-alt',

  title() {
    return this.fullScreen ? '取消全屏' : '全屏';
  },

  action: {
    event: 'fullScreen'
  }
};

var BtnScrollsync = {
  name: 'scrollSync',

  icon() {
    return this.scrollSync ? 'fa-lock' : 'fa-lock-open';
  },

  title() {
    return this.scrollSync ? '停用滚动同步' : '启用滚动同步';
  },

  action: {
    event: 'scrollSync'
  }
};

var BtnInfo = {
  name: 'info',
  icon: 'fa-info-circle',
  title: '关于',

  action() {
    const h = this.$createElement;
    this.openDialog({
      title: '关于',
      body: [{
        component: {
          functional: true,
          render: (h, {
            injections: {
              t
            }
          }) => h("div", {
            style: "text-align: center"
          }, [h("p", [h("strong", [t('Markdown*Palettes')]), " ", t('是一个开源的 Markdown 编辑器，面向现代化网络环境。')]), h("p", [h("a", {
            attrs: {
              href: "https://github.com/luogu-dev/markdown-palettes",
              target: "_blank"
            }
          }, [t('访问 GitHub 项目地址')])])]),
          inject: ['t']
        }
      }]
    });
  }

};

const defaultBtns = [BtnBold, BtnStrikeThrough, BtnItalic, BtnHr, Divider, headerFactory(1), headerFactory(2), headerFactory(3), headerFactory(4), headerFactory(5), headerFactory(6), Divider, BtnUl, BtnOl, Divider, BtnImg, BtnLink, BtnCode, BtnTable, Divider, BtnHide, BtnFullscreen, BtnScrollsync, Divider, BtnInfo];
const defaultSimpleBtns = [BtnBold, BtnStrikeThrough, BtnItalic, BtnHr, headerFactory(1), headerFactory(2), headerFactory(3), BtnUl, BtnOl, BtnImg, BtnLink, BtnTable, BtnHide, BtnFullscreen, BtnInfo];

function getDefaultBtnsMap() {
  const btnsMap = {};
  defaultBtns.forEach(function (btn) {
    btnsMap[btn.name] = btn;
  });
  return btnsMap;
}

function getBtns(toolbarConfig) {
  const btnsMap = getDefaultBtnsMap();
  const btns = [];
  toolbarConfig.forEach(function (btn) {
    if (typeof btn === 'object') {
      btns.push(btn);
    } else {
      btns.push(btnsMap[btn]);
    }
  });
  return btns;
}

function mixin(dest, src) {
  for (const _ref of Object.entries(src)) {
    var _ref2 = _slicedToArray(_ref, 2);

    const key = _ref2[0];
    const value = _ref2[1];

    if (typeof dest[key] === 'object' && !Array.isArray(dest[key])) {
      mixin(dest[key], value);
    } else {
      dest[key] = value;
    }
  }

  return dest;
}

const defaultConfig = {
  previewDisplay: 'normal',
  fullScreen: false,
  parsers: [KatexParser, HighlightjsParser],
  toolbarConfig: defaultBtns,
  bigScreenToolbarConfig: defaultBtns,
  smallScreenToolbarConfig: defaultSimpleBtns,
  editorOption: {
    mode: 'gfm',
    lineNumbers: true,
    lineWrapping: true
  },
  scrollSync: true
};
function getConfig(config) {
  const mergedConfig = mixin(_cloneDeep(defaultConfig), config);
  const processedConfig = {};

  for (const key of Object.keys(defaultConfig)) {
    processedConfig[key] = mergedConfig[key];
  }

  processedConfig.toolbarConfig = getBtns(processedConfig.toolbarConfig);
  return processedConfig;
}

function contentParserFactory(parsers) {
  let converter = MarkdownIt();
  parsers.forEach(parser => {
    converter = converter.use(parser);
  });
  return content => converter.render(content);
}

/*
Copyright (c) 2014 Vitaly Puzrin, Alex Kocharin.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
var InjectLnParser = (mdHtml => {
  function injectLineNumbers(tokens, idx, options, env, slf) {
    let line;

    if (tokens[idx].map && tokens[idx].level === 0) {
      line = tokens[idx].map[0];
      tokens[idx].attrSet('data-line', String(line));
    }

    return slf.renderToken(tokens, idx, options, env, slf);
  }

  mdHtml.renderer.rules.paragraph_open = mdHtml.renderer.rules.heading_open = injectLineNumbers;
});

const dictionary = new Map([[/^en/, new Map([['确定', 'OK'], ['取消', 'Cancel'], ['粗体', 'Bold'], ['插入代码', 'Insert code'], ['语言类型', 'Language'], ['未选择', 'Unselected'], ['全屏', 'Fullscreen'], ['取消全屏', 'Exit fullscreen'], [/^(\d)级标题$/, (text, match) => `Header ${match[1]}`], ['隐藏预览', 'Hide preview'], ['显示预览', 'Show preview'], ['分割线', 'Horizontal rule'], ['插入图片', 'Insert image'], ['图片地址', 'Image URL'], ['图片描述', 'Image title'], ['关于', 'About'], ['斜体', 'Italic'], ['插入链接', 'Insert hyperlink'], ['链接地址', 'Link URL'], ['链接标题', 'Link title'], ['有序列表', 'Ordered list'], ['停用滚动同步', 'Disable scroll sync'], ['启用滚动同步', 'Enable scroll sync'], ['删除线', 'Strikeout'], ['插入表格', 'Insert table'], ['行数', 'Number of rows'], ['列数', 'Number of columns'], ['对齐方式', 'Alignment'], ['左对齐', 'Flush left'], ['居中', 'Centered'], ['右对齐', 'Flush right'], ['无序列表', 'Unordered list'], ['是一个开源的 Markdown 编辑器，面向现代化网络环境。', 'is an open-source Markdown editor for the modern web.'], ['访问 GitHub 项目地址', 'View it on GitHub']])], [/^zh/, new Map([[/^(\d)级标题$/, (text, match) => `${'一二三四五六'[match[1] - 1]}级标题`]])]]);
function getText(text) {
  for (const language of navigator.languages) {
    for (const _ref of dictionary) {
      var _ref2 = _slicedToArray(_ref, 2);

      const langReg = _ref2[0];
      const textMapping = _ref2[1];

      if (langReg.test(language)) {
        let result;
        let match = null;

        if (textMapping.has(text)) {
          result = textMapping.get(text);
        } else {
          for (const _ref3 of textMapping) {
            var _ref4 = _slicedToArray(_ref3, 2);

            const re = _ref4[0];
            const res = _ref4[1];

            if (_isRegExp(re)) {
              match = re.exec(text);

              if (match !== null) {
                result = res;
                break;
              }
            }
          }
        }

        if (typeof result !== 'undefined') {
          if (typeof result === 'function') {
            result = result(text, match === null ? undefined : match);
          }

          return result;
        } else {
          return text;
        }
      }
    }
  }

  return text;
}

var script$7 = {
  name: 'markdown-palettes',
  props: {
    value: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: function _default() {
        return defaultConfig;
      }
    }
  },

  data() {
    return _objectSpread({}, getConfig(this.config), {
      editor: null,
      code: ''
    });
  },

  computed: {
    contentParser() {
      return contentParserFactory([...this.parsers, InjectLnParser]);
    },

    toolbarBtns() {
      if (window.screen.width > 768) {
        return this.config.bigScreenToolbarConfig;
      } else {
        return this.config.smallScreenToolbarConfig;
      }
    }

  },
  methods: {
    setCode(code) {
      this.code = code;
      this.editor.setValue(code);
    },

    getCode() {
      return this.code;
    },

    doScrollSync(emitter, info) {
      if (emitter === 'inputArea') {
        this.previewAreaUpdateScrollSync(info);
      } else if (emitter === 'previewArea') {
        this.inputAreaUpdateScrollSync(info);
      }
    },

    ensureValue(val) {
      if (typeof val === 'function') {
        return val.call(this);
      } else {
        return val;
      }
    },

    t: getText
  },
  watch: {
    value(newValue) {
      this.setCode(newValue);
    }

  },
  provide: () => ({
    t: getText
  }),
  mixins: [InputAreaMixin, PreviewAreaMixin, ToolbarMixin, ActionMixin],
  components: {
    'editor-dialog': Dialog
  }
};

/* script */
const __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "mp-editor-container",
    class: {
      "mp-full-screen": this.fullScreen
    }
  }, [_vm.toolbarBtns.length ? _c("div", {
    staticClass: "mp-editor-toolbar"
  }, [_c("ul", {
    staticClass: "mp-editor-menu"
  }, _vm._l(_vm.toolbarBtns, function (item, index) {
    return _c("li", {
      key: item.name + index,
      class: {
        "mp-divider": item.name === "|"
      }
    }, [item.name === "|" ? _c("span", [_vm._v("|")]) : _c("a", {
      attrs: {
        title: _vm.t(_vm.ensureValue(item.title)),
        unselectable: "on"
      },
      on: {
        click: function click($event) {
          _vm.toolbarAction(item);
        }
      }
    }, [_c("i", {
      class: ["fa", _vm.ensureValue(item.icon)],
      attrs: {
        unselectable: "on"
      }
    }, [_vm._v(_vm._s(_vm.ensureValue(item.content)))])])]);
  }))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mp-editor-ground"
  }, [_c("div", {
    staticClass: "mp-editor-zone mp-input-zone",
    class: {
      "mp-editor-zone": _vm.previewDisplay === "normal",
      "mp-editor-zone-full": _vm.previewDisplay === "hide",
      "mp-editor-zone-hide": _vm.previewDisplay === "full"
    }
  }, [_c("div", {
    ref: "inputArea",
    staticClass: "mp-input-area"
  })]), _vm._v(" "), _c("div", {
    staticClass: "mp-editor-zone mp-preview-zone",
    class: {
      "mp-editor-zone": _vm.previewDisplay === "normal",
      "mp-editor-zone-hide": _vm.previewDisplay === "hide",
      "mp-editor-zone-full": _vm.previewDisplay === "full"
    }
  }, [_c("div", {
    ref: "previewArea",
    staticClass: "mp-preview-area",
    on: {
      scroll: _vm.previewAreaScroll
    }
  }, [_c("div", {
    ref: "previewContent",
    staticClass: "mp-preview-content",
    domProps: {
      innerHTML: _vm._s(_vm.previewContent)
    }
  })])])]), _vm._v(" "), _c("div", [_vm.showDialog ? _c("editor-dialog", {
    attrs: {
      request: _vm.dialogRequest
    },
    on: {
      finish: _vm.dialogFinish,
      close: _vm.closeDialog
    }
  }) : _vm._e()], 1)]);
};

var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;
/* style */

const __vue_inject_styles__$7 = function (inject) {
  if (!inject) return;
  inject("data-v-0c58d19c_0", {
    source: "\n.mp-editor-zone[data-v-0c58d19c] {\n  height: 100%;\n}\n.mp-input-zone[data-v-0c58d19c] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n.mp-preview-zone[data-v-0c58d19c] {\n  display: none;\n}\n.mp-editor-zone-full[data-v-0c58d19c] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  border: none !important;\n}\n.mp-editor-zone-hide[data-v-0c58d19c] {\n  display: none !important;\n}\n@media only screen and (min-width: 768px) {\n.mp-editor-zone[data-v-0c58d19c] {\n    display: block;\n    box-sizing: border-box;\n    width: 50%;\n    float: left;\n}\n}\n.mp-editor-container[data-v-0c58d19c] {\n  position: relative;\n  height: 100%;\n  border: 1px solid #ddd;\n}\n.mp-full-screen[data-v-0c58d19c] {\n  position: fixed;\n  z-index: 9997;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.mp-editor-toolbar[data-v-0c58d19c] {\n  float: left;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  background-color: #fff;\n}\n.mp-editor-ground[data-v-0c58d19c] {\n  position: absolute;\n  width: 100%;\n  top: 40px;\n  bottom: 0;\n  overflow: hidden;\n  border-top: 1px solid #ddd;\n}\n.mp-preview-zone[data-v-0c58d19c] {\n  border-left: 1px solid #ddd;\n  padding-bottom: 2px;\n}\n.mp-input-area[data-v-0c58d19c],\n.mp-input-area[data-v-0c58d19c] .CodeMirror {\n  height: 100%;\n}\n.mp-preview-area[data-v-0c58d19c] {\n  overflow: auto;\n  background-color: #fff;\n  height: 100%;\n}\n.mp-preview-content[data-v-0c58d19c] {\n  color: #333;\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  overflow: auto;\n  height: auto;\n  word-wrap: break-word;\n}\n.mp-preview-content[data-v-0c58d19c] table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  display: block;\n  width: 100%;\n  overflow: auto;\n  word-break: keep-all;\n  margin: 10px;\n}\n.mp-preview-content[data-v-0c58d19c] table th,\n.mp-preview-content[data-v-0c58d19c] table td {\n  border: 1px solid #ddd;\n  padding: 6px 13px;\n}\n.mp-preview-content[data-v-0c58d19c] code {\n  font-family: Monaco, Menlo, Consolas, \"Courier New\", monospace;\n  font-size: 15px;\n}\n.mp-preview-content[data-v-0c58d19c] img {\n  max-width: 100%;\n}\n.mp-preview-content[data-v-0c58d19c] p {\n  margin: 1rem 0;\n}\n.mp-preview-content[data-v-0c58d19c] h1,\n.mp-preview-content[data-v-0c58d19c] h2,\n.mp-preview-content[data-v-0c58d19c] h3,\n.mp-preview-content[data-v-0c58d19c] h4,\n.mp-preview-content[data-v-0c58d19c] h5,\n.mp-preview-content[data-v-0c58d19c] h6 {\n  margin: 0.5rem 0;\n}\n.mp-preview-content[data-v-0c58d19c] h1,\n.mp-preview-content[data-v-0c58d19c] h2 {\n  padding-bottom: 0.2em;\n  border-bottom: solid 1px #eee;\n}\n.mp-preview-content[data-v-0c58d19c] ul,\n.mp-preview-content[data-v-0c58d19c] ol {\n  padding-left: 1.5em;\n}\n.mp-preview-content[data-v-0c58d19c] ul {\n  list-style: outside disc;\n}\n.mp-preview-content[data-v-0c58d19c] ol {\n  list-style: outside decimal;\n}\n.mp-preview-content[data-v-0c58d19c] hr {\n  margin: 1em 0;\n  height: 0;\n  border: none;\n  border-bottom: solid 1px #eee;\n}\n.mp-editor-menu>li>a[data-v-0c58d19c] {\n  outline: 0;\n  color: #666;\n  cursor: pointer;\n  display: inline-block;\n  min-width: 24px;\n  font-size: 16px;\n  text-decoration: none;\n  text-align: center;\n  border: 1px solid #fff;\n  transition: all 300ms ease-out;\n}\n.mp-editor-menu>li>a.active[data-v-0c58d19c],\n.mp-editor-menu>li>a[data-v-0c58d19c]:hover {\n  border: 1px solid #ddd;\n  background-color: #eee;\n}\n.mp-editor-menu[data-v-0c58d19c] {\n  margin: 0;\n  padding-left: 8px;\n  list-style: none;\n}\n.mp-editor-menu>li>a>.fa[data-v-0c58d19c] {\n  text-align: center;\n  display: block;\n  padding: 5px 0;\n}\n.mp-editor-menu>li[data-v-0c58d19c] {\n  margin: 0;\n  padding: 5px 1px;\n  display: inline-block;\n  position: relative;\n}\n.mp-editor-menu>li .divider[data-v-0c58d19c] {\n  display: inline-block;\n  text-indent: -9999px;\n  margin: 0 5px;\n  height: 65%;\n  border-right: 1px solid #ddd;\n}\n",
    map: {
      "version": 3,
      "sources": ["/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/MarkdownPalettes.vue", "MarkdownPalettes.vue"],
      "names": [],
      "mappings": ";AAsCA;EACA,aAAA;CCrCC;ADsCD;EACA,uBAAA;EACA,YAAA;EACA,aAAA;CCpCC;ADqCD;EACA,cAAA;CCnCC;ADqCD;EACA,eAAA;EACA,uBAAA;EACA,YAAA;EACA,wBAAA;CCnCC;ADoCD;EACA,yBAAA;CClCC;ADmCD;AACA;IACA,eAAA;IACA,uBAAA;IACA,WAAA;IACA,YAAA;CCjCG;CACF;ADkCD;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;CChCC;ADiCD;EACA,gBAAA;EACA,cAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,YAAA;CC/BC;ADiCD;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;CC/BC;ADgCD;EACA,mBAAA;EACA,YAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;EACA,2BAAA;CC9BC;AD+BD;EACA,4BAAA;EACA,oBAAA;CC7BC;AD+BD;;EACA,aAAA;CC5BC;AD8BD;EACA,eAAA;EACA,uBAAA;EACA,aAAA;CC5BC;AD6BD;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,oBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;CC3BC;AD4BD;EACA,0BAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,aAAA;CC1BC;AD2BD;;EACA,uBAAA;EACA,kBAAA;CCxBC;ADyBD;EACA,+DAAA;EACA,gBAAA;CCvBC;ADwBD;EACA,gBAAA;CCtBC;ADuBD;EACA,eAAA;CCrBC;ADsBD;;;;;;EAEA,iBAAA;CChBC;ADiBD;;EACA,sBAAA;EACA,8BAAA;CCdC;ADeD;;EACA,oBAAA;CCZC;ADaD;EACA,yBAAA;CCXC;ADYD;EACA,4BAAA;CCVC;ADWD;EACA,cAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;CCTC;ADWD;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,+BAAA;CCTC;ADUD;;EACA,uBAAA;EACA,uBAAA;CCPC;ADQD;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;CCNC;ADOD;EACA,mBAAA;EACA,eAAA;EACA,eAAA;CCLC;ADMD;EACA,UAAA;EACA,iBAAA;EACA,sBAAA;EACA,mBAAA;CCJC;ADKD;EACA,sBAAA;EACA,qBAAA;EACA,cAAA;EACA,YAAA;EACA,6BAAA;CCHC",
      "file": "MarkdownPalettes.vue",
      "sourcesContent": [null, ".mp-editor-zone {\n  height: 100%;\n}\n.mp-input-zone {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n.mp-preview-zone {\n  display: none;\n}\n.mp-editor-zone-full {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  border: none !important;\n}\n.mp-editor-zone-hide {\n  display: none !important;\n}\n@media only screen and (min-width: 768px) {\n  .mp-editor-zone {\n    display: block;\n    box-sizing: border-box;\n    width: 50%;\n    float: left;\n  }\n}\n.mp-editor-container {\n  position: relative;\n  height: 100%;\n  border: 1px solid #ddd;\n}\n.mp-full-screen {\n  position: fixed;\n  z-index: 9997;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.mp-editor-toolbar {\n  float: left;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  background-color: #fff;\n}\n.mp-editor-ground {\n  position: absolute;\n  width: 100%;\n  top: 40px;\n  bottom: 0;\n  overflow: hidden;\n  border-top: 1px solid #ddd;\n}\n.mp-preview-zone {\n  border-left: 1px solid #ddd;\n  padding-bottom: 2px;\n}\n.mp-input-area,\n.mp-input-area >>> .CodeMirror {\n  height: 100%;\n}\n.mp-preview-area {\n  overflow: auto;\n  background-color: #fff;\n  height: 100%;\n}\n.mp-preview-content {\n  color: #333;\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  overflow: auto;\n  height: auto;\n  word-wrap: break-word;\n}\n.mp-preview-content >>> table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  display: block;\n  width: 100%;\n  overflow: auto;\n  word-break: keep-all;\n  margin: 10px;\n}\n.mp-preview-content >>> table th,\n.mp-preview-content >>> table td {\n  border: 1px solid #ddd;\n  padding: 6px 13px;\n}\n.mp-preview-content >>> code {\n  font-family: Monaco, Menlo, Consolas, \"Courier New\", monospace;\n  font-size: 15px;\n}\n.mp-preview-content >>> img {\n  max-width: 100%;\n}\n.mp-preview-content >>> p {\n  margin: 1rem 0;\n}\n.mp-preview-content >>> h1,\n.mp-preview-content >>> h2,\n.mp-preview-content >>> h3,\n.mp-preview-content >>> h4,\n.mp-preview-content >>> h5,\n.mp-preview-content >>> h6 {\n  margin: 0.5rem 0;\n}\n.mp-preview-content >>> h1,\n.mp-preview-content >>> h2 {\n  padding-bottom: 0.2em;\n  border-bottom: solid 1px #eee;\n}\n.mp-preview-content >>> ul,\n.mp-preview-content >>> ol {\n  padding-left: 1.5em;\n}\n.mp-preview-content >>> ul {\n  list-style: outside disc;\n}\n.mp-preview-content >>> ol {\n  list-style: outside decimal;\n}\n.mp-preview-content >>> hr {\n  margin: 1em 0;\n  height: 0;\n  border: none;\n  border-bottom: solid 1px #eee;\n}\n.mp-editor-menu>li>a {\n  outline: 0;\n  color: #666;\n  cursor: pointer;\n  display: inline-block;\n  min-width: 24px;\n  font-size: 16px;\n  text-decoration: none;\n  text-align: center;\n  border: 1px solid #fff;\n  transition: all 300ms ease-out;\n}\n.mp-editor-menu>li>a.active,\n.mp-editor-menu>li>a:hover {\n  border: 1px solid #ddd;\n  background-color: #eee;\n}\n.mp-editor-menu {\n  margin: 0;\n  padding-left: 8px;\n  list-style: none;\n}\n.mp-editor-menu>li>a>.fa {\n  text-align: center;\n  display: block;\n  padding: 5px 0;\n}\n.mp-editor-menu>li {\n  margin: 0;\n  padding: 5px 1px;\n  display: inline-block;\n  position: relative;\n}\n.mp-editor-menu>li .divider {\n  display: inline-block;\n  text-indent: -9999px;\n  margin: 0 5px;\n  height: 65%;\n  border-right: 1px solid #ddd;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$7 = "data-v-0c58d19c";
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* component normalizer */

function __vue_normalize__$7(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/mnt/c/Users/darkflames/Documents/Development/markdown-palettes/src/MarkdownPalettes.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__$7() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$7.styles || (__vue_create_injector__$7.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var Editor = __vue_normalize__$7({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, __vue_create_injector__$7, undefined);

const defaultContentParser = contentParserFactory(defaultConfig.parsers);

export default Editor;
export { Editor, defaultContentParser };
