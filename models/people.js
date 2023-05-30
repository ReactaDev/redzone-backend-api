let mongoose = require('mongoose')
let schema = mongoose.Schema;

var people = new schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String
})

module.exports = mongoose.model('people', people)