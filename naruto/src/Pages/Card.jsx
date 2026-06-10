import React from 'react'
import { Link } from "react-router-dom";

import Pain from '../Components/Icons/Pain';

const Card = () => {
  return (
    <div className='flex flex-col'>
        <Pain/>
        <button className='flex flex-row items-center justify-center '>
            <Link to='/Pain'>
               <div className=' bg-fuchsia-700 h-50 w-50 rounded-2xl '>
                  <img src="/Pain.svg" alt="My Pic" className='h-50 w-50 -mt-22'/>
                </div>
            </Link>
        </button>
    </div>
  )
}

export default Card