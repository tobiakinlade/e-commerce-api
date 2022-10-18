const getAllOrders = async (req, res) => {
  res.send('get all orders')
}

const getSingleOrder = async (req, res) => {
  res.send('get single order')
}
const getCurrentUserOrders = async (req, res) => {
  res.send('get user orders')
}
const createOrder = async (req, res) => {
  res.send('create orders')
}

const updateOrder = async (req, res) => {
  res.send('update  orders')
}

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
}
