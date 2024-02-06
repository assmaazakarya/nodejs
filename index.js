const mongoose = require('mongoose');
const express= require('express');
const app=express()
const datafromchatgpt=require('./main.js')
console.log(datafromchatgpt.obj);
const port=5050
const scheduleRoute=require('./route/scheduleroute')
mongoose.connect('mongodb://127.0.0.1:27017/finalproject').then(() => {
    console.log("connected");
}).catch(err => {
    console.log(err);
})
// some middlewares before routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(express.static())
app.use('/schedule',scheduleRoute)
app.listen(port,() => console.log(`app listening on port ${port}!`))