import React,{useState} from 'react'
import loginBg from '../../assets/loginBg.png'
import { Button, Box } from '@mui/material';
import { FiUpload } from "react-icons/fi";
// import {UploadButtons} from '../'
import { MdOutlineCompareArrows } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

import {Btn } from '..'

function ImageHolder({id, onImageUpload, preview, setPreview}) {
    // const [preview, setPreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    };

    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
          if (files[i].type.startsWith("image/") && files[i].type !== "image/svg+xml" && files[i].type !== "image/gif") {
            const reader = new FileReader();
            reader.onloadend = () => {
              setPreview(reader.result);
              onImageUpload(); // Call the onImageUpload prop function here
            };
            reader.readAsDataURL(files[i]);
          } else {
            alert("Invalid file type. Please upload an image file.");
          }
        }
    };

    const handleFileChange = (e) => {
        handleFiles(e.target.files);
    };

    return (
        <Box 
            className={`lg:w-1/3 overflow-hidden w-1/2 max-w-[350px] min-w-[250px] lg:h-64 relative h-48 bg-[#ff45002e] border-2 border-[#ff4500] rounded-lg ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {preview ? <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit:"cover", objectPosition:"center" }} /> : <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-center text-xl w-full font-semibold'>Drag and drop Images here</span>}
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id={id}
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor={id}>
                <div className='w-full absolute bottom-0 left-0'>
                    <Button variant="contained" endIcon={<FiUpload/>} sx={{background:"#ff4500", color:"#fff", width:"100%", ":hover":{background:"#ff7643", color:"#fff",opacity:0.8}}} component="span">
                        Upload
                    </Button>
                </div>
            </label>
        </Box>
    )
}

function UploadImages() {
    const [image1Uploaded, setImage1Uploaded] = useState(false);
    const [image2Uploaded, setImage2Uploaded] = useState(false);
    const [preview1, setPreview1] = useState(null);
    const [preview2, setPreview2] = useState(null);
    const handleCompare = () => {
        console.log("image1Uploaded", image1Uploaded)
        console.log("image2Uploaded", image2Uploaded)
        alert("Comparing images");
    }
    const handleReset = () => {
        setImage1Uploaded(false);
        setImage2Uploaded(false);
        setPreview1(null);
        setPreview2(null);
    }
    return (
        <>
        <div className='flex lg:gap-8 gap-4 items-center justify-center mt-6 lg:flex-row flex-col'>
            <ImageHolder id="image-holder-1" onImageUpload={()=>{console.log("Uploaded1"); setImage1Uploaded(true)}} preview={preview1} setPreview={setPreview1}/>
            <span>Compare to </span>
            <ImageHolder id="image-holder-2" onImageUpload={()=>{console.log("Uploaded1"); setImage2Uploaded(true)}} preview={preview2} setPreview={setPreview2}/>
        </div>
        <div className='mt-8 inline-flex items-center justify-center gap-4'>
          <Btn text="Compare" icon={<MdOutlineCompareArrows />} bgColor="#FF4500" width="100%" handleClick={handleCompare} disabled={!image1Uploaded || !image2Uploaded}/>
          <Btn text="Reset" icon={<GrPowerReset />} border="2px solid #FF4500" textColor='#FF4500' bgColor='#fff' width="100%" handleClick={handleReset}  />
      </div>
      </>
    )
  }

export default UploadImages