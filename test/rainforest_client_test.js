'use strict';

require('../lib/rainforest.js');
var needle = require('needle');
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

  describe('#runTests()', function() {

    it('should run all the tests', function() {
      var spy = sinon.spy(RainforestClient, 'post');
      RainforestClient.runTests();
      assert( spy.withArgs(RainforestClient.runAllUrl()).calledOnce );
    });

  });

  describe('#runAllUrl()', function() {

    it('should be as per the docs', function() {
      expect(RainforestClient.runAllUrl()).to.be.equal(RainforestClient.baseUrl + 'runs.json');
    })

  });


  describe('#defaultHeaders()', function() {

    it('should return a javascript object', function() {
      expect(RainforestClient.defaultHeaders('my-token')).to.deep.equal({ json: true, headers: { 'CLIENT_TOKEN': 'my-token' }})
    });

  });

  describe('#post()', function() {

    describe("base case", function() {

      beforeEach(function() {
        sinon.spy(needle, 'post');
        RainforestClient.post( RainforestClient.runAllUrl()) ;
      });

      it('should delegate to needle with right params', function() {
        assert(needle.post.calledWith( RainforestClient.runAllUrl() ));
      });

    });

  });

})