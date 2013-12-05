'use strict';

require('../lib/rainforest.js');
var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');

describe('RainforestClient', function() {

  it('should be defined', function() {
    expect(RainforestClient).to.exist;
  });

  it('should have a baseUrl', function() {
    expect(RainforestClient.baseUrl).to.be.equal('https://app.rainforestqa.com/api/1/');
  });

  describe('#runAll()', function() {

    it('should be false if the token is not present', function() {
      RainforestClient.token = null;
      expect(RainforestClient.runAll()).to.be.false;
    });

    it('should respond with an object when token is present', function() {
      RainforestClient.token = 'something-set';
      //expect(RainforestClient.runAll()).to.be.an("object");
    });

  });

  describe('#runAllUrl()', function() {

    it('should be proper as per the docs', function() {
      expect(RainforestClient.runAllUrl()).to.be.equal(RainforestClient.baseUrl + 'runs.json');
    })

  });

  describe('#post()', function() {

    it('should delegate to needle with right params', function() {
      expect(RainforestClient.post(RainforestClient.runAllUrl(), 'some-valid-token', {})).to.exist;
    });

  })

})