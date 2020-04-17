require('dotenv').config()
const createError = require('http-errors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const db = require('./db')
const cors = require('express-cors')
const fileUpload = require('express-fileupload')

const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const router = require('./routes/routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  allowedOrigins: [
    'localhost:3000',
    'localhost:8080',
    '0.0.0.0:3000',
    '0.0.0.0:8080',
    'arvuti.local:8080',
    'arvuti.local:3000',
    '127.0.0.1:3000',
    '127.0.0.1:8080'
  ]
}))

app.use(fileUpload(
  /* {
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'public/images')
  } */
))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
