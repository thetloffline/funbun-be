const mongoose = require('mongoose')

const uristring = 
process.env.NODE_ENV === 'production' 
? process.env.MONGO_URI_PROD 
: process.env.MONGO_URI_DEV 

mongoose.connect(uristring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err)
  } else {
    console.log('Succeeded connected to: ' + uristring)
  }
})
