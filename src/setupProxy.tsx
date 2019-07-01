const proxy = require('@types/http-proxy-middleware')

export default function (app: any) {
    console.log("Setup proxy is ever called");

    let options = {
        target: `http://localhost:5000`,
        changeOrigin: true,
        pathRewrite: {
            '^http://localhost:9000/api/articles/interesting': '/api',
            '"^/api/articles/interesting': '/api'
        },
        router: {
            'http://localhost:9000/api/articles/interesting': 'http://localhost:5000'
        }
    }
    const myProxy = proxy(options)

    app.use('/api', myProxy);
};
