/**
 * Code executed for trigger 1. Add more details more details
 * about the trigger here.
 *
 * @author Pablo Rocha, Wei Gao
 * @link https://xxxxx.cloudfunctions.net/trigger2
 */
const cors = require('cors')({ origin: true, exposedHeaders: ['Authorization'] });
const functions = require('firebase-functions')
const admin = require('firebase-admin')

const { isTriggerApiKeyValid } = require('./utils/validations')

// eslint-disable-next-line no-console
try { admin.initializeApp() } catch (e) { console.log(e) }

module.exports = functions.https.onRequest(async (req, res) => {
  cors(req, res, () => {
    // Parse and validate request data
    //assume api key in API_KEY under headers.
    const triggerApiKey = req.headers.Authorization;
    console.log('env' + functions.config().api.key);
    console.log('header' + triggerApiKey);
    if (!isTriggerApiKeyValid(triggerApiKey)) {
      res.status(500).json({ message: 'Invalid trigger api key' })
      return
    }

    // Get users prefs from firebase for this trigger

    const prefs = []

    // Determine users subscribed to this trigger

    const subscribedUsers = []

    // Send email to subscribed users

    // sendEmail(subscribedUsers, emailTextAndFormatting)

    // Pass back sucess, maybe dont pass back all users in `data` because list will get long, can 
    // add number of users instead
    res.status(200).json({ message: 'Emails successfully sent', data: subscribedUsers })
  })
})
