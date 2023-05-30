const express = require('express')
const router = express.Router()

const people = require('../../models/people')

router.use(express.json())

router.post('/', async (req, res) => {
    const person = new people({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: String
    })

    const savedPerson = await person.save()
    res.json(savedPerson)
})

module.exports = router