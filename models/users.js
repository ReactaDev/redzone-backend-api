let mongoose = require('mongoose')
let Schema = mongoose.Schema;

var users = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

module.exports = mongoose.model('users', users)