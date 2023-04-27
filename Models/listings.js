const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var listing = new Schema({
    
    address: String,
    closingDate: String,
    lender: String,
    client: String,
    contractValue: String,
    commision: String,
    createdUser: String,

})


module.exports = mongoose.model('listings', listing)