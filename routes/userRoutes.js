const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getSingleUser,
  updateUser,
  updateUserPassword,
  showCurrentUser,
} = require('../controllers/userController')

router.route('/').get(getAllUsers)
router.route('/showMe').get(showCurrentUser)
router.route('/updateUser').post(updateUser)
router.route('/updateUserPassword').post(updateUserPassword)
router.route('/:id').get(getSingleUser)

module.exports = router
