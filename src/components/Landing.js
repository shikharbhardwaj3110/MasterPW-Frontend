import '../css/stylesheet.css'
import landingImg from '../images/passwordimg.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {

    return (
        <div class="maindiv">
            <nav class="navbar-main text-light">
                <div class="navdiv d-flex">
                    <div>
                        <a style={{ fontSize: '1.2rem' }}>
                            <i class="fas fa-key" style={{ paddingRight: "8px" }}></i>
                            MasterPW
                        </a>
                    </div>

                    <div class="buttonsdiv">
                        <div class="dropdown d-inline d-md-none dropdowndiv">
                            <button class="btn text-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">

                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="/login">Log in</a></li>
                                <li><a class="dropdown-item" href="/signup">Sign up</a></li>
                            </ul>
                        </div>
                        <div>
                            <Link to="/signup">
                                <button class="btn btn-primary btn-sm d-none d-md-inline">Sign up</button>
                            </Link>
                        </div>
                        <div style={{ paddingLeft: '0.5rem' }}>
                            <Link to="/login">
                                <button class="btn text-light btn-sm d-none d-md-inline btn-login">Log in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="outerintrodiv">
                <div class="introdiv text-light display-5 text-center">
                    <p class="introline">MasterPW is your one stop application for securely storing all other passwords</p>
                    <p class="introline-2">Start by creating an account to safely save all your passwords, be it for social media websites, apps or other utilities.</p>
                    <div class="d-flex image-intro flex-md-row flex-column">
                        <div class="inner-div">
                            <p class="inner-intro-text">A safe and secure password manager that helps users to access all passwords using just one master password instead of remembering passwords, making your life much easier.</p>
                            <button class="btn btn-primary text-light imageintro-btn">Learn how it works.</button>
                        </div>
                        <div class="inner-div d-md-inline d-none">
                            <img src={landingImg} class="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Landing;