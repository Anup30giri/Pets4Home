import React from "react";
import login from '../images/login.png'

function Login() {

    return (
        <div className="container">
            <h4 className="mt-4">L - O - G - I - N</h4>
            <hr />
            <div className="row justify-content-md-center">
                <div className="col-md-6 login">
                    <form className="mx-1 mx-md-4 mt-4 justify-content-md-center">
                    <figure >
                     <img src={login} alt="" srcSet="" className="login-img" />
                    </figure>
                        <div class="d-flex flex-row align-items-center ml-4 inpt-div">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <label className="lbl">Username: </label>
                            <div class="form-outline mb-0 ">
                                <input type="text" id="form3Example1c" class="form-control inpt" />
                                <label class="form-label" for="form3Example1c">Username</label>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mt-4 inpt-div">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <label className="lbl">Password: </label>
                            <div class="form-outline mb-0 ml-2">
                                <input type="text" id="form3Example1c" class="form-control inpt inpt2" />
                                <label class="form-label" for="form3Example1c">Password</label>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-sm-4 mt-2">
                            <button type="button" class="btn btn-primary btn-md btn-block" >Login</button>
                        </div>
                        <p>Not registered yet? <a href="/register">Register</a></p>

                    </form>
                </div>
            </div>

        </div>
    );
}
export default Login;