import React from 'react'

const Pain = () => {
  return (
    <div className='bg-amber- flex flex-row w-full mt-3 items-center justify-between gap-5'>

        <div className=' flex flex-col w-1/2 gap-10'>
          <div><h1 className=' text-gray-200 tracking-widest text-sm font-semibold border-2 border-gray-600 w-50 flex items-center justify-center py-1 rounded-l-full rounded-r-full bg-white/5 backdrop-blur-2xl'>AKATSUKI LEADER</h1></div>
          <div><h1 className=' text-gray-300 font-sans text-3xl tracking-wide leading-15'>FELL PAIN ACCEPT PAIN & KNOW PAIN<br/> THOSE WHO DO NOT KNOW PAIN <br/>WILL NEVER UNDERSTAND TRUE PEACE</h1></div>
          <div><p className=' text-text2 text-lg tracking-wide leading-8'>Pain, also known as Nagato, is a central antagonist in Naruto Shippuden. Acting as the leader of the Akatsuki organization and self-proclaimed god of Amegakure (Hidden Rain Village), he embodies the theme of suffering as a means to achieve peace.</p></div>
        </div>

        <div className='w-1/2'>
        <img src="/Pain.svg" alt="My Pic" className='h-150 ml-22'/>
        </div>

    </div>
  )
}

export default Pain