import React from 'react'
import { motion } from 'framer-motion'

const Scroll = () => {
  return (
    <motion.a
      href="#about"
      className="home__scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      aria-label="Scroll to About section"
    >
      <span className="home__scroll-line">
        <motion.span
          className="home__scroll-dot"
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>
      <span className="home__scroll-label">Scroll</span>
    </motion.a>
  )
}

export default Scroll
