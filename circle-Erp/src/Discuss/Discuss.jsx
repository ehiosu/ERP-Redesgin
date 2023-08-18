import React, { useState } from 'react'
import {  TextData } from '../Data/Data'
import { ChannelsAccordion, ChatAccordion } from '../Components/Accordion/Accordion'
import { AiOutlinePhone, AiOutlineSearch, AiOutlineSend, AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import {differenceInCalendarDays, parse, parseISO} from 'date-fns'
import {GoSmiley} from  'react-icons/go'
import { MdAttachment } from 'react-icons/md'
export const Discuss = () => {
  const [activeTab,setActivetab]=useState(0)
  return (
    <section    className='flex-1   overflow-y-auto overflow-x-hidden  h-full    bg-white flex  flex-col  gap-2'>
      <div className="w-full h-10  bg-[#1945B7]  rounded-t-xl  shadow-md flex items-center justify-end p-2  ">
       <div className="flex items-center  h-7 text-white  ">
        <span className="h-full aspect-square rounded-l-md  p-1 grid place-items-center bg-[#7cc9f658]">
          <AiOutlineSearch/>
        </span>
       <input type="text" name="" id="" className='bg-[#7cc9f658]  w-[24rem]  h-full rounded-r-md   outline-none  p-2  text-[13px]'/>
       </div>
       <BsThreeDots className='ml-5 mr-2 text-white'/>
        <div className="relative h-9 aspect-square overflow-hidden  mr-6">
          <span className='h-full w-full  rounded-full bg-[#ffa36f26] grid  place-items-center  text-[14px] font-semibold text-white  '>
              OT
          </span>
        </div>

      </div>
       <section className="flex flex-1 flex-row gap-2 ">
       <section className="h-[100%]  max-w-[20rem] w-full     px-2    py-2    flex    flex-col  bg-[#F3FBFF]  shadow-md">
            <p className="text-2xl w-full   border-b-4   border-b-[#1B49C1]  rounded-b-md    font-semibold h-auto  my-4    px-2  ">
                Discuss
            </p>
         <ChannelsAccordion />
        <ChatAccordion activeTab={activeTab} setActivetab={setActivetab}/> 
        {/* <Channels/> */}
        </section>
        <section  className='flex-1 rounded-md p-2 bg-[#F3FBFF] shadow-sm'>
          <ChatComponent  activeTab={activeTab}/>
        </section>  
       </section>
    </section>
  )
}

const ChatComponent=({activeTab})=>{
  
  const determineDateChange=(oldDate,newDate)=>{
    
    return  differenceInCalendarDays(parseDateString(newDate),parseDateString(oldDate))>0
  }

  function parseDateString(dateString) {
    const [datePart, timePart] = dateString.split(', ');
    const [day, month, year] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
  
    const dateObject = new Date(year, month - 1, day, hours, minutes);
  
    return dateObject;
  }
  
return(
  <section className="w-full h-full  relative ">
    <div  className='h-12 w-full  flex  justify-between border-b-2  border-b-[#1945B7]/50  p-2'>
     <div className="flex items-center  gap-4">
     <span className="h-full aspect-square bg-[#65cac433]  rounded-full  grid  place-items-center">
      {TextData[activeTab].recepient_Username.split(' ')[0][0]}
        {TextData[activeTab].recepient_Username.split(' ')[1][0]}
      </span>
      <p  className='text-[1.625rem]  font-semibold'>{TextData[activeTab].recepient_Username}</p>
     </div>

     <div className="flex items-center  gap-2">
      <div className="h-full aspect-square  border-2  border-[#1945B7]  bg-white  rounded-sm  grid place-items-center hover:cursor-pointer  hover:shadow-md group transition-all">
        <AiOutlinePhone className='text-[20px]  text-[#1945B7]  group-hover:text-[24px] transition-al'/>
      </div>
      <div className="h-full aspect-square  border-2  border-[#1945B7]  bg-white  rounded-sm  grid place-items-center hover:cursor-pointer  hover:shadow-md group transition-all">
        <AiOutlineVideoCameraAdd className='text-[20px]  text-[#1945B7] group-hover:text-[24px] transition-all'/>
      </div>
     </div>
    </div>
    {
      TextData[activeTab].chat.map((message,index)=>{
        {

          const _index=index
        
      
       return  <Message  data={message}  dateChange={determineDateChange(TextData[activeTab].chat[(index===0?index:_index-1)]?.timestamp,message.timestamp)}/>
      }})
    }

    <section className="absolute w-full bottom-[10px] p-2 flex    h-auto   ">
      <textarea name="" className='flex-1 h-20  max-h-32  p-2 text-[14px]  shadow-md border-2  border-[#1945B7]  rounded-md  resize-x-none  outline-none  border-r-0  rounded-r-none  ' id="" cols="30" rows="10"/>
      <div className="   flex-[0.2] flex  items-start  bg-white  border-2  border-[#1945B7] border-l-0 rounded-r-md p-2 gap-2">
        <button className='w-8  h-8 bg-white  border-2  border-[#1945B7]  grid  place-items-center  text-[#1945B7]'>
          <GoSmiley/>
        </button>
        <button className='w-8  h-8 bg-white  border-2  border-[#1945B7]  grid  place-items-center  text-[#1945B7]'>
          <MdAttachment className='stroke-[#1945B7]'/>
        </button>
        <button className='  h-8 text-white  border-2  bg-[#1945B7]  flex items-center  justify-between p-2 rounded-sm  outline-none  border-white  shadow-md w-28'>
         Send <AiOutlineSend/>
        </button>
      </div>
    </section>

  </section>
)
}


const Message=({data,dateChange})=>{
  console.log(dateChange)
  return(
    <div  className='w-full  items-center   my-4   h-auto'>
      {
        data.recipient!=='you'&&
        <div  className='w-full flex  justify-start min-h-8  items-center  gap-4 '>
          <span className='h-9  aspect-square rounded-full  bg-[#65cac433]  grid  place-items-center  text-[14px] font-semibold'>
            {data.recipient.split(' ')[0][0]}
            {data.recipient.split(' ')[1][0]}

          </span>
          <div  className='w-auto   bg-white  rounded-r-xl  rounded-bl-2xl  shadow-md p-2 max-w-[60%]'>
            <p className="w-full  text-[13px]">{data.message}</p>
          </div>

        </div>
      }
       {
        data.recipient==='you'&&
        <div  className='w-full flex  justify-end min-h-8  items-center  gap-4 '>
             <div  className='w-auto   bg-white  rounded-r-xl  rounded-bl-2xl  shadow-md p-2 max-w-[60%]'>
            <p className="w-full  text-[13px]">{data.message}</p>
          </div>
          </div>
        
       }

    </div>
  )
}