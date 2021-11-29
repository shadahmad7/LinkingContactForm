let express = require('express');
let app = express();
const path = require('path');
const host = '192.168.0.104'
let nodemailer = require('nodemailer');
const creds = require('./config/config')
var smtpTransport = require('nodemailer-smtp-transport');
// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

let transporter = nodemailer.createTransport(smtpTransport,{
  host: "www.gmail.com", 
  secureConnection: false,
    port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS, 
  },

  tls: {rejectUnauthorized: false},
  debug:true
  
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


app.post('http://192.168.0.104:3000/send', (req, res, next) => {
  var name = req.body.name
  var mobile = req.body.mobile
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n mobile: ${mobile} \n email: ${email} \n message: ${message} `

  var mail = {
    from: email,
    to: 'shad.ahmad0311@gmail.com',
    message: 'APi message',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server has started on https://${host}:${PORT}`))