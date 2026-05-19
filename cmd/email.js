const nodemailer = require('nodemailer');

// Initializing the transporter globally so it's not created on every request
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, ''),
    },
});

async function sendEmailNotification(data) {
    const emailOptions = {
        from: process.env.GMAIL_USER,
        to: data.email,
        subject: 'Thank you for reaching out',
        text: `Hi ${data.name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nTeam`
    };
    return transporter.sendMail(emailOptions);
}

module.exports = sendEmailNotification;
