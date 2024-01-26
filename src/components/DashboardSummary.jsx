import React from 'react'
import SubHeading from './SubHeading'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SiFastapi } from "react-icons/si";
import { blue, green, red, yellow } from '@mui/material/colors';
import { BsCalendar2Check } from "react-icons/bs";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { FaUsers,FaUserTie } from "react-icons/fa";
const SummaryCard = ({borderColor, heading, value,icon}) => {
return (  
    <Card style={{ minWidth: 200, borderRadius:"10px", borderRight:`4px solid ${borderColor}`, borderLeft:`4px solid ${borderColor}`, boxShadow:"rgb(0 0 0 / 14%) 0px 4px 3px" }}>
      <CardContent style={{padding:"0.5rem 1rem", display:'flex', alignItems:"center",justifyContent:"space-between" }}>
        <div>
        <p className='text-medium'>{heading}</p>
        <p className='text-2xl text-gray-500 font-semibold'>{value}</p>
        </div>
        <div className='text-[2rem]'>
            {icon}
        </div>
      </CardContent>
    </Card>
)
}

function DashboardSummary() {
  return (
    <div>
        <SubHeading title="Summary"/>
        <div className='grid grid-cols-3 gap-x-3 gap-y-5 mt-4'>
            <SummaryCard borderColor={green["A200"]} heading="Total Api Call" value="707" icon={<SiFastapi/>} />
            <SummaryCard borderColor={green["A200"]} heading="Successfully Processed" value="129" icon={<BsCalendar2Check/> } />
            <SummaryCard borderColor={blue[400]} heading="Total Users" value="17" icon={<FaUsers/>} />
            <SummaryCard borderColor={yellow["600"]} heading="Processes in Queue" value="8" icon={<VscServerProcess/>} />
            <SummaryCard borderColor={red["A200"]} heading="Error Occured" value="4" icon={<MdOutlineRunningWithErrors/>} />
            <SummaryCard borderColor={blue[400]} heading="Total Clients" value="25" icon={<FaUserTie/>} />
        </div>
    </div>
  )
}

export default DashboardSummary