var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'youremail@gmail.com',
        pass : 'yourpassword'
    }
});

var mailOptions = {
    form : 'yourmail@gmail.com',
    to : 'myfriend@yahoo.com',
    subject : 'Sending Email using node.js',
    text : 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent : ' + info.response);
    }
});