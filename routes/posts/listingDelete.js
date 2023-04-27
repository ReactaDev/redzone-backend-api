const express = require('express')
const router = express.Router()


router.use(express.json())
//import model
const Listings = require('../../models/listings')

//posts

//delete
router.delete('/delete/:listingID', async (req, res) =>{

    const listingID = Listings.find(req.params._id)
    res.send('Listing Deleted')

    const deletedListing = await Listings.deleteOne({_id: req.params.listingID})

})





//exports
module.exports = router