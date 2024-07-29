const Router = require('express')
const User = require('../models/user.models.js')

const router = Router()

router.post("/register",async(req,res)=>{
    const {fullName,password,email} = req.params;
    const userexist = await User.findOne({
        $or : [{email}]
    })
    if(userexist){
        res.status(409,"user already exists");
    }
    await User.create({
        fullName,
        email,
        password
    }) 
    return res.status(200,"user registered succesfully");
})
module.export = router

