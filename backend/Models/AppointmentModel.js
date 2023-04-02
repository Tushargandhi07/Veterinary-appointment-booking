const mongoose=require("mongoose")

const appointmentSchema= mongoose.Schema({
    userID:String,
    name:String,
    email:String,
    contact:Number,
    doctor:String,
    date:String,
    time:String,
    symtoms:String,
    category:String,
    roomId:Number, 
    status:{ type: String, default: "pending"}
},{
    versionKey:false
})

const AppointmentModel=mongoose.model("Appointment",appointmentSchema)

module.exports={AppointmentModel};