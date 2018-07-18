<template>
    <div class="mp-dialog-input">
        <label>{{ title }}</label>
        <input type="file" name="picture" @change="handleFile">
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
    }
</style>

<script>
import abstractInputComponent from './AbstractDialogFormComponent'

export default {
    name: 'file',
    extends: abstractInputComponent,
    methods: {
        async handleFile (event) {
            let file = event.target.files[0]
            this.fieldValue = await this.param.callback(file)
        }
    }
}
</script>
