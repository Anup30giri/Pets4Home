import axios from "axios";
import React, {useEffect,useState} from "react";
import registerimg from '../images/registerimg.webp'
import Success from "./Success";
import Error from "./Error";

function Signup() {

    // now lets work on API integration
    const[error,seterror]=useState();
    const[success,setsuccess]=useState();

    const[fullname,setfullname]=useState('');

    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
  
    const[password,setpassword]=useState('');
    const[cpassword,setcpassword]=useState('');

  

    async function register(){
        if (password == cpassword){
            const user={
                fullname,
                email,
                phone,
                
                password,
                cpassword
            }
            try {
                const result = await axios.post('api/users/register',user).data
                setsuccess(true)
                console.log(result)

                window.location.reload(false) //reloading the page
                //lets clear out all fields after registration
                setfullname('')
                
                setemail('')
                setphone('')
                
                setpassword('')
                setcpassword('')
            } 
            catch (error) {
                seterror(true)
                window.location.reload(false) //reloading the page
            }
        }
        
        else{
            seterror(true)
        }
    
    }

    return (
        <div className="container bg">
            <h3 className="mt-4 heading">USER - REGISTRATION</h3>
            <hr />
            <div className="row justify-content-md-center mt-5 register">

                <div className="col-md-5 reg-left">
                  <br />
                    <form class="mx-1 mx-md-4 forms">
                        <div class="form-group input-icons">
                            <label  className="text-left">Full Name</label>
                            
                            <input type="text" class="form-control input input-field" id="formGroupExampleInput" placeholder="Enter full name" value={fullname} onChange={(e)=> {setfullname(e.target.value)}} />
                            
                        </div>
                        
                        <div class="form-group">
                            <label className="text-left" for="formGroupExampleInput">Email</label>
                            <input type="text" class="form-control input input-field" id="formGroupExampleInput" placeholder="example12@gmail.com" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        </div>

                        <div class="form-group">
                            <label className="text-left" for="formGroupExampleInput">Phone</label>
                            <input type="text" class="form-control input input-field" id="formGroupExampleInput" placeholder="+977" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
                        </div>

                        <div class="form-group">
                            <label className="text-left" for="formGroupExampleInput">Password</label>
                            <input type="password" class="form-control input input-field" id="formGroupExampleInput" placeholder="Enter password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        </div>

                        <div class="form-group">
                            <label className="text-left" for="formGroupExampleInput">Confirm Password</label>
                            <input type="password" class="form-control input input-field" id="formGroupExampleInput" placeholder="Enter password again" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
                        </div>

                        {error && (<Error message='Please try entering right credentials' />)}
                        {success && <Success message='Registration Successfull' />}

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-sm-4">
                            <button type="button" class="btn btn-primary btn-md btn-block mt-1" onClick={register} >Register</button>
                        </div>
                        <p>OR</p>
                        
                        <i  class="fa fa-google" > </i>
                        <p>Already have an account? <a href="/login">Login</a></p>

                        

                    </form>
                </div>
                <div className="col-md-5 reg-right">
                    <figure >
                     <img src={registerimg} alt="" srcSet="" className="reg-img" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Signup;