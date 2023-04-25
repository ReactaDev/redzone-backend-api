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

const data = mongoose.model("data", listing)

module.exports = data