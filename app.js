require('dotenv').config()
require('express-async-errors')

require('dotenv').config()
require('express-async-errors')

const express = require('express')
const authRouter = require('./routes/authRoute')
const app = express()

const morgan = require('morgan')
const cookieParser = require('cookie-parser')
app.use(morgan('tiny'))
app.use(cookieParser())

const connectDB = require('./db/connect')

app.use(express.json())

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.get('/api/v1', (req, res) => {
  console.log(req.cookies)
  res.send('This is an e-commerce website')
})

app.use('/api/v1/auth', authRouter)

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
