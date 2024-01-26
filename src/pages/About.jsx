import React from 'react' 
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'
function About() {

  const username = useSelector((state) => state.username);
  return (
    <div>
    <Heading title="About" username={username}/>
    </div>
  )
}

export default About