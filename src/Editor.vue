<template>
    <div>
        <markdown-palettes 
            v-model="value" 
            :config="config"/>
    </div>
</template>

<style scoped lang="stylus">
    div
        height: 100%
</style>

<script>
import MarkdownPalettes from './MarkdownPalettes'

export default {
    components: { MarkdownPalettes },
    data: function () {
        return {
            value: '',
            config: {}
        }
    }
}
</script>
