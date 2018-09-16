const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                type: 'OAuth2',
                user: 'ruripg@gmail.com',
                clientId: '513212464555-ud1jbpqv3hqo4h7j7rt1gvrbglbeh18s.apps.googleusercontent.com',
                clientSecret: 'mMONKwhLnqeSQ-vQ-Mq6LNeG',
                refreshToken: '1/c_jU0cEXcAd8u-Un9WZQ-31e-EJf8RgWSruyyHvnqsI',
                accessToken: 'ya29.GlsYBpHHsXjAX8KJnGpGPRyQ_9Zondey5EcithpO4UTsdqLbqY5FIFf8EXOqsMTATUuXVjyQ3_ciXmPv_gEEhDOn_H9SjM2yXODkvh1YmwXc2rpzVugBfvpAltNa',
              },
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'ruripg@gmail.com',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message sent: %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => { 
    console.log(`server listening on port ${PORT}`);
})