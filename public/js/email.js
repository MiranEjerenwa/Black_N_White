// Gmail Nodemailer Code
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bnwtest7133@gmail.com',
    pass: 'password12.'
  }
});

// Setup email Data with Unicode Symbols
var mailOptions = {
  from: 'bnwtest7133@gmail.com',  //Sender Address
  to: 'genieyang93@gmail.com, 212579323@ge.com', //List of recievers
  subject: 'My Apps: Access Re- Enabled', // Subject Line
  text: 'MyApps Account Unlocked!', //plain text body
  html:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>TEMPLATE</title>
  </head>
  
  <body>
  <style type="text/css">
  body, table, td {
      font-family: Arial, Helvetica, sans-serif !important; 
      font-size: 10pt;
  }
  </style>
  <div align="center">
  <table width="850" border="0" cellpadding="0" cellspacing="5" id="backstage" style="background-color:#E8E8E8;">
    <tr>
      <td align="center">
      
      <table width="100%" border="0" cellspacing="0" cellpadding="0" id="stage">
        <tr>
          <td>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" id="header" style="background-color:#FFFFFF;">
                    <tr>
                      <td style="padding: 8pt 4pt 0pt 4pt; border-image: url('./images/myapps.jpg'); align-content: center;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="color: #FFFFFF;">
                            <tr>
                                  <td width="120" style="text-align:center;"><img src="./images/myapps.jpg" width="100%" height="50%"/></td>
                              </tr>
                          </table> 
                      </td>
                    </tr>
                  </table>  
              </td>
          </tr>
          <tr>
              <td>
          
          <table width="100%" border="0" cellspacing="4" cellpadding="6" id="content" style="background-color:#FFFFFF;">
            <tr>
              <td style="padding: 8pt;">
              <p style="margin: 8pt 0 6pt 0;"><span style="font-weight:bold">Subject: MyApps:  Acces Re-enabled</span></p>
              <p style="margin: 0 0 16pt 0;">Debugging for your system is now complete and you may now continue to use MyApps Anywhere.</p>
              <p style="margin: 0 0 16pt 0;">Your ticket will now be closed, please reach out with any further questions.</p>
              <p style="margin: 0 0 6pt 0;">Thanks,</p>
              <p style="margin: 0 0 6pt 0;">The MyApps Team</p>
                
                    </table>
                  </td>
              </tr>
          
              <tr>
            <td>
              <table width="100%" border="0" cellspacing="2" cellpadding="0" id="boiler">
                <tr>
                  <td style="font-size:9pt; text-align:center; padding-top:6pt;">This is an automated message sent from an unmonitored mailbox.</td> 
                </tr> 
              </table>
            </td> 
              </div>
      </body>
      </html>
  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})

// //Need to make a function that concats SSO and "ge.com" to form an email address

// function createEmail() {
  
// }

// // Nodemailer with Handle Bars and Email Template
// const nodemailer = require('nodemailer'),
//   transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'bnwtest7133@gmail.com',
//         pass: 'password12.'
//       },
//     }),

//   EmailTemplate = require('email-templates').EmailTemplate,
//   path = require('path'),
//   Promise = require('bluebird');

// // Testing only will need to add concat SSOs later
//  let users = [
//    {
//     name: 'Genie Yang',
//     email: 'genieyang93@gmail.com'
//    },
//    {
//     name: 'Genie GE Email',
//     email: '212579323@ge.com'
//    },   
//    {
//     // name: 'Valentin Meica',
//     // email: 'Valentin.Meica@ge.com'
//    }, 
   
//  ];


//   function sendEmail(obj) {
//     return transporter.sendMail(obj);
//   }

//   function loadTemplate(templateName, contexts) {
//     let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
//     return Promise.all(contexts.map((context) => {
//       return new Promise((resolve, reject) => {
//         template.render(context, (err, result) => {
//           if(err) reject (err);
//           else resolve({
//             email: result,
//             context,
//           });
//         });
//       });
//     }));
//   }
  
//   loadTemplate('welcome', users).then((results) => {
//     return Promise.all(results.map((result) => {
//       sendEmail({
//         to: result.context.email,
//         from: 'MyApps Team',
//         subject: result.email.subject,
//         html: result.email.html,
//         text: result.email.text,
//       });
//     }));

//   }).then(() => {
//     console.log('Yay!')
//   });
