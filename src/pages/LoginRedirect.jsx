import React from 'react'
import timeOutImg from '../assets/timeout2.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Btn } from '../components';

function LoginRedirect() {
  return (
    <div className='mt-8 flex flex-col items-center justify-center'>
      <h1 className='text-center text-3xl text-[#FF4500]'> Uh oh, seems like your session time has expired!!!</h1>
      <img src={timeOutImg} alt="Session expired" className='w-1/2'/>
      <Btn text="Login Again" icon={<FaLongArrowAltRight/>} href="/Login" color="primary" />

    </div>
  )
}

export default LoginRedirect