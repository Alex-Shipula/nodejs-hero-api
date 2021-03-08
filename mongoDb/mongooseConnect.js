const config = require('../config')
const mongoose = require('mongoose')

exports.mongooseConnect = () => {
  const mongooseConnect = config.DATABASE_LOCAL
  return mongoose.connect(mongooseConnect, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}


