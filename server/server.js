const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 3001
const db = require('./db/connection');
const Artist = require('./models/artist.js');
const Message = require('./models/message.js');
const Request = require('./models/request.js');
const cors = require('cors');
const helmet = require("helmet");
const passport = require("passport-http-bearer");
const auth = require("oauth2orize")
// const redisClient = require('redis').createClient();

const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', '/client/build');
const server = auth.createServer();
// const limiter = require('express-limiter')(app, redisClient);


app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(helmet());

// limiter({
//   lookup: ['connection.remoteAddress'],
//   total: 100,
//   expire: 1000 * 60 * 60
// })

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

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

app.get(`/messages`, async (req, res) => {
  try {
    const message = await Message.find();
    res.json(message)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.post(`/messages`, async (req, res) => {
  try {
    const message = await new Message(req.body)
    await message.save()
    res.status(201).json(message)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.get(`/requests`, async (req, res) => {
  try {
    const artistsRequest = await Request.find();
    res.json(artistsRequest)
  } catch (error) {
    res,status(500).json({error: error.message})
  }
}) 

app.post(`/requests`, async (req, res) => {
  try {
    const artistsRequest = await new Request(req.body);
    await artistsRequest.save()
    res.status(200).json(artistsRequest)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.get('/random', async (req, res) => { 
  try {
    const randomArtist = await Artist.find();
    const random = randomArtist[Math.floor(Math.random() * randomArtist.length)]
    res.json(random)
  } catch(error) {
    res.status(500).json({error: error.message})
  }
})

