const { Router } = require('express')
const controller = require('../controllers')
const router = Router()

router.get('/', (req, res) => { res.send('route') })
router.get('/artist', controller.getArtists)
router.get('/artist/:id', (req, res) => { controller.getArtist })
router.get('/messages', controller.getMessages)
router.get('/requests', controller.getRequests)
router.get('/random', controller.randomArtist)

router.post('/artist', (req, req) => { controller.createArtist })
router.post('/messages', (req, res) => {  
    controller.postMessages
})
router.post('/requests', (req, res) => {
    controller.postRequest
})

router.destroy('/artist/:id', (req, res) => {controller.deleteArtist})  