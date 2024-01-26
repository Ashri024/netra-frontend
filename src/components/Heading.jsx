import React from 'react'

function Heading({title, username="User"}) {
  return (
    <>
    <div className='text-4xl font-bold text-left text-blue-950 py-4'>
        {title}
    </div>
    <div className='text-3xl font-semibold text-left text-blue-950 '>
        <p>Hi, {username}</p>
    </div>
    </>
  )
}

export default Heading