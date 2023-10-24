import React from 'react'
import logo from   '../../public/logo.png'
import { ScrollData } from '../Data/Data'
import { useNavigate } from 'react-router-dom'
export const Landing = () => {
  const Nav=useNavigate()
  return (
    <main   className='w-full   h-screen   bg-[#E0F4FF]  relative  after:w-[100%]   after:h-[150%] after:absolute  after:z-[5]   after:rounded-[123rem]  after:bg-white after:-top-[25%] after:-left-[15%]   overflow-hidden'>
        <div className="absolute    w-full  h-full  top-0   left-0  z-10    p-2">
          <div className="flex justify-start lg:h-24  md:h-16 h-16   items-start  ">
          <img src={logo} alt="asseco-logo" className='h-full   aspect-video   object-contain' />
          </div>
          <div className="absolute  top-[1rem] right-[1rem] w-56  h-10   flex  items-center  gap-2">
            <button className='w-1/2  bg-transparent  text-[#1B49C1]  hover:border-2  hover:border-[#1B49C1]  rounded-md  p-1 transition-all  font-[600]' onClick={()=>{Nav('/Auth')}}>
              Sign Up
            </button>
            <button className='w-1/2  bg-[#1B49C1]  rounded-md  p-1 text-white  font-[600]' onClick={()=>{Nav('/Auth')}}>
              Log In
            </button>
            
          </div>
         <div   className='md:ml-[6rem]   mt-[3rem] md:max-w-[60%]  xl:max-w-[50%]  max-w-[90%] '>
         <p className='xl:text-[3rem] md:text-[2.5rem]   w-full md:w-[90%] font-[600]    text-[1.375rem]'    >Streamline Your Business   <br /> Unleash Your Potential  <br /> with <span    className='text-[#1B49C1]   '>Circle ERP</span></p>
         <p className='lg:text-[1.15rem]  md:text-[1.3rem]  font-semibold   mt-[1rem]   text-[0.8275rem]    w-[90%] '>A comprehensive solution for managing various aspects of business operations to drive organizational success</p>
         <p className='md:text-[0.85rem]  text-[0.7rem]   mt-[1rem]   w-[90%]   '>Operate more efficiently, improve decision-making, and achieve strategic objectives with Circle ERP.</p>
         </div>
         <div className="flex   h-[30vh]    mt-[1.5rem]  md:animate-md-marquee-infinite animate-sm-marquee-infinite lg:animate-marquee-infinite    w-[200%]  lg:gap-[0.75rem] xl:gap-[0.4rem] md:gap-[0.75rem] gap-[2rem]  justify-between">
          <div className="md:w-[100vw]  w-max h-full  flex justify-evenly  lg:gap-[0.5rem] xl:gap-[0.4rem] md:gap-[0.75rem]    items-center gap-[1rem]">
          {
                ScrollData.map((data,index)=>{
                    return  <ScrollCard data={data}/>
                })
            }
          </div>
          <div className="md:w-[100vw]  w-max h-full  flex    justify-evenly  lg:gap-[0.5rem]  md:gap-[0.75rem] xl:gap-[0.4rem]   items-center gap-[1rem]  ">
          {
                ScrollData.map((data,index)=>{
                    return  <ScrollCard data={data}/>
                })
            }
          </div>
         </div>

        </div>
    </main>
  )
}

export const ScrollCard=({data})=>{
    return(
        <div    className={`h-[80%] flex-1   xl:w-60 md:w-60   rounded-2xl  p-4  w-40  ${data.style}  flex flex-col    justify-between shadow-md sm:w-[32rem]`  }>
           <div className='text-[2.5rem]    font-bold   text-white'> {data.icon}</div>
            <p  className='mt-auto text-[1rem]  lg:text-[1.2rem] font-bold  border-b-2   border-b-white/50       text-white p-1'>{data.title}</p>
        </div>
    )
}