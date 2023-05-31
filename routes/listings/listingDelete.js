const express = require('express')
const router = express.Router()


router.use(express.json())
//import model
const Listings = require('../../models/listings')

//posts
router.delete('/:listingID', async (req, res) =>{

    const listingID = Listings.find(req.params._id)
    if (listingID) {
        res.send({
            status: 200,
            output: '${listingID}'
        })
        const deletedListing = await Listings.deleteOne({_id: req.params.listingID})
    } else {
        res.send({
            status: 200,
            error: "listing not found"
        })
    }

})

//exports
module.exports = router