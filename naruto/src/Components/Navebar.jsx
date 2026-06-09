import React from 'react'
import Logo from './Icons/Logo'
import Nav from './Icons/Nav'

const Navebar = () => {
  return (
    <div className='relative z-10 px-3 py-1 bg-amber h-16 flex flex-row items-center justify-between'>
        <Logo/>
        <Nav/>
    </div>
  )
}

export default Navebar