import React from 'react'
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom'

function Btn({icon="", text="Button", color="primary", href="#", bgColor="", width="fit-content", handleClick=()=>{}}) {
  return (
    <Button variant="contained" endIcon={icon} component={Link} 
    to={href} color={color} sx={{background: bgColor, width:width}} onClick={handleClick} >
        {text}
    </Button>
  )
}

export default Btn