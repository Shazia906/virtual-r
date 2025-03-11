import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../../assets/image/code.jpg" ;
import { checklistItems } from '../../Constant';

const WorkFlow = () => {
  return (
    <div className='mt-20 lg:mt-40 lg:max-w-[1180px] mx-auto'>
        <h2 className=' text-3xl sm:text-5xl lg:text-6xl text-center mt-6'>
            Accelerate your  {" "}
            <span className='text-orange-600 '>coding workflow</span>
        </h2>
      <div className='flex flex-wrap justify-center mt-20'>
        <div className='p-2 w-full lg:w-1/2'>
        <img src={codeImg} alt="" /></div>
        <div className='pt-12  w-full lg:w-1/2 flex flex-col gap-3 items-center justify-center'>
        {checklistItems.map((checklistItem , index)=>(
            <div className='flex gap-2 mb-12'>
           <div className='text-green-600 mt-5 flex h-10 w-10 p-2 rounded-full flex-col gap-7 items-center justify-center'><CheckCircle2/></div>
           <div>
            <h2 className='text-[20px] font-medium mt-2'>{checklistItem.title}</h2>
            <p className='mt-2 text-neutral-500'>{checklistItem.description}</p>
           </div>
            </div>
        ))}
        </div>

      </div>
     
    </div>
  )
}

export default WorkFlow
