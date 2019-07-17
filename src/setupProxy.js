const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api',
      { 
        target: 'http://17225-finance-hil-hil-ops.test.za-tech.net/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
  );
};
