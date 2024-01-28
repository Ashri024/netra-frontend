import React from 'react' 
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'
import {UploadImages} from '../components'
function Compare() {

  const username = useSelector((state) => state.username);
  return (
    <div>
    <Heading title="Compare" username={username}/>
    <UploadImages/>
    </div>
  )
}

export default Compare