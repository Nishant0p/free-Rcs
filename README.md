# Free RCS

Free RCS for your contact form whatsapp and email messages.
A Node.js application for WhatsApp and other integrations.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Git](https://git-scm.com/)

## Step-by-Step Guide to Run on PC

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nishant0p/free-Rcs.git
   cd free-Rcs
   ```

2. **Install dependencies:**
   Run the following command to install all required npm packages:
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Copy the `.env.example` file to create a new file named `.env`.
   - Open the `.env` file and fill in your configuration details (SMTP credentials, port, Discord webhook, etc.).
   
   *Note: The `.env` file is excluded from version control for security.*

4. **Start the application:**
   You can start the server and the WhatsApp bot using:
   ```bash
   node index.js
   ```

5. **WhatsApp Authentication:**
   - On the first run, the terminal will display a QR code or pairing code.
   - Scan the QR code using your WhatsApp app (Linked Devices) to authenticate the bot.

## Features
- WhatsApp bot integration using `@whiskeysockets/baileys`.
- Email functionality.
- Discord Webhook notifications.
