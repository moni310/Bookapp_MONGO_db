const mongoose = require("mongoose")
const connectionbuild = async ( ) =>{
   try{
       await mongoose.connect("mongodb+srv://Moni:navgurukul@cluster0.zab2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
       console.log("Hello !, Coder ")

   }
   catch(err){
       console.log(err)

   }
    

}
module.exports = connectionbuild