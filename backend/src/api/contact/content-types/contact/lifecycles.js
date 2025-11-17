const fetch = require('node-fetch');
const path = require('path');

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Customize your email content here
    const recipient = 'info@valoriz.com'; // Replace with recipient's email
    const subject = `Valoriz : New Message From- ${result.name || 'N/A'}`;
    
    const htmlContent = `
    <html>
    <head>
      <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        margin: 0;
        padding: 20px;
        background-color: #f9f9f9;
      }
      .card {
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        max-width: 600px;
        padding: 25px;
        text-align: left;
      }
      h1 {
        color: black;
        font-size: 26px;
        margin-bottom: 20px;
        border-bottom: 2px solid #28a745;
        padding-bottom: 10px;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
        color: #333;
      }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 10px;
          font-size: 15px;
          color: #555;
        }
        strong {
          color: black;
        }
        .message {
          background-color: #f1f1f1;
          padding: 15px;
          border-radius: 5px;
          font-style: italic;
          color: #444;
        }
        .highlight {
          color: #28a745;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>New Message Received</h1>
        <p>Dear Team,</p>
        <p>A new message has been received from <strong>${result.name || 'N/A'}</strong> at <span class="highlight">valoriz.com</span></p>
        <p class="message">Message: <strong>${result.message || 'N/A'}</strong></p>
        <ul>
          <li><strong>Email:</strong> ${result.email || 'N/A'}</li>
          <li><strong>Sent At:</strong> ${new Date(result.createdAt).toLocaleString()}</li>
        </ul>
        <br>
        <p>Best regards,</p>
        <p class="highlight">Valoriz Team</p>
      </div>
    </body>
  </html>
    `;

    
    try {

      await strapi.plugin('email').service('email').send({
        to: recipient,
        subject,
        html: htmlContent,
      });
    } catch (error) {
      strapi.log.error('Error sending email:', error);
    }
  },
};
