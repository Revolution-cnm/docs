module.exports = {
    title: '赖庆的博客',
    description: '瞧一瞧，看一看',
    base: '/docs/',
    // dest: './dist',//dist生成目录在最外层目录
    // port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.jpg'}],//窗口图标,在header中引入图片，连接默认在.vuepress public底下
        // ['link', {rel: 'stylesheet', href: '/css/style.css'}]//在header中引入css
        // ['script', {charset: 'utf-8', src: '/js/index.js'}]//在header中引入js
    ],
    markdown: { 
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),//导航栏
        sidebar:require("./sidebar.js"),//引入所有sidebar侧边栏
        sidebarDepth: 3, //最多显示到三级目录
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
