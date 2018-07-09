import _ from 'lodash'

export const dictionary = new Map([
    [/^en/, new Map([
        ['确定', 'OK'],
        ['取消', 'Cancel'],
        ['粗体', 'Bold'],
        ['插入代码', 'Insert code'],
        ['语言类型', 'Language'],
        ['未选择', 'Unselected'],
        ['全屏', 'Fullscreen'],
        [/^(?<level>\d)级标题$/, (text, {groups: {level}}) => `Header ${level}`],
        ['隐藏', 'Hide'],
        ['分割线', 'Horizontal rule'],
        ['插入图片', 'Insert image'],
        ['图片地址', 'Image URL'],
        ['图片描述', 'Image title'],
        ['关于', 'About'],
        ['斜体', 'Italic'],
        ['插入链接', 'Insert hyperlink'],
        ['链接地址', 'Link URL'],
        ['链接标题', 'Link title'],
        ['有序列表', 'Ordered list'],
        ['同步滚动', 'Scroll sync'],
        ['删除线', 'Strikeout'],
        ['插入表格', 'Insert table'],
        ['行数', 'Number of rows'],
        ['列数', 'Number of columns'],
        ['对齐方式', 'Alignment'],
        ['左对齐', 'Flush left'],
        ['居中', 'Centered'],
        ['右对齐', 'Flush right'],
        ['无序列表', 'Unordered list']
    ])],
    [/^zh/, new Map([
        [/^(?<level>\d)级标题$/, (text, {groups: {level}}) => `${'一二三四五六'[level - 1]}级标题`]
    ])]
])

export function getText (text) {
    for (let language of navigator.languages) {
        for (let [langReg, textMapping] of dictionary) {
            if (langReg.test(language)) {
                let result, match = null
                if (textMapping.has(text)) {
                    result = textMapping.get(text)
                } else {
                    for (let [re, res] of textMapping) {
                        if (_.isRegExp(re)) {
                            match = re.exec(text)
                            if (match !== null) {
                                result = res
                                break
                            }
                        }
                    }
                }
                if (typeof result !== 'undefined') {
                    if (typeof result === 'function') {
                        result = result(text, match === null ? undefined : match)
                    }
                    return result
                } else {
                    return text
                }
            }
        }
    }
    return text
}

export const mixin = {
    methods: {
        t: getText
    }
}
