const User = require('../models/User');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { hash, compare } =  require("bcrypt");
require("dotenv").config();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const UserOTPVerification = require('../models/userOTPVerification');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    
    await sendOTPVerificationEmail(user, res);
  } catch (error) {
    console.error('An error occurred while searching for the user', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    }
  });

const sendOTPVerificationEmail = async (user, res) => {
  
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const mailOptions = {
      from: process.env.MAIL_EMAIL,
      to: user.email,
      subject: "Verification code to enter dashboard",
      html: `<p>Enter the <b>${otp}</b> code to enter the website</p>`,
    };

    const saltRounds = 10;
    const hashedOTP = await bcrypt.hash(otp, saltRounds);

    const newOTPVerification = new UserOTPVerification({
      userId: user._id,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });

    await newOTPVerification.save();
    await transporter.sendMail(mailOptions);
    const token = generateToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000, 
    });
    res.json({
      status: "PENDING",
      message: "Verification code email sent",
      data: {
        userId: user._id,
        email: user.email,
        token: token, 
      }
    });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};

const generateToken = (userId) => {
  const secretKey = process.env.JWT_SECRET_KEY; 
  const expiresIn = '1h'; // Token expiration time

  const payload = {
    userId: userId,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
};

module.exports.verifyCode = async function verifyCode(req, res) {
  try{
      let {userId, otp} = req.body;
      if(!userId || !otp){
          throw Error("Empty code are not allowed");
      } else {
          const userOTPVerificationRecorder = await UserOTPVerification.find({
              userId,
          });
          if(userOTPVerificationRecorder.length <= 0){
              throw new Error("Account record dosen't exist ")
          }else{
              const {expiresAt} = userOTPVerificationRecorder[0];
              const hashedOTP = userOTPVerificationRecorder[0].otp;
        
              if(expiresAt < Date.now()){
                   await UserOTPVerification.deleteMany({userId});
                   throw new Error("code has expired , Please request again")
              }else{
                  const validOTP= await bcrypt.compare(otp, hashedOTP);
                  if(!validOTP){
                      //suplied otp is wrong
                      throw new Error("Invalid code passed . check your inbox")
                  }else{
                      //sucess
                      await User.updateOne({_id:userId}, {verfied: true})
                      await UserOTPVerification.deleteMany({userId})
                      res.json({
                          status: "VERIFIED",
                          message: "Account verified successfully",
                      })
                  }
              }
          }
      }
  }catch(error){
      res.json({
          status: "FAILED",
          message: error.message,
      })

  }
}
module.exports.resendOTPVerificationCode =async function resendOTPVerificationCode(req, res){
try{
    let {userId, email} = req.body;
    if(!userId || !email){
        throw Error("Empty user details are not allowed")
    } else {
        await UserOTPVerification.deleteMany({userId});
        sendOTPVerificationEmail({_id:userId, email},res);
    }
}
catch (error) {
   res.json({
    status: "FAILED",
    message: error.message,
   })
}
}