const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artist = new Schema(
  {
    name: { type: String, required: true },
    portraitImg: { type: String, required: true }, 
    artistBio: { type: String, required: true },
    galleryName: { type: String, required: true }, 
  },
  {timestamps: true}
)

module.exports = mongoose.model('artist', Artist)