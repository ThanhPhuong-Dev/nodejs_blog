// const courses = require('../models/courses');
const Courses = require('../models/courses');

class SiteControllers {
  home(req, res, next) {
    Courses.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render('home', { courses });
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteControllers();
