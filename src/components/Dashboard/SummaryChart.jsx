import React , { useRef, useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function SummaryChart({dataset, xLabels, label}) {
    
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth - 30);
            }
        };
    
        handleResize(); // Initial width calculation
    
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [containerRef]);

    let data = [];
    dataset.forEach((item)=>{
        data.push({data: item.data, label: item.label, id: item.id, color: item.color})
    });

    return (
        <div ref={containerRef} className='lg:w-1/2 w-3/4 max-w-[600px] min-w-[330px] flex items-center'>
            <BarChart
                width={width}
                height={280}
                series={data}
                xAxis={[{ data: xLabels, scaleType: 'band', label:label, categoryGapRatio: 0.3, barGapRatio: 0.1}]}
            />
        </div>
    );
}

 
export default SummaryChart