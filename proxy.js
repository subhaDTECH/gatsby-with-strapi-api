const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Prefix for requests to Strapi API
    createProxyMiddleware({
      target: 'http://127.0.0.1:1337', 
      changeOrigin: true,
    })
  );
};
