const mongoose=require("mongoose")

const doctorSchema= mongoose.Schema({
    name:String,
    gender:String,
    age:Number,
    experience:Number,
    specialization:String
},{
    versionKey:false
})

const DoctorModel=mongoose.model("DoctorDetail",doctorSchema)

module.exports={DoctorModel};