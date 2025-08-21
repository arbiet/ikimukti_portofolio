/**
 * @see https://theme-plume.vuejs.press/config/navigation/ for more details.
 *
 * Navbar configuration file, imported in `.vuepress/plume.config.ts`.
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

// Object to hold all translations
const translations = {
  en: {
    home: 'Home',
    blog: 'Blog',
    news: 'News',
    tutorial: 'Tutorial',
    mainTopics: 'Main Topics',
    ai: 'Artificial Intelligence',
    crypto: 'Cryptography and Blockchain',
    dev: 'Software Development',
    infra: 'Infrastructure Digital (Server and Network)',
    data: 'Data Science',
    security: 'Security',
    learningPaths: 'Learning Paths',
    aiEveryone: 'AI for Everyone',
    blockchainBasics: 'Blockchain Basics',
    dataFundamentals: 'Data Science Fundamentals',
    cyberEssentials: 'Cybersecurity Essentials',
    glossary: 'Glosarium',
  },
  zh: {
    home: '首页',
    blog: '博客',
    news: '新闻',
    tutorial: '教程',
    mainTopics: '主要主题',
    ai: '人工智能',
    crypto: '密码学与区块链',
    dev: '软件开发',
    infra: '基础设施数字化（服务器和网络）',
    data: '数据科学',
    security: '安全',
    learningPaths: '学习路径',
    aiEveryone: '人人都能学的人工智能',
    blockchainBasics: '区块链基础',
    dataFundamentals: '数据科学基础',
    cyberEssentials: '网络安全基础',
    glossary: '术语表',
  },
  id: {
    home: 'Beranda',
    blog: 'Blog',
    news: 'Berita',
    tutorial: 'Tutorial',
    mainTopics: 'Topik Utama',
    ai: 'Kecerdasan Buatan',
    crypto: 'Kriptografi dan Blockchain',
    dev: 'Pengembangan Perangkat Lunak',
    infra: 'Infrastruktur Digital (Server dan Jaringan)',
    data: 'Ilmu Data',
    security: 'Keamanan',
    learningPaths: 'Jalur Pembelajaran',
    aiEveryone: 'AI untuk Semua',
    blockchainBasics: 'Dasar-dasar Blockchain',
    dataFundamentals: 'Dasar-dasar Ilmu Data',
    cyberEssentials: 'Dasar-dasar Keamanan Siber',
    glossary: 'Glosarium',
  },
  de: {
    home: 'Startseite',
    blog: 'Blog',
    news: 'Nachrichten',
    tutorial: 'Tutorials',
    mainTopics: 'Hauptthemen',
    ai: 'Künstliche Intelligenz',
    crypto: 'Kryptographie und Blockchain',
    dev: 'Softwareentwicklung',
    infra: 'Digitale Infrastruktur (Server und Netzwerk)',
    data: 'Datenwissenschaft',
    security: 'Sicherheit',
    learningPaths: 'Lernpfade',
    aiEveryone: 'KI für alle',
    blockchainBasics: 'Blockchain-Grundlagen',
    dataFundamentals: 'Grundlagen der Datenwissenschaft',
    cyberEssentials: 'Grundlagen der Cybersicherheit',
    glossary: 'Glossar',
  },
  ru: {
    home: 'Главная',
    blog: 'Блог',
    news: 'Новости',
    tutorial: 'Учебники',
    mainTopics: 'Основные темы',
    ai: 'Искусственный интеллект',
    crypto: 'Криптография и блокчейн',
    dev: 'Разработка программного обеспечения',
    infra: 'Цифровая инфраструктура (Серверы и сети)',
    data: 'Наука о данных',
    security: 'Безопасность',
    learningPaths: 'Учебные пути',
    aiEveryone: 'ИИ для всех',
    blockchainBasics: 'Основы блокчейна',
    dataFundamentals: 'Основы науки о данных',
    cyberEssentials: 'Основы кибербезопасности',
    glossary: 'Глоссарий',
  },
  fr: {
    home: 'Page d\'accueil',
    blog: 'Blog',
    news: 'Actualités',
    tutorial: 'Tutoriels',
    mainTopics: 'Sujets principaux',
    ai: 'Intelligence Artificielle',
    crypto: 'Cryptographie et Blockchain',
    dev: 'Développement de Logiciels',
    infra: 'Infrastructure Numérique (Serveurs et Réseaux)',
    data: 'Science des Données',
    security: 'Sécurité',
    learningPaths: 'Parcours d\'apprentissage',
    aiEveryone: 'IA pour Tous',
    blockchainBasics: 'Bases de la Blockchain',
    dataFundamentals: 'Fondamentaux de la Science des Données',
    cyberEssentials: 'Fondamentaux de la Cybersécurité',
    glossary: 'Glossaire',
  },
  ja: {
    home: 'ホーム',
    blog: 'ブログ',
    news: 'ニュース',
    tutorial: 'チュートリアル',
    mainTopics: '主要トピック',
    ai: '人工知能',
    crypto: '暗号化とブロックチェーン',
    dev: 'ソフトウェア開発',
    infra: 'デジタルインフラストラクチャ（サーバーとネットワーク）',
    data: 'データサイエンス',
    security: 'セキュリティ',
    learningPaths: '学習パス',
    aiEveryone: 'すべての人のためのAI',
    blockchainBasics: 'ブロックチェーンの基礎',
    dataFundamentals: 'データサイエンスの基礎',
    cyberEssentials: 'サイバーセキュリティの基礎',
    glossary: '用語集',
  },
};

// Function to generate navbar config for a specific language
const createNavbar = (lang: keyof typeof translations) => {
  const t = translations[lang];
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return [
    { text: t.home, link: `${prefix}/` },
    { text: t.blog, link: `${prefix}/blog/` },
    { text: t.news, link: `${prefix}/tags/?tag=News` },
    { text: t.tutorial, link: `${prefix}/tags/?tag=Tutorials` },
    {
      text: t.mainTopics,
      items: [
        { text: t.ai, link: `${prefix}/topics/artificial-intelligence/` },
        { text: t.crypto, link: `${prefix}/topics/cryptography-and-blockchain/` },
        { text: t.dev, link: `${prefix}/topics/software-development/` },
        { text: t.infra, link: `${prefix}/topics/infrastructure-digital-server-and-network/` },
        { text: t.data, link: `${prefix}/topics/data-science/` },
        { text: t.security, link: `${prefix}/topics/security/` },
      ],
    },
    {
      text: t.learningPaths,
      items: [
        { text: t.aiEveryone, link: `${prefix}/learning-paths/ai-for-everyone/` },
        { text: t.blockchainBasics, link: `${prefix}/learning-paths/blockchain-basics/` },
        { text: t.dev, link: `${prefix}/learning-paths/software-development/` },
        { text: t.dataFundamentals, link: `${prefix}/learning-paths/data-science-fundamentals/` },
        { text: t.cyberEssentials, link: `${prefix}/learning-paths/cybersecurity-essentials/` },
      ],
    },
    { text: t.glossary, link: `${prefix}/glossary/` },
  ];
};

// Exporting each language's navbar configuration
export const enNavbar = defineNavbarConfig(createNavbar('en'));
export const zhNavbar = defineNavbarConfig(createNavbar('zh'));
export const idNavbar = defineNavbarConfig(createNavbar('id'));
export const deNavbar = defineNavbarConfig(createNavbar('de'));
export const ruNavbar = defineNavbarConfig(createNavbar('ru'));
export const frNavbar = defineNavbarConfig(createNavbar('fr'));
export const jaNavbar = defineNavbarConfig(createNavbar('ja'));