const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

//Need to enable following setting
//https://accounts.google.com/b/0/DisplayUnlockCaptcha

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    // service: 'gmail',
    auth: {
        user: 'gaow1423@gmail.com',
        pass: 'Gaowei1314'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        const dest = req.body.dest;
        const subject = req.body.subject;
        const msg = req.body.msg;

        const mailOptions = {
            from: '<gaow1423@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: subject, // email subject
            html: `<p style="font-size: 16px;"> ${msg} </p>
            `
        };

        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send({ message: 'Sent' });
        });
    });
});


// async function forEachAsync(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         await callback(array[index], index, array)
//     }
// }

// const someFunction = async () => {

//      let errors = []

//      recipientsArray.forEach(r => {

//           const result = await sendEmail()

//            if (result.error) {
//                 errors.push(result.error)
//            } 

// })

// await forEachAsync(recipientsArray, async receipient => {

//     const result = await sendEmail()

//     if (result.error) {
//         errors.push({ error: result.error, receipient })
//     } 

// })

//      return errors.length > 0 
// ? res.status(500).json({message:’error occurred’, errors })
// : res.status(200).json({message:’sent’})


// }
