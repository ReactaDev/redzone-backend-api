const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv/config");

//Runs on 3000 for NGINX
//NGINX proxy passes to 3000 to 80
const port = 3000

//DB Connection Creds
const DB_CONNECTION = process.env.DB_CONNECTION

//import routes
const listingCreateRoutes = require('./routes/listings/listingCreate')
app.use('/listing', listingCreateRoutes)

const listingGetRoute = require('./routes/listings/listingGet')
app.use('/listing', listingGetRoute)

const listingDeleteRoute = require('./routes/listings/listingDelete')
app.use('/listing', listingDeleteRoute)

const personCreateRouter = require('./routes/people/personCreate')
app.use('/person', personCreateRouter)

const personGetRouter = require('./routes/people/personGet')
app.use('/person', personGetRouter)

//connect to db
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true })

//json parser
app.use(express.json())

//Server Test Route
app.post('/test', (req, res) => {
    const body1 = req.body.message

    res.send(body1)
})

//listen on port
app.listen(3000, () => {
    console.log('Started on port 3000')
})