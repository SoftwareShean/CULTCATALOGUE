const Artist = require('../models/artist')
const db = require('../db/connection')

db.normalize('error', console.error.bind(console, 'MongoDB connection error:'))

const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    res.json(artists)
  } catch {
    return res.status(500).send(error.message)
  }
}

const getArtist = async (req, res) => {
  try {
    const {id} = req.params
    const artist = await Artist.find(id)
    res.json(artist)
  } catch {

  }
}

const createArtist = async (req, res) => {
  try {
    const artistData = req.body
    const artist = await new Artist(artistData)
    await artist.save()
    res.json(artist)
  } catch {
    return res.status(500).send(error.message)
  }
} 

const updateArtist = async (req, res) => {
    try {
      const artistData = req.body
      const {id} = req.params 
      const artist = await Artist.findByIdAndUpdate(id, artistData, {new: true})
      res.json(artist)
    } catch {
      return res.status(500).send(error.message)
    }
  }

const deleteArtist = async (req, res) => {
    try {
      const { id } = req.params
      const artist = await Artist.findByIdAndDelete(id)
      res.json(artist)
    } catch {

    }
  }


module.exports = {
  getArtists,
  getArtist,
  createArtist,
  updateArtist, 
  deleteArtist
}

