var express = require('express');
const multiparty = require("multiparty");
require("dotenv").config();

var path = require('path');
const nodemailer = require("nodemailer");

var app = express();
const PORT = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD 
  },
  tls: {
    rejectUnauthorized: false
  }
});
// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.use(express.static(path.join(__dirname, '/client/build')));

app.post('/email', async (req, res) => {
  //1.
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    
    Object.keys(fields).forEach(function (property) {

      data[property] = fields[property].toString();
    });

    //2. You can configure the object however you want
    const mail = {
      from: data.name,
      to: process.env.EMAIL,
      subject: data.subject,
      phone:data.phone_no,
      text: `Name: ${data.name}\nEmail: <${data.email}> \nMessage: ${data.message}\n
      --Email from Crown Marketing Contact Us Form`,

    };

    //3.
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
    // res.sendFile(path.join(__dirname, '/client/build', 'index.html')); 
  })
})



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));

});


app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});