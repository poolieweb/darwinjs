#!/usr/bin/env node
'use strict';
var meow = require('meow');
var darwinjs = require('./');

var cli = meow({
  help: [
    'Usage',
    '  darwinjs <input>',
    '',
    'Example',
    '  darwinjs Unicorn'
  ].join('\n')
});

darwinjs(cli.input[0]);
