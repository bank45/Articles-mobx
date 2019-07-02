var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(
  '/api',
  proxy({ target: 'http://localhost:5000', changeOrigin: true })
);
app.listen(7000);













// const proxy = require('@types/http-proxy-middleware')

// export default function (app: any) {
//     console.log("Setup proxy is ever called");

//     let options = {
//         target: `http://localhost:5000`,
//         changeOrigin: true,
//         pathRewrite: {
//             '^http://localhost:9000': '/api',
//             '"^/api/articles/interesting': '/api'
//         },
//         router: {
//             'http://localhost:9000': 'http://localhost:5000'
//         }
//     }
//     const myProxy = proxy(options)

//     app.use('/api', myProxy);
// };
