const sendMail = require('./mail');

const schedule = require("node-schedule");

setTimeout(() => {
  sendMail();
}, 1000*40);

schedule.scheduleJob('10 10 10 * * *', function(){
    sendMail();
});

