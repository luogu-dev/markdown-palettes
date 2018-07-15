<template>
    <div class="mp-dialog-input">
        <label>{{ title }}</label>
        <input v-model="value">
    </div>
</template>

<style scoped>
    .mp-dialog-input {
        overflow: auto;
    }

    .mp-dialog-input label {
        float: left;
        padding-top: 5px;
        vertical-align: top;
        margin-right: 10px;
        width: 20%;
        font-size: 14px;
        color: #666;
    }

    .mp-dialog-input input {
        float: left;
        width: 70%;
        color: #999;
        padding: 8px;
        border: 1px solid #ddd;
    }
</style>

<script>
import abstractInputComponent from './AbstractInputComponent'

export default {
    name: 'dialog-input',
    extends: abstractInputComponent
}
</script>
