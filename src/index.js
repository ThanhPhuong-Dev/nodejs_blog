const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://thanhphuong212002:123@cluster0thanhphuongdev.lltjhic.mongodb.net/DataBase_Courses?retryWrites=true&w=majority'
);

const Courses = mongoose.Schema({
  name: { type: String, maxlength: 255 },
  description: { type: String, maxlength: 600 },
  image: { type: String, maxlength: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

const userModel = mongoose.model('course', Courses);


app.get('/', (req, res) =>
  userModel
    .find({})
    .then((coures) => res.json(coures))
    .catch((error) => console.log(error))
);

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`);
});
