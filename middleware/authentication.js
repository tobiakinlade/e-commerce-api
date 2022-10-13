const CustomError = require('../errors')
const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }
  try {
    const { name, userId, role } = isTokenValid({ token })
    req.user = { name, userId, role }
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }

  next()
}

module.exports = { authenticateUser }
