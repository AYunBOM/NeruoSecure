const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://wall.casper.or.kr',
            changeOrigin: true,
        })
    );
};
