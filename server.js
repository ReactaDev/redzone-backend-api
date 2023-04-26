const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv/config");
const port = 8080
//import routes
//auth posts
const authRoutes = require('./routes/posts/auth')
app.use('/auth', authRoutes)

const listingCreateRoutes = require('./routes/posts/listingCreate')
app.use('/listing', listingCreateRoutes)

const listingGetRoute = require('./routes/posts/listingGet')
app.use('/listing', listingGetRoute)

//jsob parser


//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })


app.use(express.json())

//server code here

app.post('/test', (req, res) => {
    const body1 = req.body.message

    res.send(body1)
})


//listen on port

app.listen(8080)