const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.json());

// تكوين الـ Express app وتعيين المسارات
const routes = require('./config/routes');
app.use(routes);

const port = 3000;

// إنشاء اتصال بقاعدة البيانات
mongoose.connect('mongodb://127.0.0.1:27017/project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connetion Successfull');
    // تشغيل الخادم بعد نجاح الاتصال بقاعدة البيانات
    app.listen(port, () => {
      console.log(`Server running on port  ${port}`);
    });
  })
  .catch((err) => {
    console.error('DB Connetion Failed',err);
  });
