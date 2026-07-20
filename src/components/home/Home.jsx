import React, { useEffect, useRef } from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'
import Constellation from '../common/Constellation'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useAnimationFrame,
} from 'framer-motion'

const IDLE_SPIN_SPEED = 6 // degrees per second, always-on so the ring is never fully still
const MAX_SPIN_SPEED = 70

const HeroVisual = () => {
  const ref = useRef(null)
  const ringRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const yBack = useTransform(scrollYProgress, [0, 1], [0, 220])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 120])
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -60])
  const scrollTilt = useTransform(scrollYProgress, [0, 1], [0, 40])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { damping: 25, stiffness: 60, mass: 0.6 })
  const springY = useSpring(my, { damping: 25, stiffness: 60, mass: 0.6 })
  const xInk = useTransform(springX, (v) => v * -0.6)
  const yInk = useTransform([yMid, springY], ([scroll, mouse]) => scroll + mouse * -0.5)

  // Continuous rotation that speeds up when the pointer is near/moving over the ring
  const spin = useMotionValue(0)
  const spinSpeed = useRef(IDLE_SPIN_SPEED)
  const proximity = useMotionValue(0)
  const proximitySpring = useSpring(proximity, { damping: 20, stiffness: 120 })
  const ringScale = useTransform(proximitySpring, [0, 1], [1, 1.12])
  const ringGlow = useTransform(proximitySpring, [0, 1], [0.55, 1])

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return
    spinSpeed.current += (IDLE_SPIN_SPEED - spinSpeed.current) * 0.02
    spin.set(spin.get() + spinSpeed.current * (delta / 1000))
  })

  const rotate = useTransform([spin, scrollTilt], ([a, b]) => a + b)

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMove = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 50)
      my.set((e.clientY / window.innerHeight - 0.5) * 50)

      if (!ringRef.current) return
      const rect = ringRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
      const radius = rect.width * 1.6
      const closeness = Math.max(0, 1 - dist / radius)
      proximity.set(closeness)
      spinSpeed.current = Math.min(MAX_SPIN_SPEED, spinSpeed.current + closeness * 8)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion])

  return (
    <div className="home__visual" ref={ref} aria-hidden="true">
      <motion.div className="home__blob home__blob--amber" style={{ y: yBack, x: springX }} />
      <motion.div
        className="home__blob home__blob--ink"
        style={{ y: yInk, x: xInk }}
      />
      <motion.div
        className="home__ring"
        ref={ringRef}
        style={{ y: yFront, rotate, scale: ringScale, opacity: ringGlow }}
      >
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <circle cx="100" cy="100" r="98" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
          <circle cx="100" cy="2" r="3" fill="var(--accent)" />
          <circle cx="100" cy="198" r="1.6" fill="var(--accent)" opacity="0.5" />
        </svg>
      </motion.div>
      <div className="home__grid-dots" />
      <Constellation />
    </div>
  )
}

const Home = () => {
  return (
    <section className="home section" id="home">
      <HeroVisual />
      <div className="home__container container">
        <Social />
        <Data />
      </div>
      <Scroll />
    </section>
  )
}

export default Home
