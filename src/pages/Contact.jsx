import React from 'react' 
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'

function Contact() {
  const username = useSelector((state) => state.username);
  return (
    <div>
    <Heading title="Contact" username={username} />
    </div>
  )
}

export default Contact