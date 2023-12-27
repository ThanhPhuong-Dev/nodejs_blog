const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path'); // Import thư viện path
const app = express();
const port = 2002;
const route = require('./routes/route');
const db = require('./config/db/connect');
const methodOverride = require('method-override');
//template engine

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
const hbs = exphbs.create({
  extname: '.hbs',
  helpers: {
    sum: function (a, b) {
      return a + b;
    }
  }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Đặt đường dẫn đến thư mục views

db.connect();
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
