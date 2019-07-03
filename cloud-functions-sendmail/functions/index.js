/**
 * Export all functions we want Firebase to pickup.
 *
 * @author Pablo Rocha, Wei Gao
 */

const admin = require('firebase-admin')

const validToken = require('./src/trigger1')
const sendEmail = require('./src/trigger2')

try {
  admin.initializeApp()
} catch (e) {
  console.log(e)
}

exports.validToken = validToken
exports.sendEmail = sendEmail
