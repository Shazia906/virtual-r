import React from 'react'
import { resourcesLinks } from '../../Constant'
import {platformLinks} from "../../Constant"
import {communityLinks} from "../../Constant"

const Fotter = () => {
  return (
    <div className='mt-20 lg:mt-40 border-t-2 border-neutral-500 lg:max-w-[1180px] mx-auto'>
      <div className='flex flex-wrap lg:gap-60 gap-20 mt-20 lg:mt-30'>
        <div>
            <h4 className='text-3xl sm:text-3xl lg:text-4xl'>Resourses</h4>
            {resourcesLinks.map((link)=>(
               <div className='mt-5'> <a className='text-xl text-neutral-400 hover:text-white ' href={link.href}>{link.text}</a> </div>
            ))}
        </div>
        <div>
            <h4 className='text-3xl sm:text-3xl lg:text-4xl'>Platform</h4>
            {platformLinks.map((link)=>(
               <div className='mt-5'> <a className='text-xl text-neutral-400 hover:text-white ' href={link.href}>{link.text}</a> </div>
            ))}
        </div>
        <div>
            <h4 className='text-3xl sm:text-3xl lg:text-4xl'>Community</h4>
            {communityLinks.map((link)=>(
               <div className='mt-5'> <a className='text-xl text-neutral-400 hover:text-white ' href={link.href}>{link.text}</a> </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Fotter