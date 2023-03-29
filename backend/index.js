const express=require('express');
const cors=require('cors');
const { connection } = require("./config/db");
const {userRouter} = require("./Routes/userrouter")
const {authenticator}  = require("./Middleware/authenticator")
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());


app.use('/user',userRouter);

app.use(authenticator)

app.get('/',(req,res)=>{
    res.send("Server is Working")
})



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to db');
    } catch (error) {
        console.log('Error while connecting to DB');
    } 
})