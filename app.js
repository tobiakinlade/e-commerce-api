require('dotenv').config()
require('express-async-errors')

require('dotenv').config()
require('express-async-errors')

const express = require('express')
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const orderRouter = require('./routes/orderRoutes')
const fileUpload = require('express-fileupload')
const app = express()

const morgan = require('morgan')
const cookieParser = require('cookie-parser')

app.use(morgan('tiny'))
app.use(cookieParser(process.env.JWT_SECRET))

const connectDB = require('./db/connect')

app.use(express.json())

app.use(express.static('./public'))
app.use(fileUpload())

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.get('/api/v1', (req, res) => {
  console.log(req.signedCookies)
  res.send('This is an e-commerce website')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/orders', orderRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  await connectDB(process.env.MONGO_URI)
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
