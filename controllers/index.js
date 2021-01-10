const Artist = require('../models/artist.js')
const Message = require('./models/message.js')
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
    const { id } = req.params
    const artist = await Artist.find(id)
    res.json(artist)
  } catch {
    return res.status(500).send(error.message)
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
      const { id } = req.params 
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

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find()
    res.json(messages)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postMessages = async (req, res) => {
  try { 
    const messageData = req.body
    const message = await new Message(messageData)
    await message.save();
    res.send(message)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postRequest = async (req, res) => {
  try {
    const requestData = req.body
    const request = await new Request(requestData)
    await request.save()
    res.send(request)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const randomArtist = async (req, res) => {
  try {
    const response = await Artist.find()
    const random = response[Math.floor(Math.random() * response.length)]
    res.json(random)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getArtists,
  getArtist,
  createArtist,
  updateArtist, 
  deleteArtist, 
  getMessages,
  postMessages,
  getRequests, 
  postRequest,
  randomArtist,
}

