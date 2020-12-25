const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Message = new Schema(
  {
    email: { type: String, required: true },
    message: { type: String, required: true }
  }
);

module.exports = mongoose.model('message', Message)