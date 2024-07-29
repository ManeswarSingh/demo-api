const express  = require('express')
const mongoose = require('mongoose')
const UserRoute = require('./routes/userroute.js')

const app = express()
const port = 3000;

mongo_uri = "mongodb+srv://singhmaneshwar08:singh@cluster0.ptuo3qc.mongodb.net/"
dbname = "acma"
mongoose.connect(`${mongo_uri}/ ${dbname}`)
.then((e)=>{
    console.log("mongodb connected")
})

app.get('/',(req,res)=>{
    res.status(200)
})
app.use('/user',UserRoute);
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})