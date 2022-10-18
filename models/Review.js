const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Please provide review title'],
      maxlength: [100, 'Review title must be at most 100 characters'],
    },

    comment: {
      type: String,
      required: [true, 'Please provide comment'],
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please provide rating'],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

ReviewSchema.index(
  { product: 1, user: 1 },
  {
    unique: true,
  }
)

ReviewSchema.statics.calculateAverage = async function (productId) {
  console.log(productId)
}

ReviewSchema.post('save', async function () {
  await this.constructor.calculateAverage(this.product)
})

ReviewSchema.post('remove', async function () {
  await this.constructor.calculateAverage(this.product)
})

module.exports = mongoose.model('Review', ReviewSchema)
