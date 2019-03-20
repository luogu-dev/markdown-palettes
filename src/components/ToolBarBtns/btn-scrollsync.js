import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'scrollSync',
    icon () { return this.scrollSync ? faLock : faLockOpen },
    title () { return this.scrollSync ? '停用滚动同步' : '启用滚动同步' },
    action: {
        event: 'scrollSync'
    }
}
