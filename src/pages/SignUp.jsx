import React, { useState } from 'react';
import { TextField } from '@mui/material';

import { Btn, LinkComponent } from '../components';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { changeIsLoggedIn } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        const re = /\S+@\S+\.\S+/;
        setEmailError(!re.test(event.target.value));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log("Clicked");
        dispatch(changeIsLoggedIn(true));
        if(email && password && confirmPassword){
        navigate('/Login');
        }else {
            alert("Please fill all the fields")
        }
    }

    return (
        <form className="flex flex-col items-center justify-center w-3/5 mt-4 gap-0">
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
                onChange={handleEmailChange}
            />

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
            />

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />

            <Btn icon={<FaLongArrowAltRight/>} bgColor="#FF4500" text='Sign Up' width="100%" handleClick={handleClick} />
            <LinkComponent text="Already have an account? Login" href="/Login" />
        </form>
    );
}

export default SignUp;