const config = require('./config.json');

var nodemailer = require('nodemailer');
var mailTransport = nodemailer.createTransport(config.emailConfig);
exports.sendEmail = function (arrayTo, content) {
    console.log("发送给:arrayTo");
    var options = {
        from: '"pjc" <2751607512@qq.com>',
        to: arrayTo,
        subject: '一封来自GoJeonPa的邮件',
        html: content 
    };

    mailTransport.sendMail(options, function (err, msg) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("send email success!");
        }
    });
} 
