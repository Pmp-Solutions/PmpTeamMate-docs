module.exports = {
    title: 'Pmp Solutions',
    base: '/PMPTEAMMATE-DOCS/',
    plugins: [
      '@vuepress/active-header-links',
      // workaround SSR mismatch
      'dehydrate', {
        sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
      }
    ],
    themeConfig: {
      lastUpdated: 'Last Updated',
      /* sidebar: [
        '/',
        '/page-1',
        '/page-2'
      ] */
    }
  }