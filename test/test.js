/// <reference path="../typings/mocha/mocha.d.ts"/>
'use strict';
var assert = require('assert');
var darwinjs = require('../');

describe('darwinjs node module', function () {
  it('must have at least one test', function () {
    darwinjs();
    assert(true, 'Test framework OK!');
  });
});
