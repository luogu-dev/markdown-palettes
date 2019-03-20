import { faImage } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'img',
    icon: faImage,
    title: '插入图片',
    action: {
        request: {
            title: '插入图片',
            type: 'form',
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
