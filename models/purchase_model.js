const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create the general schema that will be used in our database
// each document sent will be having this Schema 
const PurchaseSchema = new Schema({
    first_name: String,
    last_name: String,
    phone: String,
    city: String,
    state: String,
    zip: String,
    quantity: Number
});

const Purchase = mongoose.model("Purchase" , PurchaseSchema);
// we need to export purchase object that we received
module.exports = Purchase;