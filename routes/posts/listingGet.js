const express = require('express')
const router = express.Router()

const Listings = require('../../models/listings')

router.use(express.json())

//gets posts of a user

router.get('/get/:createdUser', async (req, res) => {

    try {
        const listings = await Listings.find({createdUser: req.params.createdUser});

        if (listings.length){
            res.json(listings)
        } else {
            res.json({
                message: "There are no listings",
                sucess: false
            })
        }
    } catch(err) {
        res.json(err)
    }

})

//gets all post
// ***REMOVE BEFORE PRODUCTION***
router.get('/get', async (req, res) => {
    const listings = await Listings.find()

    res.json(listings)
})

module.exports = router