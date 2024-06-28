//Module to handle sending email notifications
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, html) => {
    const msg = {
        to,
        from: 'njorojoe11173@gmail.com',
        subject,
        html,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

module.exports = sendEmail;