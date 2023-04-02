const express = require("express");
const {UserModel}=require('../Models/UserModel')
const jwt=require("jsonwebtoken");
const {client} = require("../config/redisDB");
require("dotenv").config();
const bcrypt=require("bcrypt");
const nodemailer=require("nodemailer");

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    let {password}=req.body;
    let {email} = req.body;
    let {name} = req.body;
    try {
        bcrypt.hash(password,4,async(err,hashedPassword)=>{
            req.body.password=hashedPassword
            let user=new UserModel(req.body)
            await user.save();
            res.send({"mess":"User Registered Successfull"})

            let vetCareEmail= process.env.VetcareEmail
                let password= process.env.password
                const msg = {
                    to: email,
                    from: "Vetcare",
                    subject: "Registered",
                    text: `Thanks ${name} for creating an account with Vetcare.`
                }
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: vetCareEmail,
                        pass: password
                    },
                    port: 425,
                    host: 'smtp.gmail.com'
                }).sendMail(msg,(err)=>{
                    if(err){
                        console.log("Error",err)
                    }
                    else{
                        console.log('Email sent')
                    }
                })
        })
    } catch (error) {
        console.log({"Error":error.message});
        res.send({"Error":error.message});
    }   
})
//asd 
userRouter.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    let user=await UserModel.find({email});
    if(user.length>0){
        bcrypt.compare(password, user[0].password, async(err, result)=> {
            if(result){
                const token = jwt.sign({ userID: user[0]._id }, process.env.secret); //,{ expiresIn:60*60}
                client.HSET("tokensObj" , email , token)
                res.send({"message":"Login Successful","Token":token,"User":user[0]})
            }else{
                res.send(JSON.stringify("Wrong Credentials"))
            }
            //sdadasdasdas
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

userRouter.get("/logout",async(req,res)=>{
    try {
        let email=req.headers.email
        await client.HDEL("tokensObj",email)
        res.send({"mess":"Logout Successful"})
    } catch (error) {
        res.send({"Error":error.message})
    }
})


module.exports={userRouter}