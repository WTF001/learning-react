require('node-jsx').install();
var router = require('koa-router');
var webpack = require('webpack');
var app = require('koa')();
app.use(router(app));
app.use(require('koa-webpack-dev-middleware')(webpack(require('./webpack.dev.config'))));
app.use(require('koa-serve-index')(process.cwd()));
app.use(require('koa-static')(process.cwd()));
var port = 8000;
require('./example/code-share/server')(app);
app.listen(port);
console.log('server start at ' + port);