const express = require("express");
const {UserModel}=require('../Models/UserModel')
const jwt=require("jsonwebtoken");
require("dotenv").config();
const bcrypt=require("bcrypt");

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    let {password}=req.body;
    try {
        bcrypt.hash(password,4,async(err,hashedPassword)=>{
            req.body.password=hashedPassword
            let user=new UserModel(req.body)
            await user.save();
            res.send({"mess":"User Registered Successfull"})
        })
    } catch (error) {
        console.log({"Error":error.message});
        res.send({"Error":error.message});
    }   
})

userRouter.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    let user=await UserModel.find({email});
    if(user.length>0){
        bcrypt.compare(password, user[0].password, (err, result)=> {
            if(result){
                const token = jwt.sign({ userID: user[0]._id }, process.env.secret); //,{ expiresIn:60*60}
                res.send({"message":"Login Successful","Token":token,"User":user[0]})
            }else{
                res.send(JSON.stringify("Wrong Credentials"))
            }
        });
    }else{
        res.send(JSON.stringify("Wrong Credentials"))
    }
})


userRouter.patch("/update",async(req,res)=>{
    try {
        let newdata=req.body;
        let id=req.query.id;
        let user=await UserModel.findByIdAndUpdate({_id:id},newdata);
        res.send({"mess":"User Details Updated"})
    } catch (error) {
        res.send({"Error":error.message})
    }

})


module.exports={userRouter}