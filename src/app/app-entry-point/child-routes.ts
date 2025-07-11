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
  {
    path: 'engagment',
    loadChildren: () => import('./engagement-managment/engagement-managment.module').then(m => m.EngagementManagmentModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Engagment', show: true }
  },
  {
    path: 'stepper',
    loadChildren: () => import('./project-managment/project-managment.module').then(m => m.ProjectManagmentModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  },

  {
    path: 'skills',
    loadChildren: () => import('./skills-managment/skills-managment.module').then(m => m.SkillsManagmentModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  },

  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue-services/catalogue-services/catalogue-services.module').then(m => m.CatalogueServicesModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },
  {
    path: 'workflow',
    loadChildren: () => import('./workFlow-Management/work-flow/work-flow.module').then(m => m.WorkFlowModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'WorkFlow', show: true }
  },
  {
    path: 'feature',
    loadChildren: () => import('./project-managment/feature-managment/feature-managment.module').then(m => m.FeatureManagmentModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },
  {
    path: 'roles',
    loadChildren: () => import('./project-managment/roles-management/roles-management.module').then(m => m.RolesManagementModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },
  {
    path: 'costing',
    loadChildren: () => import('./project-managment/spreadsheets-management/spreadsheets-management.module').then(m => m.SpreadsheetsManagementModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },


  {
    path: 'usertab',
    loadChildren: () => import('./user-tab-management/user-tab-management.module').then(m => m.UserTabManagementModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Dashboard', show: true }
  },

  {
    path: 'projects',
    loadChildren: () => import('./project-managment/list-projects-management/list-projects-management.module').then(m => m.ListProjectsManagementModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },
  {
    path: 'task',
    loadChildren: () => import('./task-managment/task-managment.module').then(m => m.TaskManagmentModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },
  {
    path: 'request',
    loadChildren: () => import('./request-managment/request-managment.module').then(m => m.RequestManagmentModule),
  },

  {
    path: 'notification',
    loadChildren: () => import('./notification-management/notification-management.module').then(m => m.NotificationManagementModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },
  {
    path: 'schedule',
    loadChildren: () => import('./scheduling-management/scheduling-management.module').then(m => m.SchedulingManagementModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
  },
  {
    path: 'conflict',
    loadChildren: () => import('./conflict-management/conflict-management.module').then(m => m.ConflictManagementModule),
    data: { icon: '/assets/icons/dashboard.png', text: 'Catalogue', show: true }
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
