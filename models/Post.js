const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Tao model
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('post', postSchema)
