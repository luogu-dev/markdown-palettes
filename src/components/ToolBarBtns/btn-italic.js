import { faItalic } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'italic',
    icon: faItalic,
    title: '斜体',
    action: {
        insert: [' _', '_ ']
    }
}
