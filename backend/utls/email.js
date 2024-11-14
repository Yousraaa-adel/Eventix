const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: `"Eventix" <${process.env.EMAIL_USERNAME}>`, // Adding a proper "from" format
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html, // Ensure the HTML content includes the inline image reference
    attachments: [
      {
        filename: 'event-qr-code.png',
        content: options.attachment, // Ensure this is the QR code buffer passed to the function
        cid: 'qrCodeImage', // Make sure the cid matches in the HTML img tag
      },
    ],
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
