import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";


const RegisterForm = (props) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(); 
    const [firstNameError,setFirstNameError] = useState();
    const [lastNameError,setLastNameError] = useState();
    const [emailError,setEmailError] = useState();
    const [passwordError,setPasswordError] = useState();
    const [confirmpasswordError,setConfirmPasswordError] = useState();

    const user = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    }
    const registerHandler = () => {
        axios.post("http://localhost:8000/api/users/register",user)
            .then(res=>navigate('/login'))
            .catch(err=>console.log(err))
    }
    return (
        <Box component="form" className='w-75 mx-auto border p-3 border-black'>
            <Stack spacing={3}>
                <h1>Movie Tracker</h1>
                <TextField type='text' onChange={(e) => { setFirstName(e.target.value);
                    if(e?.target?.value?.length == 0) {
                    setFirstNameError("*First Name is required!")
                    }
                    else if(e?.target?.value?.length < 2) {
                    setFirstNameError("*First Name must be at least 2 characters long!")
                    }else{
                    setFirstNameError()
                    }
                }} 
                label="First Name" 
                variant="outlined" 
                placeholder="Enter First Name"
                fullWidth
                color='success' 
                />
                <p style={{color:"red",fontSize:"14px"}}>{firstNameError}</p>
                <TextField type='text' onChange={(e) => { setLastName(e.target.value);
                    if(e?.target?.value?.length == 0) {
                    setLastNameError("*Last Name is required!")
                    }
                    else if(e?.target?.value?.length < 2) {
                    setLastNameError("*Last Name must be at least 2 characters long!")
                    }else{
                    setLastNameError()
                    } }} 
                label="Last Name" 
                variant="outlined" 
                placeholder="Enter Last Name"
                fullWidth
                color='success' 
                />
                <p style={{color:"red",fontSize:"14px"}}>{lastNameError}</p>
                <TextField type='email' onChange={(e) => { setEmail(e.target.value);
                    if(e?.target?.value?.length == 0) {
                    setEmailError("*Email is required!")
                    }
                    else if(e?.target?.value?.length < 2) {
                    setEmailError("*Email must be at least 2 characters long!")
                    }else{
                    setEmailError()
                    } }} 
                label="Email" 
                variant="outlined" 
                placeholder="Enter Email"
                fullWidth
                color='success' 
                />
                <p style={{color:"red",fontSize:"14px"}}>{emailError}</p>
                <TextField type='password' onChange={(e) => { setPassword(e.target.value);
                    if(e?.target?.value?.length == 0) {
                    setPasswordError("*Password is required!")
                    }
                    else if(e?.target?.value?.length < 6) {
                    setPasswordError("*Password must be at least 6 characters long!")
                    }else{
                    setPasswordError()
                    } }} 
                label="Password" 
                variant="outlined" 
                placeholder="Enter Password" 
                fullWidth
                color='success' />
                <p style={{color:"red",fontSize:"14px"}}>{passwordError}</p>
                <TextField className='inputforms' type='password' onChange={(e) => { setConfirmPassword(e.target.value);
                if(e?.target?.value?.length == 0) {
                    setConfirmPasswordError("*Confirm Password is required!")
                }
                else if(e.target.value !== password){
                    setConfirmPasswordError("Doesn't match the password!")
                }else{
                    setConfirmPasswordError()
                }
                    }} 
                label="Confirm Password" 
                variant="outlined" 
                placeholder="Enter Confirm Password"
                fullWidth
                color='success' />
                <p style={{color:"red",fontSize:"14px"}}>{confirmpasswordError}</p>
                {firstNameError || lastNameError || emailError || passwordError || confirmpasswordError ?
                <Button fullWidth disabled variant="contained" color='error'>Register</Button> 
                : <Button onClick={registerHandler} fullWidth variant="contained" color="success">Register</Button> }
                <p>Do you already have an account?<Link to={'/login'}> Login here</Link>.</p>
            </Stack>
        </Box>
    );
};

export default RegisterForm;