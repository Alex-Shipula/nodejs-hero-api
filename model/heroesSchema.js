const mongoose = require('mongoose')

const heroesSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: [true, 'Please tell your name'],
    unique: true,
  },
  realName: {
    type: String,
    required: [true, 'Please tell your real name']
  },
  originDescription: {
    type: String,
    required: [true, 'Please tell your  origin description']
  },
  superPowers: {
    type: String,
    required: [true, 'Please tell your super powers']
  },
  catchPhrase: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
})

const Heroes = mongoose.model('Heroes', heroesSchema)

module.exports = Heroes
