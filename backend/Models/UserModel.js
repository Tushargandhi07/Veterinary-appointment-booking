const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    contact:Number,
    petname:String,
    pettype:String,
    petage:Number,
})

const UserModel=mongoose.model("UserDetail",userSchema)

module.exports={UserModel};