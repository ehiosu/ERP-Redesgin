import React, { useState } from 'react'
import { TextChannels, TextData } from '../../Data/Data'
import { ChannelAccordionItem } from './AccordionItem'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsDashLg } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

const Accordion = () => {
  return (
    <div>Accordion</div>
  )
}


export const  ChannelsAccordion=()=>{
    const  [open,setOpen]=useState(false)
    return(
        <div className={`w-full   ${open?' duration-1000    overflow-y-auto      max-h-52 flex-[0.4]   ':'h-12 flex    items-center   '}  bg-white   transition-all duration-700    px-2    py-2       rounded-md   shadow-md`}>
            <div className="flex justify-between items-center   text-[18px] h-10        sticky  top-0   bg-white    w-full">
            <p  className='font-[500]    text-[14px] '>Channels</p>
          {
            open?  <BsDashLg     onClick={()=>{setOpen((open)=>!open)}}/> :  <MdKeyboardArrowDown    onClick={()=>{setOpen((open)=>!open)}}/>
          }
            {

            }
            </div>
           <div className={`w-full h-auto ${!open?'hidden':'visible animate-opacity'}   max-h-full   `}>
           {
                TextChannels.map((channel,index)=>{
                    
                    return <ChannelAccordionItem  index={index} data={channel}/>
                })
            }
           </div>
        </div>
    )
}

export const  ChatAccordion=({activeTab,setActivetab})=>{
    const  [open,setOpen]=useState(false)
    return(
        <div className={`w-full overflow-y-auto   ${open?'    flex-1    ':'h-12'}   flex   flex-col  transition-all duration-700         bg-white rounded-md  shadow-md  my-4`    }>
           
             <div className="flex justify-between items-center  text-[14px] sticky   top-0  px-2    py-2    font-semibold">
                <p  className='font-semibold'>Recent</p>
             {
            open?  <BsDashLg     onClick={()=>{setOpen((open)=>!open)}}/> :  <MdKeyboardArrowDown  className='font-semibold'  onClick={()=>{setOpen((open)=>!open)}}/>
          }
          
             </div>
             <div className={`flex-1 w-full p-2   overflow-y-auto  ${open?'visible':'hidden' } `}>
             {
                open&&<div className="w-full h-full      animate-opacity p-2">
                    <div className="w-full flex h-8 items-center">
                        <div    className='h-8 w-8  grid    place-items-center    rounded-l-xl    bg-[#1B49C1]    text-white'>
                            <AiOutlineSearch/>
                        </div>
                        <input type="text" className="flex-1  border-2  border-[#1B49C1]    h-full  rounded-r-xl    p-2 outline-none    text-[12px] text-[#1B49C1]" />
                    </div>
                {
                    TextData.map((chat,index)=>{
                        
                        return <div key={chat.chatID+chat.recepient_Username}   className={`flex gap-[0.4rem] p-2   w-full  h-[3.5rem]        items-center    my-2 ${index===activeTab&&'bg-neutral-400/20  rounded-lg  font-semibold'}   `}   onClick={()=>{setActivetab((tab)=>index)}}>
                            <span   className='h-10 w-10    rounded-full    bg-[#65CAC4]    flex   items-center justify-center  text-[16px]     font-semibold   p-2'>
                                {chat.recepient_Username.split(' ')[0][0].toUpperCase()}
                                {chat.recepient_Username.split(' ')[1][1].toUpperCase()}
                            </span>
                            <div className="flex flex-col flex-1    justify-start">
                                <p  className='text-[14px]'>{chat.recepient_Username}</p>
                                 <p className="text-[10px]     line-clamp-1 ">{chat.chat[chat.chat.length-1].recipient!=='you'&&<span   className='text-[12px]  font-bold'>You: </span>}{chat.chat[chat.chat.length-1].message}</p> 

                            </div>
                        </div>
                    })  
                }
             </div>
}
          </div>
             
        </div>

    )
}
