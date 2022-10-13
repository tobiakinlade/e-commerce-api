const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const CustomError = require('../errors')
const { attachCookiesToResponse } = require('../utils')

const getAllUsers = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password')

  res.status(StatusCodes.OK).json({ users })
}

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-password')
  if (!user) {
    throw new CustomError.NotFoundError(` No user with id ${req.params.id}`)
  }
  res.status(StatusCodes.OK).json({ user })
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
