import React from 'react'
import { features } from '../../Constant'

const FeaturesSection = () => {
  return (
    <div className=' mt-6 lg:mt-20 text-center  flex flex-col lg:max-w-[1180px] mx-auto gap-20 lg:gap-30'>
        <div>
            <span className='font-medium text-2xl text-center text-orange-600 uppercase'>Features</span>
        </div>
        <div>
       <span className='text-5xl lg:text-5xl sm:text-4xl font-medium text-center'>Easily Build {" "} 
        <span className='text-5xl lg:text-5xl sm:text-4xl font-meduim text-center text-orange-600'>your code</span>
         </span>
        </div>

        <div className='flex flex-wrap'>
{features.map((feature , index)=>(
  <div className='w-full sm:w-1/2 lg:w-1/3'>
  <div className='flex gap-2 rounded-[2px]'>
    <div className='text-orange-600 flex mx-6 h-10 p-2  items-center rounded-full'>{feature.icon}</div>
    <div>
        <h5 className='mt-1 mb-6 text-2xl text-left'>{feature.text}</h5>
        <p className='text-md p-2 mb-20 text-neutral-500 text-left'>{feature.description}</p>
    </div>
  </div>
  </div>  
))}
        </div>
    
    </div>
  )
}

export default FeaturesSection;