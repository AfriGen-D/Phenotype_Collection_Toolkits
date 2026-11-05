import { defineConfig } from 'vitepress'

const toolkitItems = [
  { text: 'Overview', link: '/toolkits/' },
  { text: '00 · Core Phenotype', link: '/toolkits/core' },
  { text: '01 · General Medical History', link: '/toolkits/general-medical-history' },
  { text: '02 · Cancer', link: '/toolkits/cancer' },
  { text: '03 · Stroke', link: '/toolkits/stroke' },
  { text: '04 · Infectious Diseases', link: '/toolkits/infectious-diseases' },
  { text: '05 · Cardiovascular Diseases', link: '/toolkits/cardiovascular-diseases' },
  { text: '06 · Rare & Developmental Disorders', link: '/toolkits/rare-developmental-disorders' },
  { text: '07 · Environmental Exposures', link: '/toolkits/environmental-exposures' },
  { text: '08 · Lifestyle Factors', link: '/toolkits/lifestyle-factors' },
  { text: '09 · Family History', link: '/toolkits/family-history' },
  { text: '10 · Kidney Disease', link: '/toolkits/kidney-disease' },
  { text: 'Microbiome', link: '/toolkits/microbiome' },
  { text: 'COVID-19 (archived)', link: '/toolkits/covid-19' }
]

export default defineConfig({
  title: 'Phenotype Collection Toolkits',
  description: 'Standardised phenotype data collection toolkits for genomic and health research in Africa.',
  base: '/Phenotype_Collection_Toolkits/',
  lang: 'en-GB',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/Phenotype_Collection_Toolkits/logo.png' }],
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-EHPFKMBX0J' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EHPFKMBX0J');`]
  ],

  themeConfig: {
    logo: { src: '/logo.png', alt: 'AfriGen-D' },
    siteTitle: 'Phenotype Toolkits',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Toolkits', items: toolkitItems },
      { text: 'REDCap Guide', link: '/guide/redcap-setup' },
      { text: 'Cite Us', link: '/cite' },
      { text: 'Support', link: '/support' },
      { text: 'AfriGen-D', link: 'https://afrigen-d.org/data-resources' }
    ],

    sidebar: {
      '/toolkits/': [{ text: 'Toolkits', items: toolkitItems }]
    },

    outline: { level: [2, 3], label: 'On this page' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AfriGen-D/Phenotype_Collection_Toolkits' }
    ],

    editLink: {
      pattern: 'https://github.com/AfriGen-D/Phenotype_Collection_Toolkits/edit/main/docs/:path',
      text: 'Suggest a change to this page'
    },

    footer: {
      message: 'Released under the MIT License. Funded by NIH grants U24HG006941 (H3ABioNet) and U24HG012750 (AfriGen-D).',
      copyright: `Copyright © ${new Date().getFullYear()} AfriGen-D – African Genomics Data Hub`
    },

    search: { provider: 'local' }
  }
})
