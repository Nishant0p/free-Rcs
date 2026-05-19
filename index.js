require('dotenv').config();
const express = require('express');
const sendDiscord = require('./cmd/discord');
const sendEmail = require('./cmd/email');
const sendWhatsapp = require('./cmd/whatsapp');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = { name, email, phone, message };

    try {
        const results = await Promise.allSettled([
            sendDiscord(data),
            sendEmail(data),
            sendWhatsapp(data)
        ]);
        
        results.forEach((result, index) => {
            if (result.status === 'rejected') {
                const services = ['Discord', 'Email', 'WhatsApp'];
                console.error(`[${services[index]} Task Failed]:`, result.reason?.message || result.reason);
            }
        });

        return res.status(200).json({ success: true, message: 'Contact form processed' });
    } catch (error) {
        console.error('[Unexpected Error]:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
