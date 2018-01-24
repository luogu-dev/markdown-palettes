<template>
    <div id="mp-toolbar">
        <ul id="mp-editor-menu" v-if="toolbarConfig.length > 0">
            <li v-for="item in toolbarConfig" :class="{'mp-divider':item.name === '|'}" >
                <span v-if="item.name === '|'">|</span>
                <a v-else :title="item.title" @click="handleAction(item.action)" unselectable="on">
                    <i :class="['fa', item.icon]" :name="item.name" unselectable="on">{{ item.content }}</i>
                </a>
            </li>
        </ul>
    </div>
</template>

<style>

    #mp-toolbar {
        box-sizing: border-box;
        background-color: white;
        width: 100%;
        padding-right: 1px;
        min-height: 35px;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-top: 1px solid #ddd;
    }

    #mp-editor-menu>li>a {
        outline: 0;
        color: #666;
        display: inline-block;
        min-width: 24px;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        border: 1px solid #fff;
        transition: all 300ms ease-out;
    }
    #mp-editor-menu>li>a.active, #editor-menu>li>a:hover {
        border: 1px solid #ddd;
        background-color: rgb(238, 238, 238);
    }

    #mp-editor-menu {
        margin: 0;
        padding-left: 8px;
        list-style: none;
    }

    #mp-editor-menu>li>a>.fa {
        text-align: center;
        display: block;
        padding: 5px;
    }

    #mp-editor-menu>li {
        margin: 0;
        padding: 5px 1px;
        display: inline-block;
        position: relative;
    }

    #mp-editor-menu>li.divider {
        display: inline-block;
        text-indent: -9999px;
        margin: 0 5px;
        height: 65%;
        border-right: 1px solid #ddd;
    }
</style>

<script>
import 'font-awesome/css/font-awesome.css'

/**
     * configItem = {
     *     name: "",
     *     icon: "", // icon name from font-awesome
     *     content: "",
     *     title: "",
     *     action: {
     *         insert: "code",  //or ["before", "after"]
     *         reqeust: {
     *             title: "",
     *             body: [
     *              {name, title, type, param, default}
     *             ],
     *             callback(){} //return the code that needed to be inserted
     *         }
     *     }
     * }
     */
export default {
    name: 'toolbar',
    props: {
        toolbarConfig: {
            type: Array
        }
    },
    methods: {
        insertCode (code) {
            this.$emit('change', code)
        },
        requestData (request) {
            this.$emit('click', request)
        },
        handleAction (action) {
            if (action.event) {
                this.$emit('input', action.event)
            } else if (action.insert) {
                this.insertCode(action.insert)
            } else if (action.request) {
                this.requestData(action.request)
            }
        }
    }
}
</script>