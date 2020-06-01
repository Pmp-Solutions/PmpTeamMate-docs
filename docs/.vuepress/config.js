module.exports = {
    title: 'Pmp Solutions',
    base: '/PmpTeamMate-docs/',
    plugins: [
      '@vuepress/active-header-links',
    ],
    themeConfig: {
      lastUpdated: 'Last Updated',
      sidebar: [
          {
            title: 'Démarrage et installation',
            path: '/installation/',
            collapsable: false,
            children: [
              ['/installation/install/', 'Installer PMP TeamMate'],
              ['/installation/users/', 'Gestion des utilisateurs à PMP TeamMate?'],       
              ['/installation/dashboards/', 'Installer les tableaux de bord sur des téléviseurs']
           ]
          },
          {
            title: 'Apprentissage et utilisation',
            path: '/apprentissage/',
            collapsable: false,
            children: [
              ['/apprentissage/gettingStarted/', 'Bien démarrer avec PMP Solutions'],
              ['/apprentissage/pmpteammate/', 'PMP TeamMate – Prise en main rapide'],
           ]
          },
      ]
    }
  }