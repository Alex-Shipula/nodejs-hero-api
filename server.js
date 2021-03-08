const dotenv = require('dotenv')
const { mongooseConnect } = require('./mongoDb/mongooseConnect')
mongooseConnect()

const app = require('./app')

const server = app.listen(3000, () => {
  console.log('App running...')
})

process.on('unhandledRejection', err => {
  console.log(err.name, err.message)
  console.log('UNHANDLER REJECTION! Shuting down...')
  server.close(() => {
    process.exit(1)
  })
})
