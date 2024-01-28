import React from 'react'
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom'

function Btn({icon="",disabled=false, text="Button", color="primary", href="#", bgColor="", width="fit-content", handleClick=()=>{}, border="none", textColor="#fff"}) {
  return (
    <Button variant="contained" endIcon={icon} component={Link} 
    to={href} color={color} sx={{background: bgColor,color:textColor , width:width, border:border, ":hover":{ background:"#ff7643", color:"#fff",opacity:0.8} }} onClick={handleClick} disabled={disabled} >
        {text}
    </Button>
  )
}

export default Btn