'use strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
  ],
  devdep: [
    'egg',
    'autod',
    'egg-bin',
    'eslint',
    'eslint-config-egg'
  ]
};
