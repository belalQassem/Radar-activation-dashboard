// ../models/userOTPVerification

const mongoose = require('mongoose');

const userOTPVerificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const UserOTPVerification = mongoose.model('UserOTPVerification', userOTPVerificationSchema);

module.exports = UserOTPVerification;
