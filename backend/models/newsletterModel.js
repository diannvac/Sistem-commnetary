const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({

  title: String,
  description: String,
  keywords: String,
  html: String,
  css: String,
  lastUpdated: Date,
})

module.exports = mongoose.model('newsletter', NoteSchema)
