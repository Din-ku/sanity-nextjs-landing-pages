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
                  buildHookId: '617223168acb965dbb52a171',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fx28gri1',
                  apiId: '9c28e225-281e-4c26-9f64-5e09955d6398'
                },
                {
                  buildHookId: '61722316e6fa8f67edee7b37',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z3awyqv4',
                  apiId: '8608f5a4-d6b1-41a8-b2f9-ad403ea78baa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Din-ku/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z3awyqv4.netlify.app', category: 'apps'}
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
