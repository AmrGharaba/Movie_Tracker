import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import './mainForm.css';

const RegisterForm = (props) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState();
    const [firstNameError, setFirstNameError] = useState();
    const [lastNameError, setLastNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [confirmpasswordError, setConfirmPasswordError] = useState();

    const user = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    }

    const updateUser = {
        firstName,
        lastName,
        email,
        password
    }


    const registerHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register", user)
            .then(res => {
                if(email.includes("admin")){
                    axios.patch("http://localhost:8000/api/admin/updateRole", updateUser)
                        .then(res => {
                            console.log(res);
                            localStorage.setItem("admin", true);
                        })
                        .catch(err => console.log(err))
                }
                localStorage.setItem('jwt', '124q3cdfgdraw3q244444w555cfgudtse57w34s5eu8cfise58');
                axios.get(`http://localhost:8000/api/users/loggeduser?email=${email}`)
                    .then(res => { localStorage.setItem("userid", res.data.user._id) });
                navigate('/home');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="card-back h-100">
            <div className="center-wrap">
                <div className="section text-center">
                    <h4 className="mb-4 pb-3 text-header">Movie Tracker</h4>
                    <form onSubmit={ registerHandler }>
                    <div className="form-group">
                        <input type="text" className="form-style" 
                        placeholder="Your First Name" 
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            if (e?.target?.value?.length == 0) {
                                setFirstNameError("*First Name is required!")
                            }
                            else if (e?.target?.value?.length < 2) {
                                setFirstNameError("*First Name must be at least 2 characters long!")
                            } else {
                                setFirstNameError()
                            }
                        }} />
                        <i className="input-icon uil uil-user"></i>
                        <p className='text-error'>{firstNameError}</p>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-style" 
                        placeholder="Your Last Name" 
                        onChange={(e) => {
                            setLastName(e.target.value);
                            if (e?.target?.value?.length == 0) {
                                setLastNameError("*Last Name is required!")
                            }
                            else if (e?.target?.value?.length < 2) {
                                setLastNameError("*Last Name must be at least 2 characters long!")
                            } else {
                                setLastNameError()
                            }
                        }} />
                        <i className="input-icon uil uil-user"></i>
                        <p className='text-error'>{lastNameError}</p>
                    </div>	
                    <div className="form-group mt-2">
                        <input type="email" className="form-style" 
                        placeholder="Your Email" 
                        onChange={(e) => {
                            setEmail(e.target.value);
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
                            setPassword(e.target.value);
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
                    <div className="form-group mt-2">
                        <input type="password" className="form-style" 
                        placeholder="Your Confirm Password" 
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            if (e?.target?.value?.length == 0) {
                                setConfirmPasswordError("*Confirm Password is required!")
                            }
                            else if (e.target.value !== password) {
                                setConfirmPasswordError("Doesn't match the password!")
                            } else {
                                setConfirmPasswordError()
                            }
                        }} />
                        <i className="input-icon uil uil-lock-alt"></i>
                        <p className='text-error'>{confirmpasswordError}</p>
                    </div>
                    {
                    firstNameError || lastNameError || emailError || passwordError || confirmpasswordError ?
                        <button type='submit' disabled className="btn mt-4">Sign up</button>
                        : <button type='submit' className="btn mt-4">Sign up</button>
                    }
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;