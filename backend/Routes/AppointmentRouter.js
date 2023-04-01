const express = require("express");
const nodemailer = require('nodemailer')
const { AppointmentModel } = require("../Models/AppointmentModel")

const AppointmentRouter = express.Router();


AppointmentRouter.get("/getall", async (req, res) => {
    try {
        let Data = await AppointmentModel.find({});
        res.send(Data);
    } catch (error) {
        res.send({ "Error": error.message });
    }
});

AppointmentRouter.get("/get", async (req, res) => {
    let ID = req.headers.id
    try {
        let Data = await AppointmentModel.find({ userID: ID });
        res.send(Data);
    } catch (error) {
        res.send({ "Error": error.message });
    }
})

AppointmentRouter.post("/create", async (req, res) => {
    try {
        let date = req.body.date
        let time = req.body.time
        let email = req.body.email
        let Data = await AppointmentModel.findOne({ date, time });
        if (Data) {
            res.send({ "Error": "Slot Not Available" })
        } else {
            try {
                let appointment = new AppointmentModel(req.body);
                await appointment.save()
                res.send(JSON.stringify("Appointment Created"));
                
                let vetCareEmail= process.env.VetcareEmail
                let password= process.env.password
                const msg = {
                    to: email,
                    from: "Vetcare",
                    subject: "Appointment",
                    text: "Thanks for booking an appointment you will be notified whenever your appointment is approved."
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
                
            } catch (error) {
                res.send({ "Error": error.message })
            }
        }

    } catch (error) {
        res.send({ "Error": error.message });
    }
})


AppointmentRouter.patch("/update/:id", async (req, res) => {
    let payload = req.body;
    let {status} = req.body;
    let email = req.headers.email
    let paramid = req.params.id;
    try {
        let updated = await AppointmentModel.findByIdAndUpdate({ _id: paramid }, payload)
       

        
        let vetCareEmail= process.env.VetcareEmail
        let password= process.env.password
        const msg = {
            to: email,
            from: "Vetcare",
            subject: "Registered",
            text: `Hello ${payload.name}, your appointment has been ${status}.`
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

        res.send({ "mess": "Status Updated" })
    } catch (error) {
        // console.log(error);
        res.send({ "Error": error.message })
    }

})


module.exports = { AppointmentRouter }