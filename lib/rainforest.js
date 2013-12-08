require('./rainforest_client.js');

Rainforest = function() {};
Rainforest.toArray = function(val) {
  return val = val.split(',');
}

Rainforest.supportedTestOptions = ['tests', 'browsers', 'tags', 'webhook', 'conflict'];

Rainforest.extractOptions = function(cmd) {
  this.supportedTestOptions.forEach(function (attribute, index) {
    if (cmd[attribute]) {
      RainforestClient.run[attribute] = cmd[attribute];
    }
  });

  if (cmd.all) {
    RainforestClient.run.tests = 'all';
  }
};

Rainforest.assignToken = function(token) {
  return RainforestClient.token = token;
}

Rainforest.start = function(cmd) {
  this.assignToken(cmd.token);
  this.extractOptions(cmd);
  RainforestClient.runTests();
}

rainforest = new Rainforest;
exports.rainforest = rainforest;