const express = require('express')
const router = express.Router()

const newControllers = require('../app/controllers/newControllers')

router.get('/:lugr' , newControllers.show)
router.get('/' , newControllers.news)


module.exports = router