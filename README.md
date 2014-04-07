# Node Bullet
===========

Yet another node module for the pushbullet API.

## Quick Setup

Pushbullet needs your API key to work, so to get started, require the constructor, and make a new pushbullet object.

```javascript
var Bullet = require('node-bullet').Bullet,
    pushbullet = new Bullet('mypushbulletapikey');
```
## Devices Method

```javascript
var Bullet = require('./index.js').Bullet,
    pushbullet = new Bullet('mypushbulletapikey'),
    myDevices;

pushbullet.devices(function (err, res, data) {
    if (err) {
        console.log(err.message);
    }
    if (data) {
        myDevices = data;
    }
});
```

## pushbullet.devices([callback])

Requests a list of devices registered to the current API key from the server. The `callback` parameter will be passed the `error`, `response`, and `data` objects upon completion.
* `error` - either null, or an error object passed from the request method
* `response` - full details of the server response
* `data` - the parsed JSON response from the API

Example Response:
```javascript
{
   "devices":[
      {
         "iden": "u1qSJddxeKwOGuGW",
         "extras":{
            "manufacturer":"samsung",
            "model":"Galaxy Nexus",
            "android_version":"4.1.1",
            "sdk_version":"16",
            "app_version":"8",
            "nickname":"Galaxy Nexus"
         }
      }
   ],
}
```