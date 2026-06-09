import React from 'react'
import { Link } from 'react-router-dom'
import { Info, CalendarDays, House, PhoneCall } from 'lucide-react'

const Nav = () => {
  return (
    <div className="rounded-full px-8 py-3 bg-white/5 backdrop-blur-2xl flex gap-8 items-center justify-center border border-gray-600/50 text-white text-sm font-semibold tracking-wider">
        <Link to="/" className="hover:text-purple-400 transition"><House size={16} strokeWidth={1.5}  /></Link>
        <Link to="/about" className="hover:text-purple-400 transition"><CalendarDays size={16} strokeWidth={1.5}  /></Link>
        <Link to="/about" className="hover:text-purple-400 transition"><Info size={16} strokeWidth={1.5}  /></Link>
        <Link to="/certificate" className="hover:text-purple-400 transition"><PhoneCall size={16} strokeWidth={1.5} /></Link>
    </div>
  )
}

export default Nav