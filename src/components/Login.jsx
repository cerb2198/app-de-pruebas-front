import { react, useEffect, useContext } from "react";
import UserContext from "../context/UserContext.js";

import axios from 'axios';

import eventSession from "../controller/eventSession.js";

import Home from "./Home";

const Login = () => {

    let isMonitoring = false;

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {

        console.log("El usuario es...", user);

    }, [user]);

    const funcSingIn = async() => {

        const sendObject = {
            salud : "Hola Back"
        }

        const cebecera = {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
            }
        };

        axios.post("https://admin.pruebas.colegiotilata.edu.co/api/validate", sendObject, cebecera)
          .then(function (response) {
            console.log("Respuesta de Laura", response.config.headers.Authorization);
            isMonitoring = true;
            eventSession(isMonitoring);
          })
          .catch(function (error) {
            console.log(error);
          });


        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => setUser(json))


    }

    return (
        <>
            <Home></Home>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                                alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                                        onClick={ funcSingIn }>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        className="link-danger">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>


                    <div>
                        <a href="#!" className="text-white me-4">
                        </a>
                        <a href="#!" className="text-white me-4">
                        </a>
                        <a href="#!" className="text-white me-4">
                        </a>
                        <a href="#!" className="text-white">
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Login;