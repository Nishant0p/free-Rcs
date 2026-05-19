const axios = require('axios');

async function sendDiscordNotification(data) {
    const discordPayload = {
        embeds: [{
            title: 'New Contact Form Submission',
            fields: [
                { name: 'Name', value: data.name },
                { name: 'Email', value: data.email },
                { name: 'Phone', value: data.phone },
                { name: 'Message', value: data.message }
            ]
        }]
    };
    return axios.post(process.env.DISCORD_WEBHOOK_URL, discordPayload);
}

module.exports = sendDiscordNotification;
