const express=require('express')
const router=express.Router()

//lets import the model
const userDb=require('../Models/userModel')

//user registration
router.post('/register',async(req,res)=>{
    const newuser=new userDb(
        {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            phone : req.body.phone,
            username : req.body.username,
            password : req.body.password,
            cpassword : req.body.cpassword,
        }
    )

    try{
        const user=await newuser.save()
        res.send('User registered successfully')
    }
    catch{
        return res.status(400).json({error})
    }
})

module.exports = router