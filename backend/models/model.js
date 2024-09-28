const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  title: String,
  description: String,
  content: String,
  keywords: String,
  lastUpdated: String,
  canonicalUrl: String,
  author: String,
  question1: String,
  answer1: String,
  question2: String,
  answer2: String,
  question3: String,
  answer3: String,
  altText: String,
  imageUrl: String,
  imageRedirectUrl: String
})

module.exports = mongoose.model('notes', NoteSchema)
