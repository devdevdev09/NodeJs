var nodemailer = require('nodemailer');

const USER_NAME    = process.argv[2];
const USER_PASS    = process.argv[3];
const TO_USER_NAME = process.argv[4];

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: USER_NAME,
    pass: USER_PASS
  }
});

var mailOptions = {
  from: USER_NAME,
  to: TO_USER_NAME,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});