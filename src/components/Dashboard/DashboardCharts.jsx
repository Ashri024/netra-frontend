import React from 'react'   
import {SubHeading, SummaryChart} from '..'
function DashboardCharts() {
    const matched = [38, 28, 32, 40];
    const not_matched = [5, 10, 7, 4];
    const monthlyApiCalls = [100, 200, 300, 400];
    const xLabels = [
    'Jan', 'Feb', 'Mar', 'Apr'
    ];
    
    const dataset = [
        {data: not_matched, color:"#F97066", id:"not_matched", label: "Not matched" },
        {data: matched, color:"#32D583", id:"matched", label: "Matched" }
    ]
    const dataset2 = [ {data: monthlyApiCalls, color:"#FEC84B", id:"not_matched", label: "Monthly API Calls" }]
  return (
    
    <div className='w-full' id='chartSummary '>
        <SubHeading title="Chart Summary"/>
        <div className='mt-4 flex flex-wrap items-center justify-around'>
          <SummaryChart xLabels={xLabels} dataset={dataset} label="Accuracy"/>
          <SummaryChart xLabels={xLabels} dataset={dataset2} label="Monthly API Calls"/>
        </div>
    </div>
  )
}

export default DashboardCharts