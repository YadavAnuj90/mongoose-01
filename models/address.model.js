const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    lane1 : String,
    landmark : String,
    street:String,
    city : String,
    country: String,
    pincode:Number
})

  module.exports = mongoose.model("Address", addressSchema)