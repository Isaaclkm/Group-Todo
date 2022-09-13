const express = require('express')
const router = express.Router()
const wishController = require('../controllers/wishes') 
const {ensureAuth} = require('../middleware/auth')

router.get('/', ensureAuth, wishController.getWishes)

router.post('/addWish', wishController.makeWish)

router.put('/markWishGranted', wishController.markGranted)

router.put('/markWhising', wishController.markWishing)

router.delete('/deleteWish', wishController.deleteWish)



module.exports = router
