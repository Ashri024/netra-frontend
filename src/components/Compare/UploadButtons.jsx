import React from 'react'
import Btn from '../Btn'
import { MdOutlineCompareArrows } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
function UploadButtons({image1Uploaded, image2Uploaded}) {
    const handleCompare = () => {
        console.log("image1Uploaded", image1Uploaded)
        console.log("image2Uploaded", image2Uploaded)
        alert("Comparing images");
    }
    const handleReset = () => {
        // alert("Clicked")
    }
  return (
    <div className='mt-8 inline-flex items-center justify-center gap-4'>
        <Btn text="Compare" icon={<MdOutlineCompareArrows />} bgColor="#FF4500" width="100%" handleClick={handleCompare} disabled={!image1Uploaded || !image2Uploaded}/>
        <Btn text="Reset" icon={<GrPowerReset />} border="2px solid #FF4500" textColor='#FF4500' bgColor='#fff' width="100%" handleClick={handleReset}  />
    </div>
  )
}

export default UploadButtons