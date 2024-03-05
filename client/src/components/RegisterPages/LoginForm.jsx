import React, { useState, useEffect } from 'react';
//import './Login.scss'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, Stack, TextField } from "@mui/material";
import './mainForm.css';

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [isLogged, setIsLogged] = useState(false);

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/users/loggeduser?email=${email}`)
    //         .then(res => { console.log(res.data.user._id) })
    //         .catch(err => console.log(err))
    // }, [email])



    const user = {
        email,
        password
    }

    const LoginHandle = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/login', user)
            .then(res => {
                localStorage.setItem('jwt', '124q3cdfgdraw3q244444w555cfgudtse57w34s5eu8cfise58');
                axios.get(`http://localhost:8000/api/users/loggeduser?email=${email}`)
                    .then(res => { 
                        localStorage.setItem("userid", res.data.user._id);
                        if(res.data.user.role == "admin"){
                            localStorage.setItem("admin", true);
                        } 
                    });
                localStorage.setItem('loggeduser', email);
                setIsLogged(true);
                navigate("/home");
                //window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const LogoutHandle = () => {
        axios.get('http://localhost:8000/api/users/logout')
            .then(res => {
                localStorage.removeItem('jwt');
                localStorage.removeItem("userid");
                localStorage.removeItem('loggeduser');
                localStorage.removeItem("admin");
                setIsLogged(false);
                navigate("/");
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="card-front" style={{ height: "85%" }}>
            <div className="center-wrap">
                <div className="section text-center">
                    <h4 className="mb-4 pb-3 text-header">Movie Tracker</h4>
                    <form onSubmit={ LoginHandle }>
                        <div className="form-group">
                            <input type="email" className="form-style"
                             placeholder="Your Email"
                             onChange={(e) => {
                                setEmail(e?.target?.value);
                                if (e?.target?.value?.length == 0) {
                                    setEmailError("*Email is required!")
                                }
                                else if (e?.target?.value?.length < 2) {
                                    setEmailError("*Email must be at least 2 characters long!")
                                } else {
                                    setEmailError()
                                }
                                }} />
                            <i className="input-icon uil uil-at"></i>
                            <p className='text-error'>{emailError}</p>
                        </div>	
                        <div className="form-group mt-2">
                            <input type="password" className="form-style"
                            placeholder="Your Password" 
                            onChange={(e) => {
                                setPassword(e?.target?.value);
                                if (e?.target?.value?.length == 0) {
                                    setPasswordError("*Password is required!")
                                }
                                else if (e?.target?.value?.length < 6) {
                                    setPasswordError("*Password must be at least 6 characters long!")
                                } else {
                                    setPasswordError()
                                }
                            }} />
                            <i className="input-icon uil uil-lock-alt"></i>
                            <p className='text-error'>{passwordError}</p>
                        </div>
                        {
                            emailError || passwordError 
                                ?<button type='submit' disabled className="btn mt-4">Login</button>
                                : <button type='submit' className="btn mt-4">Login</button>
                        }

                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;