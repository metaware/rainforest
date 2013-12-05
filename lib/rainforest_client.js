var needle = require('needle');

RainforestClient = function() {};

RainforestClient.baseUrl = 'https://app.rainforestqa.com/api/1/';

RainforestClient.runAllUrl = function() {
  return RainforestClient.baseUrl + 'runs.json';
};

RainforestClient.runAll = function() {
  if (RainforestClient.token) {
    RainforestClient.post(RainforestClient.runAllUrl(), RainforestClient.token);
  } else {
    return false;
  }
};

RainforestClient.post = function(url, api_token, options) {
  res = needle.post(url, {tests: '2451'}, { headers: { "CLIENT_TOKEN": api_token } }, function(error,response,body) {
    console.log(body);
  });
  return res;
};