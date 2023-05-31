/*
! API Is NOT secured
TODO: Route Auth Perms Through from Auth0

! Not Producation Ready
*/

//import Dependecys
const express = require('express');
const router = express.Router();

router.use(express.json())

//import models
const Listings = require('../../models/listings');

//posts
// * Creates a new listing with the requiried data
router.post('/', async (req, res) => {
   const Listing = new Listings({
    address: req.body.address,
    closingDate: req.body.closingDate,
    lender: req.body.lender,
    client: req.body.client, /* 
    ? Client Data Construction, refer to /../../models/listings to follow proper data formating
      */
    contractValue: req.body.contractValue,
    commision: req.body.commision,
    createdUser: req.body.createdUser
   });

   const savedListing = await Listing.save()
   res.json(savedListing)

   // ! DEBUG Funcation
   // ! Remove before production
   console.log("Listing Created")
})


//export
module.exports = router