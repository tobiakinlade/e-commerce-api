const express = require('express')
const router = express.Router()

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/ProductController')

router.route('/').post(createProduct)
router.route('/').get(getAllProducts)
router.route('/:id').get(getSingleProduct)
router.route('/:id').patch(updateProduct)
router.route('/:id').delete(deleteProduct)
router.route('/uploadImage').post(uploadImage)

module.exports = router
