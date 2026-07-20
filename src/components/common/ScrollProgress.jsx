import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './scroll-progress.css'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 200, mass: 0.2 })

  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

export default ScrollProgress
