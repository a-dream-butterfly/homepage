
module.exports = {
    theme: '',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: '/image/avatar.png' }
        ]
    ],
    themeConfig: {
      logo: '/image/avatar.png',// 注意图片放在 public 文件夹下
      title: '我的主页', // 设置网站标题
      description: '欢迎来到我的小天地，勇敢的冒险者！',
      sidebar: [
        {
            title: '关于我',   // 必要的
            path: '/about',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1    // 可选的, 默认值是 1
           
        },
        {
            title: '个人技术栈',   // 必要的
            path: '/technology',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1    // 可选的, 默认值是 1
        },
        {
            title: '个人开源项目',   // 必要的
            path: '/myOpenSource',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1   // 可选的, 默认值是 1
        },
        {
            title: '项目经历',   // 必要的
            path: '/work',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1    // 可选的, 默认值是 1
        },
        {
            title: '社交媒体',   // 必要的
            path: '/contact',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1    // 可选的, 默认值是 1
        },
      ],
      nav: [
        { text: 'Github', link: 'https://github.com/OS0day', target:'_blank' },
        { text: 'Gitee', link: 'https://gitee.com/os0day', target:'_blank'  },
        { text: 'Blog', link: 'https://blog.os0day.cn', target:'_blank'  }
      ]
    }
  }