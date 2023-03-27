const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_MAIL, // gmail account
      pass: process.env.SMTP_PASSWORD, // gmail password
    },
  });
  let info = await transporter.sendMail(mailOptions);
};

module.exports = {
  sendEmail,
};
