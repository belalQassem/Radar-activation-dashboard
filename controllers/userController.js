const User = require('../models/User'); // استيراد موديل المستخدم
const bcrypt = require('bcrypt');


// قم بتعديل createUser ليشفر كلمة المرور قبل حفظها
module.exports.createUser = async (req, res) => {
 

const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // تشفير كلمة المرور

  const newUser = new User({
    username: username,
    password: hashedPassword
  });

  newUser.save()
    .then(() => {
      res.send('تم إدراج السجل بنجاح!');
    })
    .catch((error) => {
      res.send('حدث خطأ أثناء إدراج السجل: ' + error);
    });
};


