import React, { useState, useEffect } from 'react';
//import './Login.scss'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, Stack, TextField } from "@mui/material";

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

    const LoginHandle = () => {
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
        <Box component="form" className='w-75 mx-auto border p-3 border-black'>
            <Stack spacing={3}>
                <h1>Movie Tracker</h1>
                <TextField type='email' onChange={(e) => {
                    setEmail(e?.target?.value);
                    if (e?.target?.value?.length == 0) {
                        setEmailError("*Email is required!")
                    }
                    else if (e?.target?.value?.length < 2) {
                        setEmailError("*Email must be at least 2 characters long!")
                    } else {
                        setEmailError()
                    }
                }}
                    label="Email"
                    variant="outlined"
                    placeholder='Enter Email'
                    fullWidth
                    color='success'
                />
                <p style={{ color: "red", fontSize: "14px" }}>{emailError}</p>
                <TextField type='password' onChange={(e) => {
                    setPassword(e?.target?.value);
                    if (e?.target?.value?.length == 0) {
                        setPasswordError("*Password is required!")
                    }
                    else if (e?.target?.value?.length < 6) {
                        setPasswordError("*Password must be at least 6 characters long!")
                    } else {
                        setPasswordError()
                    }
                }}
                    label="Password"
                    variant="outlined"
                    placeholder='Enter Password'
                    fullWidth
                    color='success'
                />
                <p style={{ color: "red", fontSize: "14px" }}>{passwordError}</p>
                {
                    emailError || passwordError ?
                        <Button fullWidth disabled variant="contained" color="error">Login</Button>
                        : <Button onClick={LoginHandle} fullWidth variant="contained" color="success">Login</Button>
                }

                <p className='mt-3'>Not a user? No problem you can <Link to={'/'}>register here</Link>.</p>
            </Stack>
        </Box>
    );
};

export default LoginForm;