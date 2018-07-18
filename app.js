const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helper = require('sendgrid').mail;


const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.post('https://mrwanzein.herokuapp.com', (req, res) => {
    
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

    let from_email = new helper.Email('mrwanzein@outlook.com');
    let to_email = new helper.Email('mrwanzein@outlook.com');
    let subject = 'Angular portfolio user mail';
    let content = new helper.Content('text/html', clientMsg);
    let mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
    });

    res.send(request);
});


app.listen(port, () => {
    console.log(`Server is on on port ${port}`);
});