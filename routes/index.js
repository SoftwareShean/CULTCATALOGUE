const { Router } = require('express')
const controller = require('../controllers')
const router = Router()

router.get('/', (req, res) => { res.send('route') })
router.get('/artists', controller.getArtists)
router.get('/artists/:id', controller.getArtist)
router.post('/artists', controller.)