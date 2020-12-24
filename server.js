const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db/connection')
const Artist = require('./models/artist')
const Message = require('./models/message')
const Request = require('./models/request')
const ACCESS = process.env.ACCESS;
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))

app.get('/', (req, res) => res.send(`This is the root!`))

app.get('/artist', async (req, res) => {
  try {
    const artist = await Artist.find()
    res.json(artist)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.get('/artist/:id', async (req, res) => {
  try {
    const artist = await new Artist(req.body)
    await artist.save()
    res.status(201).json(artist)
  } catch {
    console.log(error)
    res.status(500).json({error: error.message})
  }
})

app.post('/artist', async (req, res) => {
  try {
    const artist = await new Artist(req.body)
    await artist.save()
    res.status(201).json(artist)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
})

app.put('/artist/:id', async (req, res) => {
  const { id } = req.params
  await Artist.findByIdAndUpdate(id, req.body, { new: true }, (error, artist) => {
    if (error) {
      return res.status(500).json({error: error.message})
    } if (!artist) {
      return res.status(404).json({message: 'Artist not found!'})
    }
    res.status(200).json(artist)
  })
})

app.delete('/Artist/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Artist.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Artist deleted")
    } throw new Error("Artist not found")
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.get('/messages', async (req, res) => {
  try {
    const message = await Message.find();
    res.json(message)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.post('/messages', async (req, res) => {
  try {
    const message = await new Message(req.body)
    await message.save()
    res.status(201).json(message)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.get('/requests', async (req, res) => {
  try {
    const artistsRequest = await Request.find();
    res.json(artistsRequest)
  } catch (error) {
    res,status(500).json({error: error.message})
  }
}) 

app.post('/requests', async (req, res) => {
  try {
    const artistsRequest = await new Request(req.body);
    await artistsRequest.save()
    res.status(200).json(artistsRequest)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

