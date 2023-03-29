const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:Number,
    petname:String,
    pettype:String,
    petage:Number,
},{
    versionKey:false
})

const UserModel=mongoose.model("UserDetail",userSchema)

module.exports={UserModel};