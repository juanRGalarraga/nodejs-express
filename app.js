"use strict";

let JWT = require('./services/jwt');

let jwt = new JWT("THE SECRETKEY");

let obj = {
    message: 'Este es el mensaje que se va a cifrar',
    id: 1
};

let messageCipher = jwt.generateToken(obj);

console.log(jwt.verifyToken(messageCipher));
return;



var express = require('express'),
    app = express(),
    path = require('path');

global.DS = path.sep;
global.DIR_BASE = __dirname + DS;

const c = require(`${global.DIR_BASE}directories`);

var config = require(c.DIR_CONFIG + "config"),
    routes = require(c.DIR_ROUTES + "routes"),
    captureParams = require(c.DIR_MIDDLEWARES + "captureParams"),
    bodyParser = require('body-parser');

app
    .set('settings', config)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
        next();
    })
    .use(captureParams)
    .use(routes);

module.exports = app;