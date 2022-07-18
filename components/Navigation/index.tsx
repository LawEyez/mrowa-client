import React, { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'

import Brand from '@components/Brand'
import Contact from '@components/Contact'
import NavLink from '@components/NavLink'


const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full h-12 lg:w-52 lg:h-full z-50
    bg-gray-900/80 flex align-center justify-between lg:flex-col lg:justify-center
    gap-12'>
      
      <Brand />
      
      <div
        className='text-white w-max h-max absolute right-6
        cursor-pointer top-1/2 -translate-y-1/2 lg:hidden'
        onClick={() => setOpen(prev => !prev)}
      >
       <CgMenuRight />
      </div>

      <div className={`flex flex-col gap-12 translate-y-12 bg-gray-900 translate-x-full
      lg:translate-x-0 lg:translate-y-0 ${open && 'translate-x-0'}
      absolute w-full lg:relative transition duration-200`}>
        <div className='flex flex-col w-full'>
          <NavLink path='/' name='home' />
          <NavLink path='/about' name='about' />
          <NavLink path='/what-we-do' name='what we do' />
          <NavLink path='/our-process' name='our process' />
          <NavLink path='/our-team' name='our team' />
          <NavLink path='/testimonials' name='testimonials' />
        </div>

        <Contact />
      </div>
    </nav>
  )
}

export default Navigation