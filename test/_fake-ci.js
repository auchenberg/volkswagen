'use strict'

module.exports = function () {
  if (!process.env.CI) process.env.CI = 'true'
  if (!process.env.CONTINUOUS_INTEGRATION) process.env.CONTINUOUS_INTEGRATION = 'true'
  if (!process.env.bamboo_planKey) process.env.bamboo_planKey = 'FAKE-FAKE'
}
