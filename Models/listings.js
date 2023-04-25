const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var listing = new Schema({
    
    address: string,
    closingDate: string,
    lender: string,
    client: string,
    contractValue: string,
    commision: string,
    createdDate: Date.now

})


module.exports = mongoose.model('Listings', listing)