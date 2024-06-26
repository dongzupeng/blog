
module.exports = {
    title: '我的博客',
    base: '/blog/',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ['link', { rel: 'icon', href: './favicon.ico' }]
    ],
    themeConfig: {
        outline: false,
        siteTitle: "小垃圾",
        logo: "/logo.jpg",
        nav: [
            { text: "首页", link: "/" },
            { text: "Vue项目构建", link: "https://dongzupeng.github.io/vueAdmin/" },
            { text: "React项目构建", link: "https://dongzupeng.github.io/ant-myapp/" },
            { text: "web Audio", link: "https://dongzupeng.github.io/webAudio/" },
            {
                text: "小垃圾 的博客",
                items: [
                    { text: "掘金", link: "https://juejin.cn/user/2374587965252189" },
                    { text: "Github", link: "https://github.com/dongzupeng" },
                    { text: "Gitee", link: "https://gitee.com/dong-zupeng" },
                ]
            }
        ],
        footer: {
            message: '',
            copyright: `头文字D ©${new Date().getFullYear()} Created by 头文字D`,
        },
        sidebar: [
            {
                text: '欢迎学习',
                items: [
                    {
                        text: '博客简介', link: '/'
                    },
                ]
            },
            {
                text: '基础篇',
                link: '/basicknowledge/base.md',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: "HTML",
                        collapsible: true,
                        collapsed: true,
                        link: "/basicknowledge/HTML/html.md",
                        items: [
                            {
                                text: 'video标签',
                                link: "/basicknowledge/HTML/mediaLabel-video.md"
                            },
                            {
                                text: 'audio标签',
                                link: "/basicknowledge/HTML/mediaLabel-audio.md"
                            },
                            {
                                text: 'source标签',
                                link: "/basicknowledge/HTML/mediaLabel-source.md"
                            },
                            {
                                text: 'track标签',
                                link: "/basicknowledge/HTML/mediaLabel-track.md"
                            },
                            {
                                text: 'object与param标签',
                                link: "/basicknowledge/HTML/mediaLabel-object-param.md"
                            },
                            {
                                text: 'embed标签',
                                link: "/basicknowledge/HTML/mediaLabel-embed.md"
                            },
                            {
                                text: 'canvas标签',
                                link: "/basicknowledge/HTML/canvas.md"
                            },
                            {
                                text: 'webRTC结合canvas',
                                link: '/basicknowledge/HTML/webRTC结合canvas.md'
                            }
                        ],
                    },
                    {
                        text: "CSS",
                        collapsible: true,
                        link: "/basicknowledge/CSS/css.md",
                        items: [
                            {
                                text: 'flex布局',
                                link: "/basicknowledge/CSS/flex.md",
                            },
                            {
                                text: 'grid布局',
                                link: "/basicknowledge/CSS/grid.md",
                            },
                            {
                                text: '动画',
                                link: "/basicknowledge/CSS/animation.md",
                            }
                        ],
                    },
                    {
                        text: "JavaScript",
                        collapsible: true,
                        link: "/basicknowledge/JavaScript/JavaScript.md",
                        items: [
                            {
                                text: '数据类型',
                                link: "/basicknowledge/JavaScript/dataType.md",
                            },
                            {
                                text: 'instanceof',
                                link: "/basicknowledge/JavaScript/instanceof.md",
                            },
                            {
                                text: '常用技巧',
                                link: "/basicknowledge/JavaScript/commonSkills.md",
                            },
                            {
                                text: 'scrollTop',
                                link: "/basicknowledge/JavaScript/getScrollTop.md",
                            }
                        ],
                    },

                ]
            },
            {
                text: '进阶篇',
                link: '/advancedArticle/index.md',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: "TypeScript",
                        collapsible: true,
                        collapsed: true,
                        link: "/advancedArticle/TypeScript/index.md",
                        items: [
                            {
                                text: 'TypeScript介绍',
                                link: "/advancedArticle/TypeScript/typescript.md",
                            },
                            {
                                text: 'TypeScript基础',
                                link: "/advancedArticle/TypeScript/base.md",
                            },
                            {
                                text: 'TypeScript语法类型一',
                                link: "/advancedArticle/TypeScript/type1.md",
                            },
                            {
                                text: 'TypeScript语法类型二',
                                link: "/advancedArticle/TypeScript/type2.md",
                            },
                            {
                                text: 'TypeScript Class类简介',
                                link: "/advancedArticle/TypeScript/class.md",
                            },
                            {
                                text: 'TypeScript Class构造函数',
                                link: "/advancedArticle/TypeScript/constructor.md",
                            },
                            {
                                text: 'TypeScript Class继承',
                                link: "/advancedArticle/TypeScript/extends.md",
                            },
                            {
                                text: 'TypeScript Class super',
                                link: "/advancedArticle/TypeScript/super.md",
                            },
                            {
                                text: 'TypeScript 抽象类abstract',
                                link: "/advancedArticle/TypeScript/abstract.md",
                            },
                            {
                                text: 'TypeScript Class修饰符',
                                link: "/advancedArticle/TypeScript/defined.md",
                            },
                            {
                                text: 'TypeScript 接口',
                                link: "/advancedArticle/TypeScript/interface.md",
                            },
                            {
                                text: 'TypeScript 泛型',
                                link: "/advancedArticle/TypeScript/genericity.md",
                            },


                        ],
                    },
                    {
                        text: "Vue",
                        collapsible: true,
                        collapsed: true,
                        link: "/advancedArticle/Vue/index.md",
                        items: [
                            {
                                text: 'Vue2',
                                link: "/advancedArticle/Vue/Vue2.md",
                            },
                            {
                                text: 'Vue3',
                                link: "/advancedArticle/Vue/Vue3.md",
                            },
                             {
                                text: 'Vue自定义指令权限控制',
                                link: "/advancedArticle/Vue/Vue自定义指令权限控制.md",
                            },
                        ],
                    },
                    {
                        text: "React",
                        collapsible: true,
                        collapsed: true,
                        link: "/advancedArticle/React/index.md",
                        items: [
                            {
                                text: 'React hooks之useState',
                                link: "/advancedArticle/React/useState.md",
                            },
                            {
                                text: 'React hooks之useEffect',
                                link: "/advancedArticle/React/useEffect.md",
                            },
                            {
                                text: 'React hooks之useContext',
                                link: "/advancedArticle/React/useContext.md",
                            },
                            {
                                text: 'React hooks之useReducer',
                                link: "/advancedArticle/React/useReducer.md",
                            },
                            {
                                text: 'React hooks之useCallback',
                                link: "/advancedArticle/React/useCallback.md",
                            },
                            {
                                text: 'React hooks之useMemo',
                                link: "/advancedArticle/React/useMemo.md",
                            },
                            {
                                text: 'React 高阶组件之React.memo',
                                link: "/advancedArticle/React/React.memo.md",
                            }
                        ],
                    },
                ]
            }
        ]
    }
}