const user = require('../model/user')
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "vorahiten2024katargam@gmail.com",
    pass: "ltvtfyhyrnakgczo",
  },
});

const sendMail = async (email) => {
  const info = await transporter.sendMail({
    from: 'vorahiten2024katargam@gmail.com',
    to: email,
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hi How are you Today</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
}


exports.pageview = async (req, res) => {
  try {
    const Alldata = await user.find()
    console.log(Alldata);
    res.status(200).json({
      status: 'success',
      message: 'data found is complate',
      data: Alldata
    })
  }
  catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: error.message
    })
  }
}
exports.createdata = async (req, res) => {
  try {
    let passdata = req.body
    let password = passdata.password;
    console.log("pppppp====", passdata);
    // 🔐 Password Validation Start
    if (password.length < 8) {
      return res.status(401).json({
        status: "fail",
        message: "Password must be at least 8 characters"
      });
    }

    if (!/[A-Z]/.test(password)) {
      return res.status(401).json({
        status: "fail",
        message: "Password must contain uppercase letter"
      });
    }

    if (!/[a-z]/.test(password)) {
      return res.status(401).json({
        status: "fail",
        message: "Password must contain lowercase letter"
      });
    }

    if (!/[0-9]/.test(password)) {
      return res.status(401).json({
        status: "fail",
        message: "Password must contain number"
      });
    }
    // 🔐 Password Validation End

    // 🔒 Hash password
    console.log("pppppp====", passdata);

    passdata.password = await bcrypt.hash(passdata.password, 10)

    // passdata.image = req.file.filename

    sendMail(passdata.email)
    console.log("============", passdata);
    var datas = await user.create(passdata)

    console.log(datas);





    res.status(200).json({
      status: 'success',
      message: 'data create successfull',
      data: datas
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message
    })
  }
}



exports.login = async (req, res) => {
  try {

    const passdata = req.body
    const emailVerify = await user.findOne({

      $or: [

        { username: passdata.username },
        { email: passdata.email },


      ]

    });
    console.log(emailVerify);
    if (!emailVerify) throw new Error("Invalid username or email ");


    const passVerify = await bcrypt.compare(
      passdata.password,
      emailVerify.password
    );
    console.log(passVerify);

    if (!passVerify) throw new Error("Invalid password");

    const token = jwt.sign({ id: emailVerify._id }, 'ten')

    res.status(200).json({
      status: "success",
      message: "Login user Success",
      data: emailVerify, token
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message
    });
  }
};