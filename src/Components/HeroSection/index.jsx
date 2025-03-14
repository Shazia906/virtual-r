import React from 'react'
import Video1 from "../../assets/image/video1.mp4";
import Video2 from "../../assets/image/video2.mp4";


const HeroSection = () => {
  return (
   <div className='flex flex-col items-center mt-6 lg:mt-20'>
    <h1 className='text-4xl sm:6xl lg:7xl text-center'>
        Virtual build tools
        {" "} 
        <span className='text-orange-600'>for <br /> developers</span>
    </h1>
     <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
     Empower your creativity and bring your VR app ideas to life with our  intuitive development  tools. Get started  <br />today and turn your imagination into immersive reality.
     </p>
     <div className='flex justify-center my-10'>
        <a href="" className='bg-gradient-to-r from-orange-500 to-orange-800 py-5 px-6 mx-3 rounded-md'>Start for free</a>
        <a href="" className="py-5 px-6 mx-3 rounded-md border">Documentation</a>
     </div>
     <div className='flex  mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-1/3  border-orange-700 shadow-orange-400 mx-2 my-4' src={Video1}></video>
        <video autoPlay loop muted className='rounded-lg w-1/3 border-orange-700 shadow-orange-400 mx-2 my-4' src={Video2}></video>
     </div>
   </div>
  )
}

export default HeroSection