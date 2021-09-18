const express = require('express')
const pageControllers = require('../controllers/pageControllers')

const router = express.Router()

router.route('/').get(pageControllers.getIndexPage)
router.route('/about').get(pageControllers.getAboutPage)
//router.route('/course').get(pageControllers.getCoursePage)


module.exports = router