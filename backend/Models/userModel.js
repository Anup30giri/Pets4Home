const mongoose =require('mongoose')

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

//now lets export the user model
const userModel=mongoose.model('users',userSchema)
module.exports=userModel