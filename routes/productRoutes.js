const express = require('express')
const router = express.Router()
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication')

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/ProductController')

router
  .route('/')
  .post([authenticateUser, authorizePermissions('admin')], createProduct)
router.route('/').get(getAllProducts)

router
  .route('/uploadImage')
  .post([authenticateUser, authorizePermissions('admin')], uploadImage)

router.route('/:id').get(getSingleProduct)
router
  .route('/:id')
  .patch([authenticateUser, authorizePermissions('admin')], updateProduct)
router
  .route('/:id')
  .delete([authenticateUser, authorizePermissions('admin')], deleteProduct)

module.exports = router
