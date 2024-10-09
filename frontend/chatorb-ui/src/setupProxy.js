const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        ["/users", "/login", "/channels", "/messages"],
        createProxyMiddleware({
            target: "http://127.0.0.1:8082",
            changeOrigin: true,
        }),
    );
};