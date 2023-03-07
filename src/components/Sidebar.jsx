import React from 'react'
import { Link } from 'react-router-dom'
import { FcTodoList } from 'react-icons/fc'

function Sidebar() {
  return (
    <>
    <div className=''>
        <nav className='top-0 pt-3 pb-3 h-auto bg-[#2B3467] text-white'>
          <ul className='mx-10 flex content-center justify-center'>
            <li className='flex justify-center align-center'><Link className='flex' to='/'><span className='font-style:italic font-semibold font-sans text-2xl'>To</span><FcTodoList className='mx-3 w-8 h-8'/><span className='font-semibold font-sans font-style:italic text-2xl'>Do</span></Link></li>
          </ul>
        </nav>
    </div>
    </>
  )
}

export default Sidebar