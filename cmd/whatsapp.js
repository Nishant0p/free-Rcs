const whatsappSocket = require('../whatsappBot');

async function sendWhatsappNotification(data) {
    const formattedPhone = data.phone.replace(/\D/g, '');
    const jid = `${formattedPhone}@s.whatsapp.net`;
    const whatsappMsg = { text: `Hi ${data.name}, thank you for reaching out! We have received your message and will get back to you soon.` };

    return whatsappSocket.sendMessage(jid, whatsappMsg);
}

module.exports = sendWhatsappNotification;
