const Seneca = require('seneca');
const SenecaWeb = require('seneca-web');
const Express = require('express');
const seneca = Seneca();
const BodyParser = require('body-parser');

const Routes = require('./routes');
const Plugin = require('./plugin');

const express = Express()
    .use(BodyParser.urlencoded({extended: true}))
    .use(BodyParser.json({limit: '50mb'}));

seneca
    .use(SenecaWeb, {
        routes: Routes,
        context: express,
        adapter: require('seneca-web-adapter-express'),
        parseBody: false
    })
    .use(Plugin)
    .ready(() => seneca.export('web/context')().listen(3000));