const jwt=require("jsonwebtoken");
const {client} = require("../config/redisDB");
require("dotenv").config();
const authenticator= async(req,res,next)=>{
    // const token=req.headers.authorization;
    const email = req.headers.email
    const token = await client.HGET("tokensObj" , email)
    
    if(token){
        const decoded=jwt.verify(token,process.env.secret,(err,decoded)=>{
            if(err){
                console.log("Please Login")
                res.send(JSON.stringify("Please Login"))
            }else{
                // console.log(decoded)
                req.body.userID=decoded.userID
                next()
            }
        })
        
    }else{
        console.log("Please Login First")
        res.send(JSON.stringify("Please Login again"))
    }
}  
module.exports={authenticator}