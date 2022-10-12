const { register, login, logout } = require('../controllers/authController')

const express = require('express')
const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').post(logout)

module.exports = router
