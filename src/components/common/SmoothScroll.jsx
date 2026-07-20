import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'

const SmoothScroll = ({ children }) => {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.11,
      wheelMultiplier: 1,
    })

    return () => lenis.destroy()
  }, [prefersReducedMotion])

  return <>{children}</>
}

export default SmoothScroll
