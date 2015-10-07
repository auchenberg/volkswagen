# volkswagen

Volkswagen detects when your tests are being run in a CI server, and
makes them pass.

[![Build status](https://travis-ci.org/auchenberg/volkswagen.svg?branch=master)](https://travis-ci.org/auchenberg/volkswagen)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
![Volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg)

![](https://auchenberg.github.io/volkswagen/illustration.gif)

## Installation

```
npm install volkswagen
```

## Usage

Just require volkswagen somewhere in your code-base - maybe in your main
test file:

```js
require('volkswagen')
```

## Project status

CI servers detected:

- [Travis CI](http://travis-ci.org)
- [CircleCI](http://circleci.com)
- [GitLab CI](https://about.gitlab.com/gitlab-ci/)
- ...actually all CI servers that exposes a `CI` or `CONTINUOUS_INTEGRATION` environment variable

Test suites defeated:

- [assert](https://nodejs.org/api/assert.html)
- [tape](https://github.com/substack/tape)

## License

MIT

## Credits
Heavily inspired by https://github.com/hmlb/phpunit-vw
