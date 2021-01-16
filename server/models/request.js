const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Request = new Schema(
  {
    name: { type: String, required: true },
    piece1: { type: String, required: true },
    piece2: { type: String, required: true },
    gallery: { type: String, required: true }
  }
);

module.exports = mongoose.model('request', Request)