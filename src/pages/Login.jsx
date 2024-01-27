import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { Btn, LinkComponent } from '../components';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector} from 'react-redux';
import {changeIsLoggedIn} from '../redux/slice';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        const re = /\S+@\S+\.\S+/;
        setEmailError(!re.test(event.target.value));
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Clicked");
        dispatch(changeIsLoggedIn(true));
        console.log(isLoggedIn)
        navigate('/Dashboard');
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

                  <div className='w-full'>
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
                      sx={{ mb: 0 }}
                  />
                  <LinkComponent text="Forgot Password?" href="/Login/ForgotPassword" />
                  </div>

                  <div className='w-full'>
                  <Btn icon={<FaLongArrowAltRight/>} bgColor="#FF4500" text='Login' width="100%" handleClick={handleClick} />
                  <LinkComponent text="Don't have an account? Sign Up" href="/Login/Signup" />
                  </div>
              </form>
    );
}

export default Login;