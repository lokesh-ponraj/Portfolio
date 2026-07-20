import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import './cursor.css'

const IDLE_TIMEOUT = 2200
const SCROLL_RESET = 500

const findTarget = (el) => el.closest('a, button, [role="button"], [data-cursor="hover"]')

const Cursor = () => {
  const prefersReducedMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hoverLabel, setHoverLabel] = useState('')
  const [asleep, setAsleep] = useState(false)
  const [blink, setBlink] = useState(false)
  const [typing, setTyping] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const idleTimer = useRef(null)
  const blinkTimer = useRef(null)
  const scrollTimer = useRef(null)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 26, stiffness: 320, mass: 0.4 })
  const springY = useSpring(y, { damping: 26, stiffness: 320, mass: 0.4 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (prefersReducedMotion || !isFinePointer) return

    setEnabled(true)
    document.body.classList.add('cursor-active')

    const wake = () => {
      setAsleep(false)
      clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setAsleep(true), IDLE_TIMEOUT)
    }

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      wake()
    }

    const handleOver = (e) => {
      const target = findTarget(e.target)
      if (target) {
        setHovering(true)
        setHoverLabel(target.getAttribute('data-cursor-label') || '')
      }
    }
    const handleOut = (e) => {
      if (findTarget(e.target)) {
        setHovering(false)
        setHoverLabel('')
      }
    }

    const handleDown = () => {
      setPressed(true)
      setClickCount((n) => n + 1)
    }
    const handleUp = () => setPressed(false)

    const handleFocusIn = (e) => {
      if (e.target.matches('input, textarea')) setTyping(true)
    }
    const handleFocusOut = (e) => {
      if (e.target.matches('input, textarea')) setTyping(false)
    }

    const handleScroll = () => {
      setScrolling(true)
      wake()
      clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(() => setScrolling(false), SCROLL_RESET)
    }

    const scheduleBlink = () => {
      const delay = 2200 + Math.random() * 2600
      blinkTimer.current = setTimeout(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 130)
        scheduleBlink()
      }, delay)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)
    window.addEventListener('scroll', handleScroll, { passive: true })
    idleTimer.current = setTimeout(() => setAsleep(true), IDLE_TIMEOUT)
    scheduleBlink()

    return () => {
      document.body.classList.remove('cursor-active')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(idleTimer.current)
      clearTimeout(blinkTimer.current)
      clearTimeout(scrollTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion])

  if (!enabled) return null

  let mode = 'idle'
  if (asleep) mode = 'asleep'
  else if (typing) mode = 'typing'
  else if (hovering) mode = 'hover'
  else if (scrolling) mode = 'scrolling'

  const classes = [
    'dev-bot',
    `dev-bot--${mode}`,
    blink && mode === 'idle' && 'dev-bot--blink',
    pressed && 'dev-bot--pressed',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.div className={classes} style={{ left: springX, top: springY }}>
      {clickCount > 0 && <span key={clickCount} className="dev-bot__ripple" />}

      {mode === 'hover' && <span className="dev-bot__tag">{hoverLabel || '</>'}</span>}

      {mode === 'typing' && <span className="dev-bot__caret" />}

      {mode === 'scrolling' && (
        <span className="dev-bot__chevrons">
          <span>&#8963;</span>
          <span>&#8964;</span>
        </span>
      )}

      {mode === 'idle' && (
        <>
          <span className="dev-bot__eye dev-bot__eye--l" />
          <span className="dev-bot__eye dev-bot__eye--r" />
        </>
      )}

      {mode === 'asleep' && (
        <>
          <span className="dev-bot__eye dev-bot__eye--closed" />
          <span className="dev-bot__eye dev-bot__eye--closed" />
          <span className="dev-bot__zzz" aria-hidden="true">
            <span>z</span>
            <span>z</span>
            <span>z</span>
          </span>
        </>
      )}
    </motion.div>
  )
}

export default Cursor
