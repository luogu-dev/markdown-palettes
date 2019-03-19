import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'fullScreen',
    icon: faExpandArrowsAlt,
    title () { return this.fullScreen ? '取消全屏' : '全屏' },
    action: {
        event: 'fullScreen'
    }
}
