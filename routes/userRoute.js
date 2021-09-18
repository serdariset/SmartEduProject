const express = require('express')

const authControllers = require('../controllers/authControllers')

const router = express.Router()

router.route('/signup').post(authControllers.createUser) //localhost:3000/users/signup
router.route('/login').post(authControllers.loginUser) //localhost:3000/users/login

module.exports = router