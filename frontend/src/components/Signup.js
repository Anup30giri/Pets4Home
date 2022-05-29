import axios from "axios";
import React, { useEffect, useState } from "react";
import registerimg from "../images/registerimg.webp";
import Success from "./Success";
import Error from "./Error";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import GoogleButton from "react-google-button";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Signup() {
  // Hooks
  const [loginData, setLoginData] = useState(
    localStorage.getItem(
      "loginData" ? JSON.parse(localStorage.getItem("loginData")) : null
    )
  );
  // Use Effect
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  // Google Logout
  const logout = () => {
    // localStorage.removeItem('loginData')
    localStorage.clear();
    setLoginData(null);
    window.location.href = "/";
  };

  // Handling Google Login Success
  const onSuccess = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));

    console.log("Login Success || current User:", googleData.profileObj);
  };
  // Handling Google Login Failure
  const onFailure = (res) => {
    console.log("Login Failed:", res);
  };
  // now lets work on API integration
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();

  const [fullname, setfullname] = useState("");

  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  async function register() {
    if (password === cpassword) {
      const user = {
        fullname,
        email,
        phone,

        password,
        cpassword,
      };
      try {
        const result = await axios.post("api/users/register", user).data;
        setsuccess(true);
        console.log(result);

        window.location.reload(false); //reloading the page
        //lets clear out all fields after registration
        setfullname("");

        setemail("");
        setphone("");

        setpassword("");
        setcpassword("");
      } catch (error) {
        seterror(true);
        window.location.reload(false); //reloading the page
      }
    } else {
      seterror(true);
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
              <label className="text-left">Full Name</label>

              <input
                type="text"
                class="form-control input input-field"
                id="formGroupExampleInput"
                placeholder="Enter full name"
                value={fullname}
                onChange={(e) => {
                  setfullname(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label className="text-left" for="formGroupExampleInput">
                Email
              </label>
              <input
                type="text"
                class="form-control input input-field"
                id="formGroupExampleInput"
                placeholder="example12@gmail.com"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label className="text-left" for="formGroupExampleInput">
                Phone
              </label>
              <input
                type="text"
                class="form-control input input-field"
                id="formGroupExampleInput"
                placeholder="+977"
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label className="text-left" for="formGroupExampleInput">
                Password
              </label>
              <input
                type="password"
                class="form-control input input-field"
                id="formGroupExampleInput"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label className="text-left" for="formGroupExampleInput">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control input input-field"
                id="formGroupExampleInput"
                placeholder="Enter password again"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
            </div>

            {error && <Error message="Please try entering right credentials" />}
            {success && <Success message="Registration Successfull" />}

            <div class="d-flex justify-content-center mx-4 mb-3 mb-sm-4">
              <button
                type="button"
                class="btn btn-primary btn-md btn-block mt-1"
                onClick={register}
              >
                Register
              </button>
              <br/>
               {/*  Google Login */}
         
            </div>
            <p>OR</p>

           <p>
              {loginData ? (
                <div>
                  <h3>
                    You logged in as {loginData.email}
                    <p>
                      <img
                        src={loginData.picture}
                        alt=""
                        style={{ height: 50, width: 50 }}
                      />{" "}
                    </p>
                  </h3>

                  <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                  ></GoogleLogout>
                </div>
              ) : (
                  <div style={{marginLeft:'70px'}}>
                       <GoogleLogin 
                  render={(renderProps) => (
                    <GoogleButton
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in with Google
                    </GoogleButton>
                  )}
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
                  </div>
               
              )}
        
           </p>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>

        <div className="col-md-5 reg-right">
          <figure>
            <img src={registerimg} alt="" srcSet="" className="reg-img" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Signup;
