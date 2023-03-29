const express = require("express");
const {AppointmentModel} = require("../Models/AppointmentModel")

const AppointmentRouter = express.Router();

AppointmentRouter.get("/getall",async(req,res)=>{
    try {
        let Data = await AppointmentModel.find({});
        res.send(Data);
    } catch (error) {
        res.send({"Error":error.message});
    }
})

AppointmentRouter.post("/create",async(req,res)=>{
    try {
        let date=req.body.date
        let time=req.body.time
        let Data = await AppointmentModel.findOne({date,time});
        if(Data){
            res.send({"Error":"Slot Not Available"})
        }else{
            try {
                let appointment = new AppointmentModel(req.body);
                await appointment.save()
                res.send(JSON.stringify("Appointment Created"));
            } catch (error) {
                res.send({"Error":error.message})
            }
        }

    } catch (error) {
        res.send({"Error":error.message});
    }
})


AppointmentRouter.patch("/update/:id",async(req,res)=>{
    let payload=req.body;
    let paramid=req.params.id;
        try {
            let updated=await AppointmentModel.findByIdAndUpdate({_id:paramid},payload)
            res.send({"mess":"Status Updated"})
        } catch (error) {
            // console.log(error);
            res.send({"Error":error.message})
        }
    
})


module.exports={AppointmentRouter}