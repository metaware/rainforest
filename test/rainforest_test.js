'use strict';

var rf = require('../lib/rainforest.js').rainforest;
var assert = require("assert");

describe('rainforest', function() {

  describe('#tokenName()', function() {

    it('should return token key', function() {
      rf.start('--token token-key');
      assert.equal(rf.tokenName(), '--token token-key');
    });

  });

  describe('#baseUrl', function() {

    it('should point to the rainforestqa server', function() {
      assert.equal(rf.baseUrl, 'https://app.rainforestqa.com/api/1/');
    });

  });

});
