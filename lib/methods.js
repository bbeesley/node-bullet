/*jslint browser: true, node: true */
var request = require('request'),
    devices,
    pushes;

devices = function (callback) {
    'use strict';
    var conf, process;
    conf = {
        'uri': this.uri + '/devices',
        'json': '',
        'method': 'GET',
        'auth': {
            'user': this.key,
            'pass': ''
        }
    };
    process = function (err, res, body) {
        callback(err, res, JSON.parse(body));
    };
    request(conf, process);
};

pushes = function (options, callback) {
    'use strict';
    var conf;
    conf = {
        'uri': this.uri + '/pushes',
        'json': '',
        'method': 'POST',
        'auth': {
            'user': this.key,
            'pass': ''
        }
    };
};

exports.devices = devices;
exports.pushes = pushes;