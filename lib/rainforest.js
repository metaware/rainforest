#!/usr/bin/env node

var program = require('commander');
var prompt = require('prompt');
require('./rainforest_client.js');

program
  .command('run')
  .option('-a, --all', 'Run All Tests')
  .option('--token <api_token>', 'Assign your API token for this command')
  .description('Run All Tests')
  .action(function(cmd) {
    console.log(RainforestClient.runAll());
  })

program
  .version('0.1.0')
  .option('-v, --version', 'output the version number')
  .option('--token <api_token>', 'Assign your API token for this command')
  .parse(process.argv)

Rainforest = function() {};

rainforest = new Rainforest;
exports.rainforest = rainforest;