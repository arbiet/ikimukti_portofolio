/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/'},
  { text: 'Blog', link: '/blog/' },
  { text: 'News', link: '/news/' },
  { text: 'Tutorial', link: '/tutorial/' },
  {
    text: 'Main Topics',
    items: [
      { text: 'Artificial Intelligence', link: '/topics/artificial-intelligence/' },
      { text: 'Cryptography and Blockchain', link: '/topics/cryptography-and-blockchain/' },
      { text: 'Software Development', link: '/topics/software-development/' },
      { text: 'Infrastructure Digital (Server and Network)', link: '/topics/infrastructure-digital-server-and-network/' },
      { text: 'Data Science', link: '/topics/data-science/' },
      { text: 'Security', link: '/topics/security/' }
    ]
  },
  {
    text: 'Learning Paths',
    items: [
      { text: 'AI for Everyone', link: '/learning-paths/ai-for-everyone/' },
      { text: 'Blockchain Basics', link: '/learning-paths/blockchain-basics/' },
      { text: 'Software Development', link: '/learning-paths/software-development/' },
      { text: 'Data Science Fundamentals', link: '/learning-paths/data-science-fundamentals/' },
      { text: 'Cybersecurity Essentials', link: '/learning-paths/cybersecurity-essentials/' }
    ]
  },
  { text: 'Glosarium', link: '/glossary/' },
])

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/zh/' },
  { text: '博客', link: '/zh/blog/' },
  { text: '新闻', link: '/zh/news/' },
  { text: '教程', link: '/zh/tutorial/' },
  {
    text: '主要主题',
    items: [
      { text: '人工智能', link: '/zh/topics/artificial-intelligence/' },
      { text: '密码学与区块链', link: '/zh/topics/cryptography-and-blockchain/' },
      { text: '软件开发', link: '/zh/topics/software-development/' },
      { text: '基础设施数字化（服务器和网络）', link: '/zh/topics/infrastructure-digital-server-and-network/' },
      { text: '数据科学', link: '/zh/topics/data-science/' },
      { text: '安全', link: '/zh/topics/security/' }
    ]
  },
  {
    text: '学习路径',
    items: [
      { text: '人人都能学的人工智能', link: '/zh/learning-paths/ai-for-everyone/' },
      { text: '区块链基础', link: '/zh/learning-paths/blockchain-basics/' },
      { text: '软件开发', link: '/zh/learning-paths/software-development/' },
      { text: '数据科学基础', link: '/zh/learning-paths/data-science-fundamentals/' },
      { text: '网络安全基础', link: '/zh/learning-paths/cybersecurity-essentials/' }
    ]
  },
  { text: '术语表', link: '/zh/glossary/' },
])

export const idNavbar = defineNavbarConfig([
  { text: 'Beranda', link: '/id/' },
  { text: 'Blog', link: '/id/blog/' },
  { text: 'Berita', link: '/id/news/' },
  { text: 'Tutorial', link: '/id/tutorial/' },
  {
    text: 'Topik Utama',
    items: [
      { text: 'Kecerdasan Buatan', link: '/id/topics/artificial-intelligence/' },
      { text: 'Kriptografi dan Blockchain', link: '/id/topics/cryptography-and-blockchain/' },
      { text: 'Pengembangan Perangkat Lunak', link: '/id/topics/software-development/' },
      { text: 'Infrastruktur Digital (Server dan Jaringan)', link: '/id/topics/infrastructure-digital-server-and-network/' },
      { text: 'Ilmu Data', link: '/id/topics/data-science/' },
      { text: 'Keamanan', link: '/id/topics/security/' }
    ]
  },
  {
    text: 'Jalur Pembelajaran',
    items: [
      { text: 'AI untuk Semua', link: '/id/learning-paths/ai-for-everyone/' },
      { text: 'Dasar-dasar Blockchain', link: '/id/learning-paths/blockchain-basics/' },
      { text: 'Pengembangan Perangkat Lunak', link: '/id/learning-paths/software-development/' },
      { text: 'Dasar-dasar Ilmu Data', link: '/id/learning-paths/data-science-fundamentals/' },
      { text: 'Dasar-dasar Keamanan Siber', link: '/id/learning-paths/cybersecurity-essentials/' }
    ]
  },
  { text: 'Glosarium', link: '/id/glossary/' },
])

export const deNavbar = defineNavbarConfig([
  { text: 'Startseite', link: '/de/' },
  { text: 'Blog', link: '/de/blog/' },
  { text: 'Nachrichten', link: '/de/news/' },
  { text: 'Tutorials', link: '/de/tutorial/' },
  {
    text: 'Hauptthemen',
    items: [
      { text: 'Künstliche Intelligenz', link: '/de/topics/artificial-intelligence/' },
      { text: 'Kryptographie und Blockchain', link: '/de/topics/cryptography-and-blockchain/' },
      { text: 'Softwareentwicklung', link: '/de/topics/software-development/' },
      { text: 'Digitale Infrastruktur (Server und Netzwerk)', link: '/de/topics/infrastructure-digital-server-and-network/' },
      { text: 'Datenwissenschaft', link: '/de/topics/data-science/' },
      { text: 'Sicherheit', link: '/de/topics/security/' }
    ]
  },
  {
    text: 'Lernpfade',
    items: [
      { text: 'KI für alle', link: '/de/learning-paths/ai-for-everyone/' },
      { text: 'Blockchain-Grundlagen', link: '/de/learning-paths/blockchain-basics/' },
      { text: 'Softwareentwicklung', link: '/de/learning-paths/software-development/' },
      { text: 'Grundlagen der Datenwissenschaft', link: '/de/learning-paths/data-science-fundamentals/' },
      { text: 'Grundlagen der Cybersicherheit', link: '/de/learning-paths/cybersecurity-essentials/' }
    ]
  },
  { text: 'Glossar', link: '/de/glossary/' },
])

export const ruNavbar = defineNavbarConfig([
  { text: 'Главная', link: '/ru/' },
  { text: 'Блог', link: '/ru/blog/' },
  { text: 'Новости', link: '/ru/news/' },
  { text: 'Учебники', link: '/ru/tutorial/' },
  {
    text: 'Основные темы',
    items: [
      { text: 'Искусственный интеллект', link: '/ru/topics/artificial-intelligence/' },
      { text: 'Криптография и блокчейн', link: '/ru/topics/cryptography-and-blockchain/' },
      { text: 'Разработка программного обеспечения', link: '/ru/topics/software-development/' },
      { text: 'Цифровая инфраструктура (Серверы и сети)', link: '/ru/topics/infrastructure-digital-server-and-network/' },
      { text: 'Наука о данных', link: '/ru/topics/data-science/' },
      { text: 'Безопасность', link: '/ru/topics/security/' }
    ]
  },
  {
    text: 'Учебные пути',
    items: [
      { text: 'ИИ для всех', link: '/ru/learning-paths/ai-for-everyone/' },
      { text: 'Основы блокчейна', link: '/ru/learning-paths/blockchain-basics/' },
      { text: 'Разработка программного обеспечения', link: '/ru/learning-paths/software-development/' },
      { text: 'Основы науки о данных', link: '/ru/learning-paths/data-science-fundamentals/' },
      { text: 'Основы кибербезопасности', link: '/ru/learning-paths/cybersecurity-essentials/' }
    ]
  },
  { text: 'Глоссарий', link: '/ru/glossary/' },
])

export const frNavbar = defineNavbarConfig([
  { text: 'Page d\'accueil', link: '/fr/' },
  { text: 'Blog', link: '/fr/blog/' },
  { text: 'Actualités', link: '/fr/news/' },
  { text: 'Tutoriels', link: '/fr/tutorial/' },
  {
    text: 'Sujets principaux',
    items: [
      { text: 'Intelligence Artificielle', link: '/fr/topics/artificial-intelligence/' },
      { text: 'Cryptographie et Blockchain', link: '/fr/topics/cryptography-and-blockchain/' },
      { text: 'Développement de Logiciels', link: '/fr/topics/software-development/' },
      { text: 'Infrastructure Numérique (Serveurs et Réseaux)', link: '/fr/topics/infrastructure-digital-server-and-network/' },
      { text: 'Science des Données', link: '/fr/topics/data-science/' },
      { text: 'Sécurité', link: '/fr/topics/security/' }
    ]
  },
  {
    text: 'Parcours d\'apprentissage',
    items: [
      { text: 'IA pour Tous', link: '/fr/learning-paths/ai-for-everyone/' },
      { text: 'Bases de la Blockchain', link: '/fr/learning-paths/blockchain-basics/' },
      { text: 'Développement de Logiciels', link: '/fr/learning-paths/software-development/' },
      { text: 'Fondamentaux de la Science des Données', link: '/fr/learning-paths/data-science-fundamentals/' },
      { text: 'Fondamentaux de la Cybersécurité', link: '/fr/learning-paths/cybersecurity-essentials/' }
    ]
  },
  { text: 'Glossaire', link: '/fr/glossary/' },
])

export const jaNavbar = defineNavbarConfig([
  { text: 'ホーム', link: '/ja/' },
  { text: 'ブログ', link: '/ja/blog/' },
  { text: 'ニュース', link: '/ja/news/' },
  { text: 'チュートリアル', link: '/ja/tutorial/' },
  {
    text: '主要トピック',
    items: [
      { text: '人工知能', link: '/ja/topics/artificial-intelligence/' },
      { text: '暗号化とブロックチェーン', link: '/ja/topics/cryptography-and-blockchain/' },
      { text: 'ソフトウェア開発', link: '/ja/topics/software-development/' },
      { text: 'デジタルインフラストラクチャ（サーバーとネットワーク）', link: '/ja/topics/infrastructure-digital-server-and-network/' },
      { text: 'データサイエンス', link: '/ja/topics/data-science/' },
      { text: 'セキュリティ', link: '/ja/topics/security/' }
    ]
  },
  {
    text: '学習パス',
    items: [
      { text: 'すべての人のためのAI', link: '/ja/learning-paths/ai-for-everyone/' },
      { text: 'ブロックチェーンの基礎', link: '/ja/learning-paths/blockchain-basics/' },
      { text: 'ソフトウェア開発', link: '/ja/learning-paths/software-development/' },
      { text: 'データサイエンスの基礎', link: '/ja/learning-paths/data-science-fundamentals/' },
      { text: 'サイバーセキュリティの基礎', link: '/ja/learning-paths/cybersecurity-essentials/' }
    ]
  },
  { text: '用語集', link: '/ja/glossary/' },
])
