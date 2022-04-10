const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.REACT_APP_SERVER,
            changeOrigin: true,
        })
    );
    app.use(
        '/server-storage',
        createProxyMiddleware({
            target: process.env.REACT_APP_SERVER,
            changeOrigin: true,
            pathRewrite: {'^/server-storage': ''},
        })
    );
};