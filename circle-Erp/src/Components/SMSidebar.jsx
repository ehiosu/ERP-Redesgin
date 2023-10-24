import React, { useState } from 'react'
import { AiOutlineCloseCircle, AiOutlinePlus } from 'react-icons/ai'
import { sideData } from './sidebardata'
import { CiMenuBurger } from 'react-icons/ci'

export const SMSidebar = () => {
    const [visible,setVisible]=useState(false)
  return (
    <section  className={`md:hidden  visible fixed top-3   ${visible?'left-0    z-[4000]  h-[100vmax] w-full':'left-3'}   ${visible&&'bg-black/40 backdrop-blur-md    '}  `} >
        <div    className={`${visible?'hidden':'visible'}   w-12 rounded-full    aspect-square  bg-white   animate-opacity grid    place-items-center  shadow-md`}   onClick={()=>{setVisible((isvisible)=>!isvisible)}}>
            <CiMenuBurger   className='text-[1rem]  text-[#1B49C1]  font-bold'/>
        </div>
        <section    className={`${visible?'visible':'hidden'}   animate-transform   h-[100vmax]  w-[80vw]    bg-white  border-r-gray-400/40`}>
            <div    className='animate-opacity  delay-1000  flex    flex-col    items-start gap-2   p-3 '>
                <AiOutlineCloseCircle   className='ml-auto  text-[1.5rem] text-[#1B49C1]' onClick={()=>{setVisible((visible)=>!visible)}}/>
                <button className='w-full   h-20  font-semibold   rounded-lg  flex    items-center    justify-between p-3 text-xl   hover:outline  hover:outline-[#1B49C1]/40  transition-all'>
                Create new Task
                <span className="w-10 h-10  grid    items-center    bg-[#1B49C1]    rounded-full    justify-center  hover:scale-105 transition-all  shadow-sm   shadow-[#1B49C1]    ">
                    <AiOutlinePlus  className='text-2xl text-white  font-normal'    />
                </span>
            </button>

            <div className="flex-1  flex-col   w-full    items-start mt-1 ">
          
                {sideData.map((datum,index)=>{
                    
                    return  <div className={`w-full  h-8    transition-all  ${datum.to==='/Home'?'':'  text-neutral-500'}      ${window.location.pathname==datum.to?'bg-[#1B49C1] text-white  rounded-2xl font-bold':'hover:bg-[#1B49C1]/40 hover:border-l-4 hover:border-l-[#1B49C1] hover:cursor-pointer hover:text-white    hover:rounded-md'}  my-1`} onClick={()=>{Nav(datum.to==='/Home'?datum.to:'/Home')}}   key={index+datum.to} >
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


    </section>
  )
}
