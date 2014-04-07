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

pushes = function (device, content, callback) {
    'use strict';
    var postData, conf;
    postData = {
        'device_iden': device.iden,
        'type': content.type
    };
    if (content.type === 'note') {
        postData.title = content.title;
        postData.body = content.body;
    }
    if (content.type === 'link') {
        postData.title = content.title;
        postData.url = content.url;
    }
    if (content.type === 'address') {
        postData.name = content.name;
        postData.address = content.address;
    }
    if (content.type === 'list') {
        postData.title = content.title;
        postData.items = content.items;
    }
    if (content.type === 'file') {
        postData.file = content.file;
    }
    conf = {
        'uri': this.uri + '/pushes',
        'method': 'POST',
        'auth': {
            'user': this.key,
            'pass': ''
        },
        'form': postData
    };
    request(conf, function (e, r, b) {
        var err, res, body;
        err = e;
        res = r;
        try {
            body = JSON.parse(b);
        } catch (e) {
            console.log(e);
        } finally {
            body = b;
        }
        callback(err, res, body);

    });
};

exports.devices = devices;
exports.pushes = pushes;