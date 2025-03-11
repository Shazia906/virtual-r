import React from 'react'
import {pricingOptions} from '../../Constant/index';
import { CheckCircle2 } from 'lucide-react';

const PriceSection = () => {
  return (
     <div className='mt-20 lg:mt-40 lg:max-w-[1180px] mx-auto'>
       <h1 className='text-center text-5xl sm:text-5xl lg:text-6xl' >Pricing</h1>
       <div className=' mt-10 lg:mt-20 flex flex-wrap justify-center lg:flex-nowrap gap-3'>
        {pricingOptions.map((pricingOption , index)=>(
          <div  className='flex flex-col gap-6 w-full lg:w-1/3 sm:w-1/2 p-6 border-2 border-neutral-700 rounded-2xl'>
            <h4 className='text-4xl font-medium my-2 '>{pricingOption.title}
              {pricingOption.title === "Pro" && <span className='text-xl font-normal text-orange-600 '>(Most Popular)</span>}
            </h4>
            <div className='my-2'>
            <span className='text-4xl font-medium' >{pricingOption. price}</span>
            <span className='font-normal text-xl' >/Month</span>
            </div>
            {pricingOption.features.map((feature)=>(
              <div className='flex items-center gap-5'>
                <CheckCircle2/>
                <p className='text-xl'>{feature}</p>
              </div>
            ))}
           <a href="" className='text-center mt-7 py-5 px-9 border-2 border-neutral-500 rounded-2xl hover:bg-gradient-to-r from-orange-500 to-orange-800'>Subscribe</a> 
          </div>
        ))}

       </div>
      
     </div>
  )
}

export default PriceSection;