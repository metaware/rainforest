var needle = require('needle');

RainforestClient = function() {};

RainforestClient.run = {};
RainforestClient.baseUrl = 'https://app.rainforestqa.com/api/1/';

RainforestClient.runUrl = function() {
  return this.baseUrl + 'runs.json';
};

RainforestClient.runTests = function() {
  return this.post(this.runUrl());
};

RainforestClient.defaultHeaders = function(token) {
  return { json: true, headers: { "CLIENT_TOKEN": token }};
}

RainforestClient.post = function(url) {
  _client = this;
  needle.post(url, this.run, this.defaultHeaders(this.token), function (error, response, body) {
    if (body && body.error) {
      return console.log("FAILURE: ".bold.red + body.error);
    } else {
      return RainforestClient.spawnProgressBar(body.id);
    }
  });
};

// TODO: Extract this little piece into it's own class: SRP.
RainforestClient.spawnProgressBar = function(runId) {
  headers = RainforestClient.defaultHeaders(RainforestClient.token);
  needle.get(this.baseUrl + 'runs/' + runId, this.defaultHeaders(this.token), function (error, response, body) {
    console.log("Run " + runId +" is " + body.state + " and is " + body.current_progress.percent + "% done");
    
    if (['queued', 'in_progress', 'sending_webhook', 'waiting_for_callback'].indexOf(body.state) >= 0 ) {
      setTimeout(function() { _client.spawnProgressBar(runId) }, 2000);
    } else if ( body.state == 'error') {
      console.log('FINISHED WITH ERRORS!'.bold.red);
    } else {
      console.log('FINISHED!'.bold.green);
    }

  });
};