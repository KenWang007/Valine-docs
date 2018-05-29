module.exports = {
    dest: 'docs',
    ga:'UA-61934506-3',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Valine',
            description: '一款快速、简洁且高效的无后端评论系统。'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Valine',
            description: 'A fast, simple & powerful comment system.'
        },
    },
    serviceWorker: true,
    head: [
        ['link',{rel:'shortcut icon', href:'/icons/favicon.ico'}],
        ['link', { rel: 'icon', href: `/assets/valine.png` }],
        ['link', { rel: 'manifest', href: '/assets/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#2782D7' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        repo: 'xCss/Valine',
        docsRepo: 'xCss/Valine-docs',
        docsDir: 'docs',
        editLinks: true,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                lastUpdated: '上次更新',
                editLinkText: '在 GitHub 上编辑此页',
                sidebar: {
                    '/guide/': genSidebarConfig('指南')
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                editLinkText: 'Edit this page on GitHub',
                sidebar: {
                    '/en/guide/': genSidebarConfig('Guide')
                }
            },
        }
    }
}

function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'quickstart',
            'config',
            'avatar',
            'notify',
            // 'using-vue',
            // 'custom-themes',
            // 'i18n',
            // 'deploy'
        ]
    }]
}