const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://thanhphuong212002:123@cluster0thanhphuongdev.lltjhic.mongodb.net/DataBase_Courses?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('Kết nối thành công!');
  } catch (error) {
    console.error('Lỗi kết nối:', error.message);
  }
}

module.exports = { connect };
