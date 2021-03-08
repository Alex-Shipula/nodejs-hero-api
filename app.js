const express = require('express')
const morgan = require('morgan');
const app = express()
const heroesRouter = require('./routes/heroesRouter')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json())

app.use('/api/v1/heroes', heroesRouter)

module.exports = app
