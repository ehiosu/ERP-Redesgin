import React from 'react'
import { useState } from 'react'
import  logo from   '/logo.png'

import  right from   '/Right-Side.png'
import  left from   '/Left-Side.png'
import { useNavigate } from 'react-router-dom'


export const Auth = () => { 
    const [login,setIsLogin]=useState(true)

  return (
    <main   className='w-full   h-screen    overflow-hidden relative    bg-white'>
        <div className="w-full  h-full  flex  flex-col md:flex-row overflow-hidden ">
            <Signup login={login} setIsLogin={setIsLogin}/>
            {/* sign-up-above */}
            <Login  login={login} setIsLogin={setIsLogin}/>
<div    className={`md:w-1/2  w-full h-[25vh]  md:h-full  bg-[#1945B7] absolute  overflow-hidden    top-0  ${login?'left-0 md:top-auto top-0  md:rounded-b-none rounded-b-lg  ':'md:left-[50%] md:top-auto  left-0 top-[75vh] md:rounded-t-none  rounded-t-lg'}     transition-all ease-in-out  duration-1000  `  }>
<div className="w-full  h-full ">
<img src={left} className=' h-full    object-cover  absolute  left-0  ' alt="" /> 
<img src={right} className=' h-full   absolute right-0  object-cover' alt="" /> 
<div className="flex-col  flex  h-full  w-[90%] mx-auto     justify-center  text-white    text-start  p-4 md:gap-2 gap-0">
<p className="md:text-6xl text-lg">
Designed for Amazing Employees
</p>
<p  className='md:text-3xl text-[14px] text-white/80'>Accelerate your business with Circle ERP</p>
<p className="md:text-lg text-white/60 text-xs">
Streamline operations, boost productivity and gain 
valuable insights with this powerful, intuitive solution! 
</p>
</div>
   
</div>
</div>
        </div>
    </main>
  )
}


const Login=({login,setIsLogin})=>{
  const Nav=useNavigate()
  return(
    <div className={`md:w-1/2  transition-all w-full ${login?'md:flex-grow-0  flex-grow-1':'md:h-auto h-[25vh] '} md:h-full  flex items-center justify-start md:justify-center  p-2 md:p-4  overflow-hidden`  }>
    <div className={`w-full h-full    bg-white   ${login?'md:translate-x-0  md:translate-y-0  translate-y-0 opacity-100 delay-500 ':'opacity-0 -z-10 md:-translate-x-[200%] md:translate-y-0 sm:translate-x-0 translate-y-[-400%] delay-500 '} transition-all p-4   rounded-lg  flex  flex-col  gap-2  sm:justify-start    sm:p-4 `}>
      <div className="w-full  h-auto  flex  justify-end items-center  ">
        <img src={logo} alt=""  className='w-40 object-contain '/>

      </div>
      <div className="flex-1   flex  flex-col        md:items-center items-start ">
       <div className="md:w-[50%] :w-full h-auto  flex  flex-col  p-2 md:mt-20 mt-0">
       <p className="text-2xl  font-semibold"> Welcome Back!</p>
        <p className="text-[12px] text-neutral-400  my-2">
          Enter your detais to sign back into your account
        </p>
        <div class="relative">
    <input type="email" id="email" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm outline-none border-0 border-b-2  appearance-none  peer" placeholder=" " />
    <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email </label>
</div>
<div class="relative  my-2">
    <input type="password" id="pass1" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm outline-none border-0 border-b-2  appearance-none  peer" placeholder=" " />
    <label for="pass1" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password </label>
</div>
        
        <p className="w-full  text-right  text-[12px] mt-2  text-blue-700">
          Forgot Password?
        </p>
        <button className="w-full text-white  font-semibold my-4  rounded-xl  bg-blue-700 p-1 hover:outline-2 hover:outline hover:outline-blue-400  hover:outline-offset-2  transition-all" onClick={()=>{Nav('/Home')}}>
          Sign In
        </button>

        <p className="text-xs text-center">Don't have an account?<span  onClick={()=>{
      setIsLogin(false)
    }}  className='text-blue-400  ml-1  cursor-pointer'>Sign Up</span></p>
       </div>
      </div>
 
            </div>
</div>
  )
}

const Signup=({login,setIsLogin})=>{
  return(
    <div className={`md:w-1/2    w-full ${login?'h-[25vh]':'flex-grow-1'}  md:h-full  flex items-center justify-start md:justify-center  p-0 md:p-4` }>
            <div className={`w-full h-full    bg-white ${login?'translate-x-[200%]  opacity-0':'  opacity-100 translate-x-0  delay-500 '}  transition-all  p-3`}>
            <div className="w-full  h-auto  flex  justify-start items-center  ">
        <img src={logo} alt=""  className='w-40 object-contain '/>

      </div>
      <div className="flex-1   flex  flex-col      md:items-center items-start ">
       <div className="md:w-[50%] w-full h-auto  flex  flex-col  p-2 md:mt-20 mt-0">
       <p className="md:text-2xl  md:mt-0 text-xl  mt-3 font-semibold"> Hi There!</p>
        <p className="text-[12px] text-neutral-400  md:my-2  my-1">
          Enter your detais to create a new account
        </p>
        <div class="relative">
    <input type="email" id="email" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm outline-none border-0 border-b-2  appearance-none  peer" placeholder=" " />
    <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email </label>
</div>
<div class="relative  my-2">
    <input type="text" id="name" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm outline-none border-0 border-b-2  appearance-none  peer" placeholder=" " />
    <label for="name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name </label>
</div>
<div class="relative  my-2">
    <input type="password" id="pass1" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm outline-none border-0 border-b-2  appearance-none  peer" placeholder=" " />
    <label for="pass1" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password </label>
</div>
<div class="relative  my-2">
    <input type="password" id="pass2" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm outline-none border-0 border-b-2  appearance-none  peer" placeholder=" " />
    <label for="pass2" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm Password </label>
</div>
        
       
        <button className="w-full text-white  font-semibold my-4  rounded-md  bg-blue-700 p-1  ">
          Sign Up
        </button>

        <p className="text-xs text-center">Already have an account?<span  onClick={()=>{
      setIsLogin(true)
    }}  className='text-blue-400  ml-1  cursor-pointer'>Log In</span></p>
       </div>
      </div>
            </div>
            </div>
  )
}