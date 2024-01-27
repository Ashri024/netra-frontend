import React, { useState } from 'react';
import { TextField } from '@mui/material';

import { Btn, LinkComponent } from '../components';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { changeIsLoggedIn } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        const re = /\S+@\S+\.\S+/;
        setEmailError(!re.test(event.target.value));
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Clicked");
        dispatch(changeIsLoggedIn(true));
        if(email){
        alert("Password reset link has been sent to your email");
        navigate('/Login');
        }else{
            alert("Please Enter the email")
        }
    }

    return (
        <form className="flex flex-col items-center justify-center w-3/5 mt-4 gap-3">
            <TextField
                error={emailError}
                helperText={emailError ? 'Invalid email format' : ''}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onInput={handleEmailChange}
            />

            <Btn icon={<FaLongArrowAltRight/>} bgColor="#FF4500" text='Submit' width="100%" handleClick={handleClick} />
            <LinkComponent text="Remembered your password? Login" href="/Login" />
        </form>
    );
}

export default ForgotPassword;