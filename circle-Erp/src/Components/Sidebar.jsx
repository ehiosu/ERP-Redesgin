import React, { useState } from 'react'
import  logo  from    '/logo.png'
import{AiOutlinePlus}  from'react-icons/ai'
import { sideData } from './sidebardata'
export const Sidebar = () => {
    const[isOpen,setIsOpen]=useState(true)
    const  toggleSidebar=()=>{
        setIsOpen((state)=>!state)
    }
  return (
    <section    className={`${isOpen?'w-60':'w-12'} h-full  bg-[#F3FBFF]    rounded-l-lg       p-4 flex    flex-col    border-r-2    border-r-gray-400/40`    }>
        <img src={logo} alt="" className='w-full    h-10    object-contain'/>
        <div className="flex-1  mt-10    ">
            <button className='w-full   h-20  font-semibold   rounded-lg  flex    items-center    justify-between p-3 text-xl   hover:outline  hover:outline-[#1B49C1]/40  transition-all'>
                Create new Task
                <span className="w-10 h-10  grid    items-center    bg-[#1B49C1]    rounded-full    justify-center  hover:scale-105 transition-all  shadow-sm   shadow-[#1B49C1]    ">
                    <AiOutlinePlus  className='text-2xl text-white  font-normal'/>
                </span>
            </button>

            <div className="flex-1  flex-col   w-full    items-start mt-10">
            {
                sideData.map((datum,index)=>{
                    return  <div className="w-full  h-8  hover:bg-[#1B49C1]/40 hover:border-l-4 hover:border-l-[#1B49C1]  transition-all  hover:cursor-pointer hover:text-white    hover:rounded-md"    key={index+datum.to}>
                           <div className="h-full   w-[60%] flex    items-center  gap-4 justify-start  text-[14px]  font-light  mx-auto">
                           {datum.icon}
                            <p className="   ">
                                {datum.text}
                            </p>
                           </div>
                    </div>
                })
            }
            </div>
        </div>
    </section>
  )
}
