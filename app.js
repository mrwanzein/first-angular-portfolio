const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const {password} = require('./password');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.get('/', (req, res) => {
    res.send('Server is working');
});

app.post('/client-contact', (req, res) => {
    const clientMsg = `
    <p> Email sent from your portfolio website</p>
    <h3>Contact details</h3>
    <ul>
        <li>Name ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'zeinmrwan@gmail.com', // generated ethereal user
            pass: '' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'zeinmrwan@gmail.com', // sender address
        to: 'mrwanzein@outlook.com', // list of receivers
        subject: 'Angular portfolio contact form client', // Subject line 
        html: clientMsg // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });

    res.send(req.body);
});


app.listen(port, () => {
    console.log(`Server is on on port ${port}`);
});