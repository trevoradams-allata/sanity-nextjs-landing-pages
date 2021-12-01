export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a7d7df5e1239837e193e14',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-trdrz4u9',
                  apiId: '49242b93-202b-42ab-9c5d-405b639233d5'
                },
                {
                  buildHookId: '61a7d7df5e1239866e193e56',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-stwn18pj',
                  apiId: 'd4a6fc22-dd7e-4a49-b470-1a2f96f5e1ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trevoradams-allata/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-stwn18pj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
