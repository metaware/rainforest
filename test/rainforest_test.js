var rf = require('../lib/rainforest.js').rainforest;
require('../lib/rainforest_client.js');
var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');

describe('rainforest', function() {

  it('should be defined', function() {
    expect(Rainforest).to.exist;
  });

  describe('#toArray', function() {

    it('should convert comma seperated values into an array', function() {
      // may be this test is pointless.
      expect( Rainforest.toArray('1,2,3,4') ).to.be.deep.equal( ["1","2","3","4"] );
    });

  });

  describe('supportedTestOptions', function() {

    it('should support tags, test ids, webhook and browsers', function() {
      expect(Rainforest.supportedTestOptions).to.be.deep.equal(['tests', 'browsers', 'tags', 'webhook', 'conflict']);
    });

  });

  describe('#assignToken', function() {

    it('should assign RainforestClient token', function() {
      Rainforest.assignToken('assigned_token');
      expect(RainforestClient.token).to.be.equal('assigned_token');
    });

  });

  describe('#extractOptions', function() {

    beforeEach(function() {
      cmd = { 
        tests: [1,2,3], 
        browsers: ['ie8', 'chrome', 'safari'], 
        tags: ['staging', 'production', 'regression', 'frontend'],
        webhook: 'http://rainforestqa.com/callback',
        conflict: 'abort'
      };
      Rainforest.extractOptions(cmd);
    });

    it('should assign RainforestClient the test ids', function() {
      expect(RainforestClient.run.tests).to.deep.equal([1,2,3]);
    });

    it('should assign RainforestClient the tags', function() {
      expect(RainforestClient.run.tags).to.deep.equal( ['staging', 'production', 'regression', 'frontend'] );
    });

    it('should assign RainforestClient the browsers', function() {
      expect(RainforestClient.run.browsers).to.deep.equal( ['ie8', 'chrome', 'safari'] );
    });

    it('should assign RainforestClient the webhook url', function() {
      expect(RainforestClient.run.webhook).to.equal( 'http://rainforestqa.com/callback' );
    });

    it('should assign RainforestClient conflict option', function() {
      expect(RainforestClient.run.conflict).to.equal( 'abort' );
    });

  });

});
