import { faStrikethrough } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'strikethrough',
    icon: faStrikethrough,
    title: '删除线',
    action: {
        insert: ['~~', '~~']
    }
}
