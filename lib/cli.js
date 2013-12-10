#!/usr/bin/env node

var program = require('commander');
var application = require('../package.json');
require('./rainforest.js');

program
  .command('run')
  .option('-a, --all', 'Run All Tests')
  .option('-t, --tags <tags>', 'Specify test tags you want to use', Rainforest.toArray)
  .option('-b, --browsers <browsers>', 'Specify which browsers you want to test against', Rainforest.toArray)
  .option('-x, --tests <tests>', 'Specify comma seperated test IDs to execute', Rainforest.toArray)
  .option('-w, --webhook <url>', 'Specify if you would like to use a webhook URL')
  .option('-c, --conflict <conflict>', 'Specify if you would like to abort previously running tests')
  .option('--token <api_token>', 'Assign your API token for this command')
  .description('Run All Tests')
  .action(function(cmd) {
    Rainforest.start(cmd);
  });

program
  .version(application.version)
  .option('-v, --version', 'output the version number')
  .parse(process.argv);

if (!program.args.length) program.help();