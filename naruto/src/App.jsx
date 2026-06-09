import React from 'react'
import { motion } from 'framer-motion'

import Navebar from './Components/Navebar'

const App = () => {
  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] scroll-smooth py-5 px-10'>
      <div className="absolute inset-0 bg-[#191622] opacity-90 z-0" />

      {/* Animated Gradient Circle 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}/>

      {/* Animated Gradient Circle 2 */}
      <motion.div
        animate={{
          x: [0, -120, 50, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}/>

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute bg-white rounded-full z-0"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <Navebar/>
    </div>
  )
}

export default App