/**
 * Documentation for theme configuration:
 * - @see https://theme-plume.vuejs.press/config/intro/
 * - @see https://theme-plume.vuejs.press/config/theme/
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import type { SocialLink, SocialLinkIcon } from 'vuepress-theme-plume'
import type { Page } from 'vuepress'
import { visualizer } from 'rollup-plugin-visualizer'
import { cachePlugin } from '@vuepress/plugin-cache'
import { openGraphPlugin } from 'vuepress-plugin-open-graph'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import type { PwaPopupPluginOptions } from '@vuepress/plugin-pwa-popup'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

// --- Konfigurasi Terpusat untuk Multi-Bahasa ---
const localesConfig = {
  en: {
    path: '/',
    lang: 'en-US',
    description: 'Knowledge Hub for Digital Productivity',
    copyCode: 'Copy',
    search: {
      placeholder: 'Search',
      buttonText: 'Search',
      backButtonTitle: 'Back to Search',
      footer: {
        closeKeyAriaLabel: 'Close Search',
        closeText: 'Close',
        navigateDownKeyAriaLabel: 'Navigate Down',
        navigateText: 'Navigate',
        navigateUpKeyAriaLabel: 'Navigate Up',
        selectKeyAriaLabel: 'Select Result',
        selectText: 'Select',
      },
    },
    pwaPopup: {
      message: 'New content is available.',
      buttonText: 'Refresh',
    },
  },
  zh: {
    path: '/zh/',
    lang: 'zh-CN',
    description: '数字生产力知识中心',
    copyCode: '复制',
    search: {
      placeholder: '搜索',
      buttonText: '搜索',
      backButtonTitle: '返回搜索',
      footer: {
        closeKeyAriaLabel: '关闭搜索',
        closeText: '关闭',
        navigateDownKeyAriaLabel: '向下导航',
        navigateText: '导航',
        navigateUpKeyAriaLabel: '向上导航',
        selectKeyAriaLabel: '选择结果',
        selectText: '选择',
      },
    },
    pwaPopup: {
      message: '发现新内容。',
      buttonText: '刷新',
    },
  },
  de: {
    path: '/de/',
    lang: 'de-DE',
    description: 'Wissenszentrum für digitale Produktivität',
    copyCode: 'Kopieren',
    search: {
      placeholder: 'Suche',
      buttonText: 'Suche',
      backButtonTitle: 'Zurück zur Suche',
      footer: {
        closeKeyAriaLabel: 'Suche schließen',
        closeText: 'Schließen',
        navigateDownKeyAriaLabel: 'Nach unten navigieren',
        navigateText: 'Navigieren',
        navigateUpKeyAriaLabel: 'Nach oben navigieren',
        selectKeyAriaLabel: 'Ergebnis auswählen',
        selectText: 'Auswählen',
      },
    },
    pwaPopup: {
      message: 'Neuer Inhalt ist verfügbar.',
      buttonText: 'Aktualisieren',
    },
  },
  ru: {
    path: '/ru/',
    lang: 'ru-RU',
    description: 'Центр знаний для цифровой продуктивности',
    copyCode: 'Копировать',
    search: {
      placeholder: 'Поиск',
      buttonText: 'Поиск',
      backButtonTitle: 'Назад к поиску',
      footer: {
        closeKeyAriaLabel: 'Закрыть поиск',
        closeText: 'Закрыть',
        navigateDownKeyAriaLabel: 'Навигация вниз',
        navigateText: 'Навигация',
        navigateUpKeyAriaLabel: 'Навигация вверх',
        selectKeyAriaLabel: 'Выбрать результат',
        selectText: 'Выбрать',
      },
    },
    pwaPopup: {
      message: 'Доступен новый контент.',
      buttonText: 'Обновить',
    },
  },
  fr: {
    path: '/fr/',
    lang: 'fr-FR',
    description: 'Centre de connaissances pour la productivité numérique',
    copyCode: 'Copier',
    search: {
      placeholder: 'Recherche',
      buttonText: 'Recherche',
      backButtonTitle: 'Retour à la recherche',
      footer: {
        closeKeyAriaLabel: 'Fermer la recherche',
        closeText: 'Fermer',
        navigateDownKeyAriaLabel: 'Naviguer vers le bas',
        navigateText: 'Naviguer',
        navigateUpKeyAriaLabel: 'Naviguer vers le haut',
        selectKeyAriaLabel: 'Sélectionner le résultat',
        selectText: 'Sélectionner',
      },
    },
    pwaPopup: {
      message: 'Du nouveau contenu est disponible.',
      buttonText: 'Actualiser',
    },
  },
  ja: {
    path: '/ja/',
    lang: 'ja-JP',
    description: 'デジタル生産性のための知識センター',
    copyCode: 'コピー',
    search: {
      placeholder: '検索',
      buttonText: '検索',
      backButtonTitle: '検索に戻る',
      footer: {
        closeKeyAriaLabel: '検索を閉じる',
        closeText: '閉じる',
        navigateDownKeyAriaLabel: '下に移動',
        navigateText: '移動',
        navigateUpKeyAriaLabel: '上に移動',
        selectKeyAriaLabel: '結果を選択',
        selectText: '選択',
      },
    },
    pwaPopup: {
      message: '新しいコンテンツが利用可能です。',
      buttonText: '更新',
    },
  },
};

// --- Hasilkan konfigurasi dari objek terpusat ---
const generatedLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [
    cfg.path,
    {
      title: 'ikimukticom',
      lang: cfg.lang,
      description: cfg.description,
      cachePlugin: cachePlugin({}),
      location: 'Indonesia',
    }
  ])
);

const copyCodeLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [cfg.path, { copy: cfg.copyCode }])
);

const searchLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [cfg.path, cfg.search])
);

const pwaPopupLocales = Object.fromEntries(
  Object.values(localesConfig).map(cfg => [cfg.path, cfg.pwaPopup])
);

// --- Fungsi utilitas untuk pencarian agar tidak duplikat (DRY) ---
const processSearchTerm = (term: string) => term.replace(/[\u200B-\u200D\uFEFF]/g, '');
const tokenizeSearchText = (text: string) => text.split(/\s+/).filter(token => token.length > 0);

// --- Data untuk ikon code-tabs agar lebih mudah dikelola ---
const codeTabIcons = {
  python: 'py', javascript: 'js', typescript: 'ts', java: 'java',
  csharp: 'cs', cpp: 'cpp', go: 'go', rust: 'rs', kotlin: 'kt',
  php: 'php', ruby: 'rb', bash: 'sh', html: 'html', css: 'css',
  json: 'json', yaml: 'yaml',
};

// --- Data untuk link sosial media agar config utama lebih rapi ---
const socialLinks: SocialLink[] = [
    { icon: 'github' as SocialLinkIcon, link: 'https://github.com/ikimukticom' },
    { icon: 'twitter' as SocialLinkIcon, link: 'https://twitter.com/ikimukticom' },
    { icon: 'facebook' as SocialLinkIcon, link: 'https://facebook.com/ikimukticom' },
    { icon: 'instagram' as SocialLinkIcon, link: 'https://instagram.com/ikimukticom' },
    { icon: 'linkedin' as SocialLinkIcon, link: 'https://linkedin.com/company/ikimukticom' },
    { icon: 'youtube' as SocialLinkIcon, link: 'https://youtube.com/@ikimukticom' },
    { icon: 'mastodon' as SocialLinkIcon, link: 'https://mastodon.social/@ikimukticom' },
    { icon: 'bilibili' as SocialLinkIcon, link: 'https://space.bilibili.com/ikimukticom' },
    { icon: 'discord' as SocialLinkIcon, link: 'https://discord.gg/ikimukticom' },
    { icon: 'slack' as SocialLinkIcon, link: 'https://slack.com/ikimukticom' },
    { icon: 'weibo' as SocialLinkIcon, link: 'https://weibo.com/ikimukticom' },
    { icon: 'qq' as SocialLinkIcon, link: 'https://qq.com/ikimukticom' },
    { icon: 'douban' as SocialLinkIcon, link: 'https://douban.com/ikimukticom' },
    { icon: 'zhihu' as SocialLinkIcon, link: 'https://zhihu.com/ikimukticom' },
    { icon: 'gitlab' as SocialLinkIcon, link: 'https://gitlab.com/ikimukticom' },
    { icon: 'docker' as SocialLinkIcon, link: 'https://hub.docker.com/u/ikimukticom' },
    { icon: 'juejin' as SocialLinkIcon, link: 'https://juejin.cn/user/ikimukticom' },
    { icon: 'stackoverflow' as SocialLinkIcon, link: 'https://stackoverflow.com/users/ikimukticom' },
    { icon: 'steam' as SocialLinkIcon, link: 'https://steamcommunity.com/id/ikimukticom' },
    { icon: 'xbox' as SocialLinkIcon, link: 'https://xbox.com/profile/ikimukticom' },
];

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  locales: generatedLocales,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/image/favicon-48x48.png' }],
    ['meta', { name: 'algolia-site-verification', content: '37BAF5981A83D338' }],
    ['meta', { name: 'msvalidate.01', content: '4077B11CAE89D53B7DAE1D82710447B0' }],
    ['meta', { name: 'yandex-verification', content: 'b7d4fe28c3d29dd2' }],
    ['meta', { name: 'naver-site-verification', content: '70ef6d5bfc1bba6db665b2fdba6ab2afd49f993f' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,
  theme: plumeTheme({
    hostname: 'https://ikimukti.com',
    docsRepo: 'https://github.com/arbiet/ikimukti_portofolio',
    logo: '/image/favicon-48x48.png',
    logoDark: '/image/favicon-48x48.png',
    docsDir: 'docs',
    editLink: true,
    contributors: {
      mode: 'inline',
      info: [{ username: 'ikimukticom', alias: ['Ikimukti.com'] }]
    },
    changelog: true,
    profile: {
      name: 'ikimukticom',
      avatar: 'https://avatars.githubusercontent.com/u/148637550?s=400&u=d6caef1d3fd72971c8f1a3b2e31c048afbdfcb44&v=4',
      description: 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
      location: 'Indonesia',
      organization: 'Ikimukti',
      circle: true,
      layout: 'right',
    },
    social: socialLinks,
    copyright: {
      license: { name: 'CC BY-NC-SA 4.0', url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/' },
      author: { name: 'Ikimukti', url: 'https://ikimukti.com' },
      creation: 'reprint',
    },
    bulletin: {
      layout: 'top-left',
      border: true,
      enablePage: true,
      lifetime: 'always',
      id: 'bulletin',
      title: 'Ikimukti.com - Pusat Pengetahuan untuk Produktivitas Digital',
      content: 'Selamat datang di ikimukti.com, pusat pengetahuan untuk produktivitas digital. Kami menyediakan berbagai sumber daya dan informasi untuk membantu Anda meningkatkan produktivitas Anda di dunia digital. Temukan artikel, tutorial, dan tips terbaru tentang teknologi, produktivitas, dan inovasi digital.',
      contentType: 'markdown',
    },
    plugins: {
      markdownPower: {
        imageSize: 'all',
        codeTabs: {
          icon: {
            named: Object.keys(codeTabIcons),
            extensions: Object.values(codeTabIcons),
          }
        }
      },
      photoSwipe: {
        selector: '.vp-doc :not(a) > img:not([no-view],.no-view,.ignore)',
        download: true,
        fullscreen: true,
        scrollToClose: true,
      },
      git: true,
      seo: {
        author: { name: 'Ikimukti', url: 'https://ikimukti.com', email: 'info@ikimukti.com' },
        autoDescription: true,
        canonical: page => `https://ikimukti.com${page.path}`,
        ogp: (ogp, page) => ({
          ...ogp,
          title: page.frontmatter.title || 'Ikimukti.com - Knowledge Center for Digital Productivity',
          description: page.frontmatter.description || 'Ikimukti.com is a knowledge center for digital productivity, providing resources and information to help you enhance your productivity in the digital world.',
          image: `https://ikimukti.com${page.frontmatter.cover || '/favicon-48x48.png'}`,
          type: 'website',
          url: `https://ikimukti.com${page.path}`,
          site_name: 'Ikimukti.com',
          // fbAppId: '1234567890',
          locale: page.frontmatter.lang || 'en-US',
          locale_alternate: Object.keys(generatedLocales).map(locale => ({
            lang: generatedLocales[locale].lang,
            url: `https://ikimukti.com${locale === '/' ? '' : locale}`,
          })),
          rich_attachment: page.frontmatter.richAttachments || [],
          updated_time: page.frontmatter.updateTime || new Date().toISOString(),
          twitter: {
            creator: '@ikimukticom',
            image: {
              alt: page.frontmatter.title || 'Ikimukti.com - Knowledge Center for Digital Productivity',
            },
            site: 'https://ikimukti.com',
            card: 'summary_large_image',
          },
          article: {
            author: page.frontmatter.author || 'Ikimukti',
            expiration_time: page.frontmatter.expirationTime || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            modified_time: page.frontmatter.updateTime || new Date().toISOString(),
            published_time: page.frontmatter.createTime || new Date().toISOString(),
            section: page.frontmatter.category || 'General',
            tags: page.frontmatter.tags || [],
          },
          audio: page.frontmatter.audio || [],
          video: page.frontmatter.video || [],
          determiner: page.frontmatter.determiner || 'auto',
          keywords: page.frontmatter.keywords || [],
          robots: page.frontmatter.robots || 'index, follow',
        }),
      },
      sitemap: {
        changefreq: 'always',
        hostname: 'https://ikimukti.com',
      }
    },
    blog: {
      postList: true,
      tags: true,
      archives: true,
      categories: true,
      postCover: { layout: 'left', ratio: '16:9', width: 300, compact: true },
      pagination: 15,
      archivesLink: '/archives/',
      categoriesLink: '/categories/',
      tagsLink: '/tags/',
      categoriesExpand: "deep",
      tagsTheme: 'colored',
      categoriesTransform(categories) {
        return categories.map(category => ({
          ...category,
          name: category.name.replace(/-/g, ' '),
        }));
      },
    },
    article: '/article/',
    cache: 'filesystem',
    autoFrontmatter: {
      permalink: true,
      createTime: true,
      title: true,
    },
    // [PERBAIKAN DI SINI]
    search: {
      provider: 'local',
      disableQueryPersistence: true,
      isSearchable: (page: Page) => page.frontmatter.searchable !== false && page.path !== '/404.html',
      locales: searchLocales,
      miniSearch: {
        options: {
          extractField: (doc: any, fieldName: string) => {
            if (fieldName === 'content' && doc.content) {
              return doc.content.replace(/<[^>]+>/g, '');
            }
            return doc[fieldName] || '';
          },
          processTerm: processSearchTerm,
          tokenize: tokenizeSearchText,
        },
        searchOptions: {
          weights: { fuzzy: 0.1, prefix: 0.2 },
          tokenize: tokenizeSearchText,
          processTerm: processSearchTerm,
          prefix: true,
          fuzzy: (term) => term.length <= 3,
          filter: result => result.score > 0.1,
          combineWith: 'OR',
          boostTerm: (term, i, terms) => 1 + (terms.length - i) * 0.1,
          boostDocument: (docId, term, storedFields) => (typeof storedFields?.content === 'string' && storedFields.content.includes(term) ? 1.5 : 1.0),
        }
      }
    },
    codeHighlighter: {
      twoslash: true,
      whitespace: true,
      lineNumbers: true,
    },
    readingTime: {},
    markdown: {
      pdf: true, plot: true, bilibili: true, youtube: true,
      icon: { provider: 'iconify' },
      table: { copy: true },
      repl: { python: true },
      math: { type: 'katex' },
      mermaid: true,
      image: { lazyload: true },
    },
    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'arbiet/ikimukti_portofolio',
      repoId: 'R_kgDOOvBxB',
      category: 'Q&A',
      categoryId: 'DIC_kwDOOvBxBM4CtvB5',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      strict: true,
      lazyLoading: true,
      delay: 500,
    },
    appearance: "dark",
    copyCode: {
      duration: 300,
      showInMobile: true,
      locales: copyCodeLocales,
    },
    createTime: true,
    darkModeSwitchTitle: 'Switch to Dark Mode',
    transition: {
      appearance: "horizontal-clip",
      page: true,
      postList: true,
    },
    returnToTopLabel: 'To Top',
  }),
  plugins: [
    visualizer({
      filename: 'stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'sunburst',
      sourcemap: true,
      emitFile: true,
    }),
    openGraphPlugin({
      host: 'https://ikimukti.com',
    }),
    pwaPlugin(),
    // Memanggil pwaPopupPlugin dengan type assertion
    (pwaPopupPlugin as (options: PwaPopupPluginOptions) => any)({}),
    webpackBundler({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'bundle-report.html',
          openAnalyzer: false,
        }),
      ],
    }),
  ],
});