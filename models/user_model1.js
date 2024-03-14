const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    name:String,
    age:Number,
    Salary:Number
})
 module.exports  = mongoose.model("Employee",empSchema)
