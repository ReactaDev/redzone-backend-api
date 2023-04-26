const express = require('express')
const router = express.Router()

const Listings = require('../../models/listings')

router.use(express.json())

router.get('/get', async (req, res) => {

    try {
        const listings = await Listings.find();
        res.json(listings)
    } catch(err) {
        res.json(err)
    }

})

module.exports = router