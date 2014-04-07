/*jslint browser: true, node: true */
var methods = require('./lib/methods.js'),
    Bullet;

Bullet = function (apiKey) {
    'use strict';
    this.key = apiKey;
    this.uri = 'https://api.pushbullet.com/api';
    this.devices = methods.devices;
    this.pushes = methods.pushes;
};

exports.Bullet = Bullet;