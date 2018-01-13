<template>
    <div id="toolbar">
        <ul id="editor-menu" v-if="toolbarConfig.length > 0">
            <li v-for="item in toolbarConfig" :class="{'divider':item.name === '|'}" >
                <span v-if="item.name === '|'">|</span>
                <a v-else :title="item.title" @click="handleAction(item.action)" unselectable="on">
                    <i :class="['fa', item.icon]" :name="item.name" unselectable="on"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
    #editor-menu>li>a {
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
    #editor-menu>li>a.active, #editor-menu>li>a:hover {
        border: 1px solid #ddd;
        background-color: rgb(238, 238, 238);
    }

    #editor-menu {
        margin: 0;
        padding-left: 8px;
        list-style: none;
    }

    #editor-menu>li>a>.fa {
        text-align: center;
        display: block;
        padding: 5px;
    }

    #editor-menu>li {
        margin: 0;
        padding: 5px 1px;
        display: inline-block;
        position: relative;
    }

    #editor-menu>li.divider {
        display: inline-block;
        text-indent: -9999px;
        margin: 0 5px;
        height: 65%;
        border-right: 1px solid #ddd;
    }
</style>

<script>
    import "font-awesome/css/font-awesome.css"
    import BtnBold from "./toolbar-button/btn-bold"
    import Divider from "./toolbar-button/divider"

    /**
     * configItem = {
     *     name: "",
     *     icon: "", // icon name from font-awesome
     *     title: "",
     *     action: {
     *         insert: "code",  //or ["before", "after"]
     *         reqeust: {
     *             title: "",
     *             body: [
     *              {name,title,default}
     *             ],
     *             callback(){} //return the code that needed to be inserted
     *         }
     *     }
     * }
     */
    export default {
        name:"toolbar",
        props: {
            toolbarConfig: {
                type: Array,
                default: function () {
                    return [ BtnBold, BtnBold, Divider, BtnBold ]
                }
            }
        },
        methods: {
            insertCode(code) {
                this.$emit('change', code)
            },
            requestData(request) {
                this.$emit('click', request)
            },
            handleAction(action) {
                if(action.insert) {
                    this.insertCode(action)
                }
                else if(action.request) {
                    this.requestData(action.request)
                }
            }
        }
    }
</script>