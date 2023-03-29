const express = require("express");
const {UserModel}=require('../Models/UserModel')
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    let {password}=req.body;
    try {
        bcrypt.hash(password,4,async(err,hashedPassword)=>{
            res.send(req.body)
            req.body.password=hashedPassword
            console.log(req.body);
            // let user=new UserModel(req.body)
        })
    } catch (error) {
        console.log({"Error":error.message});
        res.send({"Error":error.message})
    }   
})




module.exports={userRouter}