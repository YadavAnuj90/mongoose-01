
const mongoose = require('mongoose');


const user_model = require('./models/user.model');
const address_model = require('./models/address.model');
const userModel = require('./models/user.model');


//  I would connect with the MongoDb
 
//  method 1:Event dreven
 
 
mongoose.connect("mongodb://localhost/mongo_db")

const db = mongoose.connection;

db.once("open", ()=>{
    console.log("Mongo connected!");

    init()
    dbQueries()
})

db.on("error", ()=>{
    console.log("Error while connecting to DB:")
})

async function dbQueries() {
    //Featching the data from mongoDB
    const user = await user_model.findById("65da338c56c148dff3e4a320")

    console.log(user);
    
  try{
    const users = await user_model.find({name: "Khushi"})
    console.log(users);
  }catch(error){
    console.log("Error while featching from DB:");
  }
}
async function init() {
     //logic to insert in db
     const user_obj = {
        name:"Aman Saini",
        age:20,
        email : "sainiAman90@gmail.com",
        subjects : ["Engish","ethics","Biology","Social Science"]

     }
     try {
         //inserted inside the Users Collection

        const user = await user_model.create(user_obj)
        console.log("User Created :",user);
     } catch (err) {
        console.log("Error while inserting ",err);
     }
   

     //Updating data in database:::::::::::::
     try{
        const user = await user_model.findOne({name: "Anuj"})

        user.hobby = "Playing Cricket"
        user.email = "sqdghdlo@gmail.com"
         
        const user_updated = await user.save()

        console.log(user_updated);
      }catch(error){
        console.log("Error while Updating data in  DB:");
      }
      


      //deletion in database:::::::::::;

      const userRec = await user_model.deleteOne({name: "Anuj"})

      console.log(userRec);
      const users = await user_model.find({name:"Anuj"})
      console.log(users);



//relationshiping in nested schema::::::::::::::::
async function init() {
    //logic to insert in db

    /** 
    const user_obj = {
       name:"Anuj ",
       age:20,
       email : "yadavAnuj90@gmail.com",
       subjects : ["Engish","ethics","Biology","Social Science"],
       address : {
          lane1 : "link",
          landmark:"know",
          city:"Noida",
          country:"India",
          pincode:201203
       }

    }
    try {
        //inserted inside the Users Collection

       const user = await user_model.create(user_obj)
       console.log("User Created :",user);
    } catch (err) {
       console.log("Error while inserting ",err);
    }

    
**/
    
   //   * 1.create/insert an address object
   //   * 2.insert the user object with address object with the _id
   //   * 
     

    const  address = {
        lane1 : "link",
        landmark:"know",
        street:"link2",
        city:"Noida",
        country:"India",
        pincode:201203
     }
     const add_obj = await address_model.create(address)
   
     const user_obj = {
        name:"Anuj ",
        age:20,
        email : "yadavAnuj90@gmail.com",
        subjects : ["Engish","ethics","Biology","Social Science"],
        address : add_obj._id
     }
   
     const user = await user_model.create(user_obj)
     console.log(user);
}


// mongoose.connect("mongodb://localhost/mongo_db");

// const db = mongoose.connection;

// db.once("open" , ()=>{
//    console.log("Connected to MongoDB");
// })
// db.on("error", ()=>{
//    console.log("Error while connecting to db");
// })




}

