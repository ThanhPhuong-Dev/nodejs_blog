const express = require('express');
const router = express.Router();

const meControllers = require('../app/controllers/MeControllers');

router.get('/stored/courses', meControllers.listCourses);
router.get('/trash/courses', meControllers.trash);

module.exports = router;
