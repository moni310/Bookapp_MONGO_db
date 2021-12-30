const mongoose=require("mongoose");
const schema =new mongoose.Schema({
    id:Number,
    title :String,
    author : String ,
    
});

module.exports = mongoose.model("Book",schema);
