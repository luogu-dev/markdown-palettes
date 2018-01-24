<template>
    <div id="mp-dialog-input">
        <label>{{ request.title }}</label>
        <input v-model="value">
    </div>
</template>

<style>
    #mp-dialog-input {
        overflow: auto;
    }

    #mp-dialog-input label {
        float: left;
        padding-top: 5px;
        vertical-align: top;
        width: 20%;
        font-size: 14px;
        color: #666;
    }

    #mp-dialog-input input {
        float: left;
        width: 73%;
        color: #999;
        padding: 8px;
        border: 1px solid #ddd;
    }
</style>

<script>
    export default {
        name: 'dialog-input',
        props: {
            requestField: {
                type: Object
            }
        },
        data() {
            return {
                request: this.requestField,
                value :this.requestField.default ? this.requestField.default : ''
            }
        },
        watch: {
            value(newValue) {
                this.request.value = newValue
                this.$emit('change', this.request)
            }
        }
    }
</script>