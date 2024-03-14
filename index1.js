const mongoose = require('mongoose')
const user_model1 = require('./models/user_model1');

/** 
 I would connect with the MongoDb
 
 method 1:Event dreven
 **/

 mongoose.connect("mongodb://localhost/mongo_db");
 
 const db =mongoose.connection;
 db.once("open", ()=>{
    console.log("Database connect succesfully:");

    init()
 })
 db.on("error" , ()=>{
    console.log("error while connecting db.");
 })

   async function init() {
         //logic to insert in db
     const emp_obj ={
         name:"Anuj kumar",
         age:19,
         Salary:19000
     }

     try {
        const emp = await user_model1.create(emp_obj)
        console.log("User Created :",emp);
     } catch (error) {
        console.log("Error to creation",error);
     }
 }

