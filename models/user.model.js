

const mongoose = require('mongoose')

//relation in term of nested form


const addressSchema = {
    lane1 : String,
    landmark : String,
    city : String,
    country: String,
    pincode:Number

}

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        min : 18
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minlength : 11
    },
    subjects : [String],


    //refrencing data from the database:::::

    
    address: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref:"Address"
    }

},{timestamps : true,versionKey : false})

module.exports =  mongoose.model("User",userSchema)



