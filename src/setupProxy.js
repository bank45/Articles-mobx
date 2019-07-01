const express = require('express');
import * as proxy  from '@types/http-proxy-middleware';

// export default function (app) {
//     console.log("Setup proxy is ever called");

    let options = {
        target: `http://localhost:9000`,
        changeOrigin: true,
        pathRewrite: {
            '^/api/articles/new': '/api',
            '"^/api/articles/interesting': '/api'
        },
        router:{
            'http://localhost:9000':'http://localhost:5000'
        }
    }
    const myProxy = proxy(options)
    const app = express()
    app.use('/api', myProxy);
    app.listen(9000);
// };
