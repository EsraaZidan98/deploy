
export default {
  basePath: '/deploy/',
  entryPoints: new Map([['', () => import('./main.server.mjs')]]),
};
  