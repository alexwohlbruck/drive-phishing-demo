const nodemailer = require('nodemailer');
const emailTemplate = require('./email-template');

let transporter;

nodemailer.createTestAccount((err, account) => {
    if (err) return console.log(err);
    
    transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }
   });
});

module.exports = ({sender, recipient}) => {
    const fileName = "Unit 4 Review";
    
    const email = emailTemplate({
       email: sender.email,
       fileUrl: 'https://mr-steal-yo-girls-contact-info-alexwohlbruck.c9users.io/auth',
       fileName: 'Unit 4 Review'
   });
   
   let mailOptions = {
       from: `"${sender.name} (via Google Docs)" <drive-shares-noreply@google.com>`,
       to: recipient.email,
       subject: `${fileName} - Invitation to edit`,
       text: email.plainText,
       html: email.html
   };
   
   transporter.sendMail(mailOptions, (err, info) => {
       if (err) return console.log(err);
       transporter.close();
       
       console.log('Message sent', info);
   });
};