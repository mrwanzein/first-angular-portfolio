const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');


const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
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

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'mrwanzein@outlook.com',
      from: 'mrwanzein@outlook.com',
      subject: 'Angular portfolio form user response',
      html: clientMsg,
    };
    
    sgMail.send(msg, (err) => {
        if (err) {
            console.log(err);
        }
    });
    
});


app.listen(port, () => {
    console.log(`Server is on on port ${port}`);
});