const User = require('../models/User')

const getAllUsers = (req, res) => {
  res.send('This is an e-commerce website')
}

const getSingleUser = (req, res) => {
  res.send('Get single user')
}
const showCurrentUser = (req, res) => {
  res.send('Show current user')
}

const updateUser = (req, res) => {
  res.send('Update user')
}

const updateUserPassword = (req, res) => {
  res.send('Update user password')
}

module.exports = {
  getAllUsers,
  updateUser,
  getSingleUser,
  updateUserPassword,
  showCurrentUser,
}
