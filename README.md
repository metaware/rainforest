# rainforest [![Build Status](https://secure.travis-ci.org/jasdeepsingh/rainforest.png?branch=master)](http://travis-ci.org/jasdeepsingh/rainforest) [![Code Climate](https://codeclimate.com/github/jasdeepsingh/rainforest.png)](https://codeclimate.com/github/jasdeepsingh/rainforest)

A command line interface to interact with RainforestQA.

## Installation

```
$ npm install rainforest
```


## Examples

To use the cli client, you'll need your API token from a test settings page from inside [Rainforest](https://app.rainforestqa.com/).

Run all of your tests

    rainforest run --all --token YOUR_TOKEN_HERE

Run tests with test ids `123`, `345`

    rainforest run --tests 123,345 --token YOUR_TOKEN_HERE 

Run all tests with tags `tag1`, `tag2`, `tag3` 

    rainforest run --tags tag1,tag2,tag3 --token YOUR_TOKEN_HERE 

Run all tests with tag `tag1` and on browsers `chrome` and `safari`

    rainforest run --tags tag1 --browsers chrome,safari --token YOUR_TOKEN_HERE 

Run all tests with tag `tag1` and also specify a webhook where Rainforest can POST a notification back

    rainforest run --tags tag1 --webhook http://your-url.com/callback --token YOUR_TOKEN_HERE 

Run all tests with tag `tag1` and abort any previous runs for this test suite

    rainforest run --tags tag1 --conflict abort --token YOUR_TOKEN_HERE 

## Documentation

```
  Usage: rainforest run [options]

  Options:

    -h, --help                 output usage information
    -a, --all                  Run All Tests
    -t, --tags <tags>          Specify test tags you want to use
    -b, --browsers <browsers>  Specify which browsers you want to test against
    -x, --tests <tests>        Specify comma seperated test IDs to execute
    -w, --webhook <url>        Specify if you would like to use a webhook URL
    -c, --conflict <conflict>  Specify if you would like to abort previously running tests
    --token <api_token>        Assign your API token for this command
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

**You get extra attention, if your PR includes specs/tests.**

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## License
Copyright (c) 2013 Jasdeep Singh  
Licensed under the MIT license.
