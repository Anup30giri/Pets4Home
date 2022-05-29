const express=require('express')
const router=express.Router()

//lets import the model
const userDb=require('../Models/userModel')

//user registration
router.post('/register',async(req,res)=>{
    const newuser=new userDb(
        {
            fullname : req.body.fullname,
           
            email : req.body.email,
            phone : req.body.phone,
           
            password : req.body.password,
            cpassword : req.body.cpassword,
        }
    )

    try{
        const user=await newuser.save()
        res.send('User registered successfully')
        console.log(user)
    }
    catch(error){
        if (error._message == 'users validation failed'){
            res.write('Fields cannot be empty')
        }
        
        
    }
})

//user login


module.exports = router