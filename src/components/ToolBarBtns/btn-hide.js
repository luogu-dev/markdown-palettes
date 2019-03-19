import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'hide',
    icon () { return this.previewDisplay === 'hide' ? faEyeSlash : faEye },
    title () { return this.previewDisplay === 'hide' ? '显示预览' : '隐藏预览' },
    action: {
        event: 'hide'
    }
}
