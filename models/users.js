// Import Dependences
let mongoose = require('mongoose')
let Schema = mongoose.Schema;

// Datamodel Structed
var users = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

// Exports the model
module.exports = mongoose.model('users', users)