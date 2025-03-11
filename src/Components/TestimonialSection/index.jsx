import React from 'react'
import {testimonials } from '../../Constant'

const Testimonials = () => {
  return (
   <div className='mt-10 lg:mt-40 lg:max-w-[1180px] mx-auto'>
    <h1 className='text-5xl sm:text-5xl lg:text-6xl  font-meduim text-center'>What Peoples are saying</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  mt-10 lg:mt-20'>
     {testimonials.map((testimonial)=>(
        <div className='w-full  lg:w-1/3 '>
            <div className='py-5 px-3 border-2 rounded-2xl border-neutral-900 flex flex-col justify-center gap-8'>
                <p className='text-neutral-500 text-xl font-normal '>{testimonial.text}</p>
                <div className='flex items-center gap-6'>
                    <img className='w-18 h-18 rounded-full' src={testimonial.image} alt="" />
                    <div>
                        <p className='text-2xl font-meduim  '>{testimonial.user}</p>
                        <p className='text-neutral-500 text-xl'>{testimonial.company}</p>
                    </div>
                </div>

            </div>

        </div>
     ))}
    </div>
   </div>
  )
}

export default Testimonials