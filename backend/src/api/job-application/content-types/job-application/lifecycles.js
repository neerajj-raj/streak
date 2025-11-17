const fetch = require('node-fetch');
const path = require('path');

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const existingData = await strapi.entityService.findOne("api::job-application.job-application", result.id, { populate: ['resume'] });
    const resumeFileIsNullHere = existingData.resume; // Check if resume is available immediately

    setTimeout(async () => {
      const existingData = await strapi.entityService.findOne("api::job-application.job-application", result.id, { populate: ['resume'] });
      const resumeFileIsAvailableHere = existingData.resume; // Check if resume is available after the delay

      if (resumeFileIsAvailableHere) {
        // Get the file URL and other necessary details
        const fileUrl = resumeFileIsAvailableHere.url; // Adjust according to your file structure
        const fileName = resumeFileIsAvailableHere.name || 'resume.pdf'; // Adjust based on your needs
    // Customize your email content here
      const recipient = 'careers@valoriz.com'; // Replace with recipient's email
      const subject = `Valoriz : ${result.position} - Job Application Received `;
      
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
          }
          li {
            margin-bottom: 10px;
            font-size: 15px;
            color: #555;
          }
          strong {
            color: black;
          }
          .highlight {
            color: #28a745;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>New Job Application Received</h1>
          <p>Dear Team,</p>
          <p>A new job application has been received from <strong>${result.first_name}&nbsp;${result.last_name || ''}</strong> for the position of <strong>${result.position || 'N/A'}</strong> at <span class="highlight">valoriz.com</span>.</p>
          <ul>
            <li><strong>Email:</strong> ${result.email}</li>
            <li><strong>Applied At:</strong> ${new Date(result.createdAt).toLocaleString()}</li>
            <li><a href="${fileUrl}" style="color: #007bff; text-decoration: none;">Click here to see Resume</a></li>
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
    } else {
      console.log('No resume file found after timeout');
    }
  }, 5000);
  },
};
