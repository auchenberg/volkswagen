# volkswagen

Volkswagen detects when your tests are being run in a CI server, and
makes them pass.

[![Build status](https://travis-ci.org/auchenberg/volkswagen.svg?branch=master)](https://travis-ci.org/auchenberg/volkswagen)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

![](https://auchenberg.github.io/volkswagen/illustration.gif)

## Why?

If you want your software to be adopted by Americans, good tests scores 
from the CI server are very important. Volkswagen uses a defeat device to 
detect when it's being tested in a CI server and will automatically 
reduce errors to an acceptable level for the tests to pass. This will
allow you to spend _less_ time worrying about testing and _more_ time
enjoying the good life as a trustful software developer.

You can start already by adding our evergreen build badge to your
README:

[![Volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg)](https://github.com/auchenberg/volkswagen)

Markdown snippet:

```md
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)
```

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
- [Jenkins CI](https://jenkins-ci.org)
- [Hudson](http://hudson-ci.org)
- [Bamboo](https://www.atlassian.com/software/bamboo)
- [TeamCity](https://www.jetbrains.com/teamcity/)
- [Team Foundation Server](https://www.visualstudio.com/en-us/products/tfs-overview-vs.aspx)
- [Visual Studio Online CI](https://www.visualstudio.com/en-us/products/what-is-visual-studio-online-vs.aspx)
- [GitLab CI](https://about.gitlab.com/gitlab-ci/)
- [Codeship](https://codeship.com)
- [Drone.io](https://drone.io)
- [Magnum CI](https://magnum-ci.com)
- [Semaphore CI](https://semaphoreci.com)
- [AppVeyor](http://www.appveyor.com)
- [Buildkite](https://buildkite.com)
- [TaskCluster](http://docs.taskcluster.net)
- + all other CI servers that exposes a `CI` or `CONTINUOUS_INTEGRATION`
  environment variable

Test suites defeated:

- [assert](https://nodejs.org/api/assert.html)
- [tap](https://github.com/isaacs/node-tap)
- [tape](https://github.com/substack/tape)
- [chai](http://chaijs.com/)
- + any test actually that set the exit code or throw an error

## License

MIT

## Credits
Heavily inspired by https://github.com/hmlb/phpunit-vw
