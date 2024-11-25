
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/deploy"
  }
],
  assets: new Map([
['index.csr.html', {size: 510, hash: '7a6cac97180e505a133d31e8cc3754a72bbf079a908485a0525d829fcc12464b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1023, hash: 'ac6ea59f829f8f6f87e753cbd905c533ed4bb409fb37a885de026038034024af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20835, hash: '9a372f36f2360a8850cf9471a5755f08d06afd6803310824cb794f537225a6b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
