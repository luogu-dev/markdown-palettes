import { faLink } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'link',
    icon: faLink,
    title: '插入链接',
    action: {
        request: {
            title: '插入链接',
            type: 'form',
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
    }
}
