import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import './loader.css'

const Loader = () => {
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(!prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return

    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, 1500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="loader__word"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Lokesh Ponraj
          </motion.span>
          <motion.div
            className="loader__bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
