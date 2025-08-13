/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { icon } from 'mermaid/dist/rendering-util/rendering-elements/shapes/icon.js'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'


// --- NEW IMPORTS ---
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// --- NEW HELPER ---
// This robustly locates the pyodide package directory
// const pyodideDir = dirname(fileURLToPath(import.meta.resolve('pyodide')));

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  locales: {
    '/': {
      title: 'ikimukticom',
      lang: 'en-US',
      description: 'Pusat Pengetahuan untuk Produktivitas Digital',
    },
    '/zh/': {
      title: 'ikimukticom',
      lang: 'zh-CN',
      description: '数字生产力知识中心',
    },
    '/de/': {
      lang: 'de-DE',
      title: 'ikimukticom',
      description: 'Wissenszentrum für digitale Produktivität',
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'ikimukticom',
      description: 'Центр знаний для цифровой продуктивности',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'ikimukticom',
      description: 'Centre de connaissances pour la productivité numérique',
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'ikimukticom',
      description: 'デジタル生産性のための知識センター',
    },
  },

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: '/image/favicon-32x32.png' }],
  ],
  bundler: viteBundler({
    viteOptions: {
      optimizeDeps: {
        // exclude: ['pyodide'],
      },
    },
    vuePluginOptions: {},
  }),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'https://ikimukti.com',

    /* 文档仓库配置，用于 editLink */
    docsRepo: 'https://github.com/arbiet/ikimukti_portofolio',
    docsDir: 'docs',
    docsBranch: '',

    /* 页内信息 */
    editLink: true,
    lastUpdated: {},
    contributors: {
      mode: 'inline', // 'inline' | 'block'
      info: [
        {
          username: 'ikimukticom',
          alias: ['Ikimukti.com'],
        }
      ]
    },
    changelog: true,
    profile: {
      name: 'ikimukticom',
      avatar: 'https://avatars.githubusercontent.com/u/148637550?s=400&u=d6caef1d3fd72971c8f1a3b2e31c048afbdfcb44&v=4',
      description: 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
      location: 'Indonesia',
      organization: 'Ikimukti',
      circle: true, // 是否启用个人信息圆圈
      layout: 'right', // 个人信息布局，'left' | 'right'
    },

    /**
     * 站点标题
     * @see https://theme-plume.vuejs.press/config/basic/#title
     * "discord" | "facebook" | "github" | "instagram" | "linkedin" | "mastodon" | "npm" | "slack" | "twitter" | "x" | "youtube" | "qq" | "weibo" | "bilibili" | "gitlab" | "docker" | "juejin" | "zhihu" | "douban" | "steam" | "stackoverflow" | "xbox";
     */ 
    social: [
      { icon: 'github', link: 'https://github.com/ikimukticom' },
      { icon: 'twitter', link: 'https://twitter.com/ikimukticom' },
      { icon: 'facebook', link: 'https://facebook.com/ikimukticom' },
      { icon: 'instagram', link: 'https://instagram.com/ikimukticom' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/ikimukticom' },
      { icon: 'youtube', link: 'https://youtube.com/@ikimukticom' },
      { icon: 'mastodon', link: 'https://mastodon.social/@ikimukticom' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/ikimukticom' },
      { icon: 'discord', link: 'https://discord.gg/ikimukticom' },
      { icon: 'slack', link: 'https://slack.com/ikimukticom' },
      { icon: 'weibo', link: 'https://weibo.com/ikimukticom' },
      { icon: 'qq', link: 'https://qq.com/ikimukticom' },
      { icon: 'douban', link: 'https://douban.com/ikimukticom' },
      { icon: 'zhihu', link: 'https://zhihu.com/ikimukticom' },
      { icon: 'gitlab', link: 'https://gitlab.com/ikimukticom' },
      { icon: 'docker', link: 'https://hub.docker.com/u/ikimukticom' },
      { icon: 'juejin', link: 'https://juejin.cn/user/ikimukticom' },
      { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/ikimukticom' },
      { icon: 'steam', link: 'https://steamcommunity.com/id/ikimukticom' },
      { icon: 'xbox', link: 'https://xbox.com/profile/ikimukticom' },
    ],

    copyright: {
      license: {
        name: 'CC BY-NC-SA 4.0',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
      author: {
        name: 'Ikimukti',
        url: 'https://ikimukti.com',
      },
      creation: 'reprint', // 'reprint' | 'original' | 'mixed'
    },

    bulletin: {
      layout: 'top-left', // 公告布局，'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
      border: true, // 是否启用公告边框
      enablePage: true, // 是否启用公告页面
      lifetime: 'always', // 公告生命周期，'session' | 'always' | 'once' | undefined
      id: 'bulletin', // 公告 ID，用于唯一标识公告
      title: 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
      content: 'Selamat datang di ikimukti.com, pusat pengetahuan untuk produktivitas digital. Kami menyediakan berbagai sumber daya dan informasi untuk membantu Anda meningkatkan produktivitas Anda di dunia digital. Temukan artikel, tutorial, dan tips terbaru tentang teknologi, produktivitas, dan inovasi digital.',
      contentType: 'markdown', // 公告内容类型，'markdown' | 'html'
      // contentFile: '/bulletin.md', // 公告内容文件路径
    },

    /* 站点标题 */
    plugins: {
      markdownPower: {
        imageSize: true, // 'local' | 'all' | false
        codeTabs: {
          icon: {
            named: ['python', 'javascript', 'typescript', 'java', 'csharp', 'cpp', 'go', 'rust', 'kotlin', 'php', 'ruby', 'bash', 'html', 'css', 'json', 'yaml'],
            extensions: ['py', 'js', 'ts', 'java', 'cs', 'cpp', 'go', 'rs', 'kt', 'php', 'rb', 'sh', 'html', 'css', 'json', 'yaml'],
          }
        }
      },
      photoSwipe: {
        selector: '.vp-doc :not(a) > img:not([no-view],.no-view,.ignore)', // 选择器，匹配需要启用 PhotoSwipe 的图片
        download: true, // 是否启用下载按钮
        fullscreen: true, // 是否启用全屏按钮
        scrollToClose: true, // 是否启用点击图片外部区域关闭
      },
      git: true, // 启用 Git 提交信息
      seo: {
        author: {
          name: 'Ikimukti',
          url: 'https://ikimukti.com',
          email: 'info@ikimukti.com'
        },
        autoDescription: true, // 是否自动生成描述
        canonical: (page) => {
          return `https://ikimukti.com${page.path}`; // 生成规范链接
        },
        ogp: (ogp, page, app) => ({
          ...ogp,
          title: page.frontmatter.title || 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
          description: page.frontmatter.description || 'Ikimukti.com adalah pusat pengetahuan untuk produktivitas digital. Temukan artikel, tutorial, dan tips terbaru tentang teknologi, produktivitas, dan inovasi digital.',
          image: `https://ikimukti.com${page.frontmatter.image || '/favicon-32x32.png'}`,
          type: 'website',
          url: `https://ikimukti.com${page.path}`,
        }),
        jsonLd: (jsonLd, page, app) => ({
          ...jsonLd,
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: page.frontmatter.title || 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
          description: page.frontmatter.description || 'Ikimukti.com adalah pusat pengetahuan untuk produktivitas digital. Temukan artikel, tutorial, dan tips terbaru tentang teknologi, produktivitas, dan inovasi digital.',
          url: `https://ikimukti.com${page.path}`,
          image: {
            '@type': 'ImageObject',
            url: `https://ikimukti.com${page.frontmatter.image || '/favicon-32x32.png'}`,
            width: 1200,
            height: 630,
          },
        }),
        twitterID: '@ikimukticom', // Twitter 账号
        isArticle(page) {
          return !!page.frontmatter.article; // 判断是否为文章，确保返回 boolean
        },
        // restrictions: 'US', // 受限国家/地区，或根据文档填写正确的字符串
      }, // 启用 SEO 优化
      sitemap: {
        changefreq: 'always', // 站点更新频率，'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
        devHostname: 'https://ikimukti.com', // 开发环境的站点域名
        // devServer: true, // 是否启用开发服务器
        excludePaths: ['/404.html', '/404'], // 排除的路径
        modifyTimeGetter: (page) => {
          return String(page.lastUpdated || page.frontmatter.date || new Date().toISOString()); // 获取页面的最后更新时间，确保为字符串
        },
        hostname: 'https://ikimukti.com', // 站点域名
        sitemapFilename: 'sitemap.xml', // 生成的 sitemap 文件名
        sitemapXSLFilename: 'sitemap.xsl', // 生成的 sitemap XSL 文件名
        sitemapXSLTemplate: 'https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsl', // sitemap XSL 模板
        xmlNameSpace: {
          news: false,
          video: false,
          xhtml: false,
          image: false,
        }, // XML 命名空间
      }
    },

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: true, // 启用博客功能
    blog: {
      postList: true, // 是否启用文章列表页
      tags: true, // 是否启用标签页
      archives: true, // 是否启用归档页
      categories: true, // 是否启用分类页
      postCover: {
        layout: 'left',
        ratio: '16:9',
        width: 300,
        compact: true
      },
      pagination: 15, // 每页显示文章数量
    },

    /* 博客文章页面链接前缀 */
    article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    codeHighlighter: {
      twoslash: true, // 启用 twoslash
      whitespace: true, // 启用 空格/Tab 高亮
      lineNumbers: true, // 启用行号
    },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    readingTime: {},

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    markdown: {
      abbr: true,         // 启用 abbr 语法  *[label]: content
      annotation: true,   // 启用 annotation 语法  [+label]: content
      pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      plot: true,         // 启用隐秘文本语法 !!xxxx!!
      bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      codeTree: true,     // 启用代码树语法  ::: code-tree
      field: true,       // 启用字段语法  ::: field
      timeline: true,    // 启用时间轴语法  ::: timeline
      collapse: true,    // 启用折叠语法  ::: collapse
      icon: { 
        provider: 'iconify', // 图标提供者，'iconify' | 'fontawesome' | 'custom'
       },        // 启用内置图标语法  ::icon-name::
      table: {
        align: 'left', // 表格对齐方式，'left' | 'center' | 'right'
        maxContent: false, // 是否启用表格内容最大宽度
        copy: true, // 是否启用表格复制功能
      },
      codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      demo: true,         // 启用 demo 容器  ::: demo
      repl: {             // 启用 代码演示容器
        go: true,         // ::: go-repl
        rust: true,       // ::: rust-repl
        kotlin: true,     // ::: kotlin-repl
        python: true,     // ::: python-repl
      },
      acfun: true,      // 启用嵌入 AcFun 视频 语法 @[acfun](video_id)
      math: {             // 启用数学公式
        type: 'katex',
      },
      markmap: true, // 启用 markmap 语法
      chartjs: true,      // 启用 chart.js
      echarts: true,      // 启用 ECharts
      mermaid: true,      // 启用 mermaid
      flowchart: true,    // 启用 flowchart
      plantuml: true,    // 启用 plantuml
      image: {
        figure: true,     // 启用 figure
        lazyload: true,   // 启用图片懒加载
        mark: true,       // 启用图片标记
        size: true,       // 启用图片大小
      },
      include: {},        // 在 Markdown 文件中导入其他 markdown 文件内容
      imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      chat: true, 
    },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: {
    //   enabled: page => true,
    //   fullPage: true, // 是否启用全页水印
    //   delay: 500,
    // },

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    comment: {
      provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      comment: true,
      repo: 'arbiet/ikimukti_portofolio', // Giscus 和 Twikoo 需要配置
      repoId: 'R_kgDOOvBxB', // Giscus 需要配置
      category: 'Q&A',
      categoryId: 'DIC_kwDOOvBxBM4CtvB5',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      strict: true,
      lazyLoading: true,
    },
    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
    appearance: "dark",
    copyCode: {
      duration: 300,
      ignoreSelector: ['pre', 'code'],
      inline: true,
      locales: {
        '/': {
          copy: 'Copy',
        },
        '/zh/': {
          copy: '复制',
        },
        '/de/': {
          copy: 'Kopieren',
        },
        '/ru/': {
          copy: 'Копировать',
        },
        '/fr/': {
          copy: 'Copier',
        },
        '/ja/': {
          copy: 'コピー',
        },
      },
      showInMobile: true
    },
    createTime: true, // 是否启用创建时间
    darkModeSwitchTitle: 'Switch to Dark Mode',
    transition: {
      appearance: "horizontal-clip", // 过渡效果，'fade' | 'slide' | 'horizontal-clip' | 'vertical-clip'
      page: true, // 是否启用页面过渡
      postList: true, // 是否启用文章列表过渡
    },
    returnToTopLabel: 'To Top',
  }),
})
