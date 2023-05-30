const mongoose = require('mongoose');
const express = require('express')
const router = express.Router();

const People = require('../../models/people')

router.get('/', async (req, res) => {
    try {
        const people = await People.find()

        if (people.length) {
            res.json(people)
        } else {
            res.json({
                status: 200,
                error: "No People found"
            })
        }
    } catch {
        res.send("No People")
    }
})

module.exports = router