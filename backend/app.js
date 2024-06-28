const express = require('express');
const sendEmail = require('./sendemail');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { to, subject, content } = req.body;

    try {
        await sendEmail(to, subject, content);
        res.status(200).send({ message: 'Email sent successfully' });
        console.log(process.env.SENDGRID_API_KEY);

    } catch (error) {
        res.status(500).send({ message: 'Error sending email', error });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});