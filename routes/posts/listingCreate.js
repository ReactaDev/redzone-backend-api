//import Dependecys
const express = require('express')
const router = express.Router()

//import models
const listing = require('../models/listings')

//posts

router.post('/create', (req, res) => {
    const address = req.body.address;
    
    console.log(address)
})


//export
module.exports = router