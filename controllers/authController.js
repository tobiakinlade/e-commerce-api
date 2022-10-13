const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const CustomError = require('../errors')
const { attachCookiesToResponse } = require('../utils')

const register = async (req, res) => {
  const { email, name, password } = req.body
  const emailAlreadyExists = await User.findOne({ email })
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists')
  }

  // generate first user to be an admin
  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'admin' : 'user'

  const user = await User.create({ name, email, password, role })
  const tokenUser = { name: user.name, userId: user._id, role: user.role }
  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.OK).json({ user: tokenUser })
}
const login = (req, res) => {
  res.send(' login ')
}
const logout = (req, res) => {
  res.send(' logout ')
}

module.exports = {
  register,
  login,
  logout,
}
