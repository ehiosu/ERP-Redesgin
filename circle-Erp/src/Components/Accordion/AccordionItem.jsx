import React from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

export const ChannelAccordionItem = ({data,index}) => {
    const {channelName}=data
  return (
    <div    className={`max-w-full  ${index===0?'mt-3':'my-2'} flex  h-12 rounded-bl-xl items-center   gap-[0.5rem] px-2      transition-colors   hover:cursor-pointer   hover:font-bold  `   }>
        <span   className='h-10 aspect-square  rounded-full bg-[#48cae4]/20 text-[#48cae4]    grid    place-items-center  text-[20px] '>
            <AiOutlineUsergroupAdd/>
        </span>
        <p>{channelName}</p>
    </div>
  )
}

