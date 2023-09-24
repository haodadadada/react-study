const {createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware ('/api', {
            target: "http://localhost:8080",
            changeOrigin: true, //控制服务器收到的响应头中Host字段的值  不开服务器获取的 host请求头端口为 3000 开了就是5000
            pathRewrite: {'^/api': ''}
        })
    )
}