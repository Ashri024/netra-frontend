import React from 'react' 
import {Heading,DashboardSummary, DashboardCharts} from '../components'
import { useSelector } from 'react-redux'

function Home() {
  const username = useSelector((state) => state.username);
  return (
    <div className=''>
      <Heading title="Dashboard" username={username}/>
      <DashboardSummary/>
      <DashboardCharts/>
    </div>
  )
}

export default Home