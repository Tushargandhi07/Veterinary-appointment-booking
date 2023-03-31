const express = require("express");
const {DoctorModel}=require('../Models/DoctorModel')


const doctorRouter=express.Router()

doctorRouter.get("/getDocID",async(req,res)=>{
    try { 
            let name=req.headers.name;
            let user=await DoctorModel.findOne({"name":name})
            res.send({"ID":user._id})

    } catch (error) {
        console.log({"Error":error.message});
        res.send({"Error":error.message});
    }   
})

doctorRouter.post("/register",async(req,res)=>{
    try { 
            let user=new DoctorModel(req.body)
            await user.save();
            res.send({"mess":"Doctor Registered Successfull"})

    } catch (error) {
        console.log({"Error":error.message});
        res.send({"Error":error.message});
    }   
})


doctorRouter.delete("/delete",async(req,res)=>{
    try {
        let id=req.query.id;
        let user=await DoctorModel.findByIdAndDelete({_id:id});
        res.send({"mess":"Doctor Deleted"})
    } catch (error) {
        res.send({"Error":error.message})
    }

})


module.exports={doctorRouter}