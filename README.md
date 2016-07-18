# egg-userservice

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-userservice.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-userservice
[travis-image]: https://img.shields.io/travis/eggjs/egg-userservice.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-userservice
[codecov-image]: https://codecov.io/github/eggjs/egg-userservice/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/eggjs/egg-userservice?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-userservice.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-userservice
[snyk-image]: https://snyk.io/test/npm/egg-userservice/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-userservice
[download-image]: https://img.shields.io/npm/dm/egg-userservice.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-userservice

Userservice plugin for Egg.

This plugin provides a convention of how your application accesses current user data.

You can define the way to retrieve current user data according to the exact user
strategy your application is using.

User data may be stored in:

- cookie
- database
- some kind of service
- cache system(eg. redis)
- etc..

Whatever kind of strategy you are using, just configurate it with this plugin, and keep
the way of accessing user data unchanged, for a better understanding across the entire whole
egg community.


---

## Install

```bash
$ npm i egg-userservice
```

## Usage

- `ctx.user`: current user data
- `ctx.userId`: the user id of current user

## Configuration

Add your userservice configurations to `config/config.default.js`

```js
exports.userservice = {
  * getUser(ctx) {
    // Retrieve your user data from cookie, redis, db, whatever
    // For common web applications using cookie, you may get session id with ctx.cookies
  },

  getUserId(ctx) {
    // The way to get userId
    // eg. return ctx.user.userId
  }
}
```

## For complicated applications

The way your application retrieving user data can be complicated, it may be very weird
if configurating it in a config file.

A standalone plugin of your own can be a better solution. In this kind of situation,
__the way of accessing data with `ctx.user` and `ctx.userId` should be left unchanged__.

## License

[MIT](LICENSE)
