import secretEnv from './secret.environment';

export const environment = {
  production: true,
  apiUrl: 'http://example.com:5278/api',
  ...secretEnv
};
