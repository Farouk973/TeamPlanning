export const environment = {
  production: true,
  baseUrl: 'https://localhost:44312',
  authConfig: {
    domain: 'dev-jt2h2d8bnouk3jlk.us.auth0.com',
    authority: 'https://dev-jt2h2d8bnouk3jlk.us.auth0.com',
    clientId: '2NIVgvIcJ55BeqgjPsv4TDOXeIDVrTLF',
    scope: 'openid profile offline_access',
    audience: 'https://dev-jt2h2d8bnouk3jlk.us.auth0.com/api/v2/',
    secureRoutes: ['https://localhost:44312/api/']
  }
};
