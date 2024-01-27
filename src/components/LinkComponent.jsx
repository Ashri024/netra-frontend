import React from 'react' 

import {Link } from 'react-router-dom'
function LinkComponent({text="link", href="#"}) {
  return (
    <Link to={href} variant="body2" className='text-right block w-full text-[#FF4500] mt-1 hover:text-[#9f6752]' >
      {text}
    </Link>
  )
}

export default LinkComponent