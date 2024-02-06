const scheduleController= require('../controller/shcedulecontroller')
const express = require('express');
const route = express.Router();
// const JWT = require('jsonwebtoken')
// const secret_key="my secret key"
// route.get('/',(req,res)=>{
//     res.send("i am in the user route")
// })
//route creation done 
route.post('/addschedule',async(req,res)=>{
    console.log( req.body);
    let {dayName,detailes} = req.body;
        let data = await scheduleController.createOneDaySchedule(dayName,detailes)
        // console.log(data);
        res.status(200).send('schedule');
    
})
module.exports=route

