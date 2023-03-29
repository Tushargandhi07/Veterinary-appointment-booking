const express=require('express');
const cors=require('cors');
const { connection } = require("./config/db");
const {userRouter} = require("./Routes/userrouter")
require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());

app.use('/user',userRouter);

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