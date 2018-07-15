export default {
    name: 'img',
    icon: 'fa-image',
    title: '插入图片',
    action: {
        request: {
            title: '插入图片',
            body: [
                {
                    name: 'address',
                    title: '图片地址',
                    type: 'dialog-input',
                    default: ''
                },
                {
                    name: 'description',
                    title: '图片描述',
                    type: 'dialog-input',
                    default: ''
                }
            ],
            callback (data) {
                return '![' + data.description + '](' + data.address + ')'
            }
        }
    }
}
