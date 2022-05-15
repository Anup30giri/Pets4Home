const express = require('express');
const app = express()

app.use(express.json())

//defining the port for the backend
const PORT = 80

//importing the database 
require("./Database/db")

//importing the routes
const userRoutes=require('./Routes/userRoute')

app.get('/',(req,res)=>{
    res.send('Hello Devs')
});

//creating the api path
app.use('/api/users',userRoutes)


//Running the server in the port
app.listen(PORT,()=>{
    console.log('Server is running at '+PORT)
})