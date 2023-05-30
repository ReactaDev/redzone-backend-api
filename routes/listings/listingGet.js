const express = require('express')
const router = express.Router()

const Listings = require('../../models/listings')

router.use(express.json())

// * gets listings of a user
// ! Created User means the use that created the listing. This does NOT create a new user
router.get('/:createdUser', async (req, res) => {

    try {
        // makes a variable called 'listings' and uses the find() to search for the user that created the listing.
        const listings = await Listings.find({createdUser: req.params.createdUser});
        
        if (listings.length){
            // ? Returns Listings
            res.json(listings)
        } else {
            // ? Returns errror on no listings
            res.json({
                message: "There are no listings",
                sucess: false
            })
        }
    } catch(err) {
        res.json(err)
    }

})

// ***REMOVE BEFORE PRODUCTION***
router.get('/', async (req, res) => {
    const listings = await Listings.find()

    res.json(listings)
})

router.get('/rickroll', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
})
// Exports listings as router
module.exports = router