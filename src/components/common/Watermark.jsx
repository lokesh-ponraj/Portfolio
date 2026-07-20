import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import './watermark.css'

const Watermark = ({ text, align = 'left' }) => {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const range = prefersReducedMotion ? [0, 0] : [70, -70]
  const y = useTransform(scrollYProgress, [0, 1], range)

  return (
    <div className={`watermark watermark--${align}`} ref={ref} aria-hidden="true">
      <motion.span className="watermark__text" style={{ y }}>
        {text}
      </motion.span>
    </div>
  )
}

export default Watermark
