import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main   className='w-full   h-screen   overflow-hidden  flex gap-[0.5rem]   p-3  bg-white'>
        <Sidebar/>
        <Outlet/>
    </main>
  )
}
