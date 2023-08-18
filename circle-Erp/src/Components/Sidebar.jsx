import React, { useEffect, useState } from 'react'
import  logo  from    '/logo.png'
import{AiOutlinePlus}  from'react-icons/ai'
import {CiMenuBurger}   from 'react-icons/ci'
import { sideData } from './sidebardata'
import { Link, useNavigate } from 'react-router-dom'
export const Sidebar = () => {
    const[isOpen,setIsOpen]=useState(true)
    const  Nav=useNavigate()
    const  toggleSidebar=()=>{
        setIsOpen((state)=>!state)
    }

  return (
    <section    className={`${isOpen?'w-60  text-opacity-100':'w-12   text-opacity-0'} h-full  00    rounded-l-lg   transition-all   duration-700    p-4 flex    flex-col    border-r-2    border-r-gray-400/40`    }>
        <div className={`flex  ${isOpen?'justify-end':'justify-center'} items-center   ` }>
                <CiMenuBurger   className='hover:scale-125  hover:font-extrabold hover:drop-shadow-md    transition-all'    onClick={()=>{setIsOpen((open)=>!open)}}/>
        </div>
        {
            isOpen&&<div    className='animate-opacity '>
                <img src={logo} alt="" className='w-full    h-10    object-contain  mt-[1rem]'/>
        <div className="flex-1  mt-10    ">
            <button className='w-full   h-20  font-semibold   rounded-lg  flex    items-center    justify-between p-3 text-xl   hover:outline  hover:outline-[#1B49C1]/40  transition-all'>
                Create new Task
                <span className="w-10 h-10  grid    items-center    bg-[#1B49C1]    rounded-full    justify-center  hover:scale-105 transition-all  shadow-sm   shadow-[#1B49C1]    ">
                    <AiOutlinePlus  className='text-2xl text-white  font-normal'    />
                </span>
            </button>

            <div className="flex-1  flex-col   w-full    items-start mt-10">
            {   isOpen&&
                sideData.map((datum,index)=>{
                    
                    return  <div className={`w-full  h-8    transition-all      ${window.location.pathname==datum.to?'bg-[#1B49C1] text-white  rounded-2xl font-bold':'hover:bg-[#1B49C1]/40 hover:border-l-4 hover:border-l-[#1B49C1] hover:cursor-pointer hover:text-white    hover:rounded-md'}`} onClick={()=>{Nav(datum.to)}}   key={index+datum.to} >
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
            </div>
        }
        {
            !isOpen&&<div className="flex flex-col  mt-8    items-center    animate-opacity">
                {
                    sideData.map((datum)=>{
                        return <div className={`w-8  flex items-center   justify-center   h-8 my-2   ${window.location.pathname===datum.to&&'bg-[#1B49C1] rounded-md  text-white'} `} to={datum.to}  key={datum.text+datum.to}  onClick={()=>{Nav(datum.to)}} >
                        {datum.icon}
                    </div>
                        
                    })
                }
            </div>

        }
    </section>
  )
}
