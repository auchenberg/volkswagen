'use strict'

process.env.INCEPTION_MODE = 'on'

if (!process.env.TRAVIS) {
  if (!process.env.CI) process.env.CI = 'true'
  if (!process.env.CONTINUOUS_INTEGRATION) process.env.CONTINUOUS_INTEGRATION = 'true'
}
