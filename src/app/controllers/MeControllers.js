const Courses = require('../models/courses');

class MeControllers {
  //[GET] me/store/courses
  listCourses(req, res, next) {
    Courses.find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render('me/storeCourses', {
          courses
        });
      })
      .catch(next);
  }

  //[GET] me/trash/courses
  trash(req, res, next) {
    Courses.findWithDeleted({deleted:true})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render('me/trashCourses', {
          courses
        });
      })
      .catch(next);
  }
}

module.exports = new MeControllers();
