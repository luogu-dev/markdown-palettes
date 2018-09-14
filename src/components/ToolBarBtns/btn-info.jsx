export default {
    name: 'Info',
    icon: 'fa-info-circle',
    title: '关于',
    action () {
        this.openDialog({
            title: '关于',
            body: [{
                component: {
                    functional: true,
                    render: (h, { injections: {t} }) =>
                        <div style="text-align: center">
                            <p>
                                <strong>{ t('Markdown*Palettes') }</strong> { t('是一个开源的 Markdown 编辑器，面向现代化网络环境。') }
                            </p>
                            <p>
                                <a href="https://github.com/luogu-dev/markdown-palettes" target="_blank">{ t('访问 GitHub 项目地址') }</a>
                            </p>
                        </div>,
                    inject: ['t']
                }
            }]
        })
    }
}
