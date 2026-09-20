import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/twants/docs',
    component: ComponentCreator('/twants/docs', '293'),
    routes: [
      {
        path: '/twants/docs',
        component: ComponentCreator('/twants/docs', '8d8'),
        routes: [
          {
            path: '/twants/docs',
            component: ComponentCreator('/twants/docs', 'a29'),
            routes: [
              {
                path: '/twants/docs/changelog',
                component: ComponentCreator('/twants/docs/changelog', 'f2d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/components/button',
                component: ComponentCreator('/twants/docs/components/button', 'ac3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/contributing',
                component: ComponentCreator('/twants/docs/contributing', '0d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/design/accessibility',
                component: ComponentCreator('/twants/docs/design/accessibility', '2e2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/design/themes',
                component: ComponentCreator('/twants/docs/design/themes', '621'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/design/tokens',
                component: ComponentCreator('/twants/docs/design/tokens', 'ad6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/getting-started/installation',
                component: ComponentCreator('/twants/docs/getting-started/installation', '44b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/getting-started/quick-start',
                component: ComponentCreator('/twants/docs/getting-started/quick-start', '1cf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/integrations/django',
                component: ComponentCreator('/twants/docs/integrations/django', '94b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/integrations/laravel',
                component: ComponentCreator('/twants/docs/integrations/laravel', '89c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/integrations/tauri',
                component: ComponentCreator('/twants/docs/integrations/tauri', 'a27'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/integrations/vanilla',
                component: ComponentCreator('/twants/docs/integrations/vanilla', 'a40'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/integrations/wails',
                component: ComponentCreator('/twants/docs/integrations/wails', 'f3c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/intro',
                component: ComponentCreator('/twants/docs/intro', 'e99'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/twants/docs/license',
                component: ComponentCreator('/twants/docs/license', '6c2'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/twants/',
    component: ComponentCreator('/twants/', 'f0c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
