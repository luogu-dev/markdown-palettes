export default {
    name: 'img',
    icon: 'fa-code',
    title: '插入代码',
    action () {
        const selection = this.editor.getSelection()
        const request = {
            title: '插入代码',
            type: 'form',
            body: [
                {
                    name: 'lang',
                    title: '语言类型',
                    type: 'dialog-select',
                    param: {
                        options: [
                            {
                                title: 'c',
                                value: 'c'
                            },
                            {
                                title: 'cpp',
                                value: 'cpp'
                            },
                            {
                                title: 'pascal',
                                value: 'pascal'
                            },
                            {
                                title: 'python',
                                value: 'python'
                            },
                            {
                                title: 'java',
                                value: 'java'
                            },
                            {
                                title: 'javascript',
                                value: 'javascript'
                            },
                            {
                                title: 'php',
                                value: 'php'
                            },
                            {
                                title: 'latex',
                                value: 'latex'
                            },
                            {
                                title: '未选择',
                                value: ''
                            }
                        ]
                    },
                    default: ''
                },
                {
                    name: 'code',
                    type: 'dialog-codemirror',
                    default: selection
                }
            ],
            callback: (data) => {
                this.editor.replaceSelection('```' + data.lang + '\n' +
                    data.code + '\n' +
                    '```\n')
                this.editor.focus()
            }
        }
        this.requestData(request)
    }
}
