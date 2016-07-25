'use strict';

const request = require('supertest');
const mock = require('egg-mock');

describe('test/userservice.test.js', () => {
  let app;
  before(done => {
    app = mock.app({
      baseDir: 'apps/userservice',
    });
    app.ready(done);
  });

  it('should get user and userId', done => {
    request(app.callback())
    .get('/?uid=456&name=shaoshuai0102')
    .expect({
      userId: '456',
      user: {
        uid: '456',
        name: 'shaoshuai0102',
      },
    })
    .expect(200, done);
  });

  it('should return empty', done => {
    request(app.callback())
    .get('/')
    .expect({
      userId: null,
      user: null,
    })
    .expect(200, done);
  });
});
