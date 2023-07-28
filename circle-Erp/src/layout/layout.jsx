import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <main   className='w-full   h-screen   overflow-hidden  flex    p-3  bg-white'>
        <Sidebar/>
        <Outlet/>
    </main>
  )
}
