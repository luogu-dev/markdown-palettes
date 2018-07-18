export default {
    name: 'link',
    icon: 'fa-link',
    title: '插入链接',
    action: {
        request: {
            title: '插入链接',
            body: [
                {
                    name: 'url',
                    title: '链接地址',
                    type: 'dialog-input',
                    default: ''
                },
                {
                    name: 'description',
                    title: '链接标题',
                    type: 'dialog-input',
                    default: ''
                }
            ],
            callback (data) {
                return '[' + data.description + '](' + data.url + ')'
            }
        }
    },
    keyBinding: 'Ctrl-K'
}
