const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
module.exports = Purchase;