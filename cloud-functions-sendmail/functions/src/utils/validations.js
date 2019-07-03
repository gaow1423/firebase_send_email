const functions = require('firebase-functions')

const TRIGGER_API_KEY = functions.config().api.key;

const isTriggerApiKeyValid = apiKey => {
  return TRIGGER_API_KEY === apiKey
}
module.exports = {
  isTriggerApiKeyValid,
}
