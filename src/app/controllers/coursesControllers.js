// const courses = require('../models/courses');
// const { default: mongoose } = require('mongoose');
const Courses = require('../models/courses');

class CoursesControllers {
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) => {
        course = course.toObject();
        res.render('Courses/course', { course });
      })
      .catch(next);
  }

  create(req, res) {
    res.render('Courses/create');
  }

  store(req, res, next) {
    const fromData = req.body;
    fromData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    Courses.create(req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  edit(req, res) {
    Courses.findOne({ _id: req.params.id }).then((course) => {
      res.render('Courses/update', course.toObject());
    });
  }

  //PUT
  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/'))
      .catch(next);
  }
  
  restored(req,res,next){
    Courses.restore({ _id: req.params.id }, req.body)
    .then(() => res.redirect('/me/stored/courses'))
    .catch(next);
  }

  //DELETE 
  delete(req, res, next) {
    Courses.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  destroy(req, res, next) {
    Courses.findOneAndDelete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CoursesControllers();
