export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  },
  {
    path: 'permession',
    loadChildren: () => import('./access-managment/access-managment.module').then(m => m.AccessManagmentModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  },

 

  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then(m => m.DashboardModule),
  //   data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  // },
  // {
  //   path: 'accounts',
  //   loadChildren: () => import('./accounts/account.module').then(m => m.AccountModule),
  //   data: { icon: '/assets/icons/users.png', text: 'Utilisateurs', show: false, name: 'users-management' }
  // },
  // {
  //   path: 'projects',
  //   loadChildren: () => import('./projects/project.module').then(m => m.ProjectModule),
  //   data: { icon: '/assets/icons/projects.png', text: 'Projets', show: false, name: 'projects-management' }
  // },
  // {
  //   path: 'access-management',
  //   loadChildren: () => import('./access-management/access-management.module').then(m => m.AccessManagementModule),
  //   data: { icon: '/assets/icons/access_management.png', text: 'Gestion des accès', show: false, name: 'access-management' }
  // },
];
