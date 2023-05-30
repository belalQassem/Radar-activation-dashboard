const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');


router.post('/login', loginController.login);
router.post('/login/verifyCode', loginController.verifyCode);
router.post('/login/verifyCode/resendOTPVerificationCode', loginController.resendOTPVerificationCode);
router.post('/users', userController.createUser);

module.exports = router;
