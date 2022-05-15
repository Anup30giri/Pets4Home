import React from 'react'

function Navbar(){

    return(
        <div>
             <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#"><span className='head-one'>PETS-4-</span><span className='head-two'>Home</span></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ><i style={{color:"white"}} class="fa fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-20">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/booking">Booking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">SignIn</a>
                        </li>
 
                    </ul>
                </div>
            </nav>
        </div>

    )

}

export default Navbar;