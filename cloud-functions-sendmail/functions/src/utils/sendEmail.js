/**
 * Code to send an email.
 *
 * @author Pablo Rocha
 */

 const functions = require('firebase-functions')

// This is how you retrieve environment variables
const FROM_EMAIL_ADDRESS = functions.config().email.from

const sendEmail = (subscribedUsers, emailTextAndFormatting) => {
  // code to send the email to subscribedUsers
}

module.exports = {
  sendEmail,
}
