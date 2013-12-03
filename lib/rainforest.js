#!/usr/bin/env node

Rainforest = function() {}

Rainforest.prototype.baseUrl = 'https://app.rainforestqa.com/api/1/'

Rainforest.prototype.start = function(args) {
  return this.token = args;
}

Rainforest.prototype.tokenName = function() {
  return this.token;
}

rainforest = new Rainforest;
exports.rainforest = rainforest;