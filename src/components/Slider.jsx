import React from 'react'
import images from '../exports/images'
import '../styles/styles.css'
import { motion } from 'framer-motion'

const Slider = () => {
  return (
    <motion.div className='slider-container'>
      <motion.div
        className='slider'
        drag='x'
        dragConstraints={{ right: 0, left: -1700 }}
      >
        {images.map((image) => (
          <motion.div className='item' key={image}>
            <img src={image} alt='' />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Slider
