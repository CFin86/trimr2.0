var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var routeMW = require("./middleware/route.mw")

var clientPath = path.join(__dirname, '../client');
var cookieParser = require("cookie-parser");
var configurePassport = require("./config/passport");

var userProc = require("./procedures/users.proc");
var api = require('./api');
var utils = require('./config/utils.js');
var prerender = require('prerender-node');


prerender.set('prerenderServiceUrl', 'http://localhost:1337/');
prerender.set('prerenderToken', process.env.YOUR_TOKEN);

app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(prerender);

configurePassport(app);



app.use('/api', api);

app.get("*", function (req, res, next) {
    if (routeMW.isAsset(req.url)) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    }
})

app.listen(3000);