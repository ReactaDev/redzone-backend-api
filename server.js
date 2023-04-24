const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 8080

app.use(express.json())

//server code here

app.post('/test', (req, res) => {
    const body1 = req.body.message

    res.send(body1)
})


//listen on port

app.listen(8080)