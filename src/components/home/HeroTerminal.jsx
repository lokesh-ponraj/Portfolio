import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import './hero-terminal.css'

const TABS = [
  {
    key: 'profile',
    label: 'profile.json',
    lines: [
      '{',
      '  "name": "Lokesh Ponraj",',
      '  "role": "Senior Full-Stack Developer",',
      '  "experience": "4+ years",',
      '  "focus": ["ERP systems", "Migrations", "Performance"]',
      '}',
    ],
  },
  {
    key: 'stack',
    label: 'stack.js',
    lines: [
      'const stack = {',
      "  backend: ['Python', 'Django', 'SQLAlchemy'],",
      "  frontend: ['React', 'React Native'],",
      "  data: ['PostgreSQL', 'SQL'],",
      "  ops: ['Docker', 'Microservices'],",
      '}',
    ],
  },
  {
    key: 'status',
    label: 'status.sh',
    lines: [
      '$ whoami',
      'senior-developer',
      '',
      '$ uptime --industry',
      '4+ years, still shipping',
    ],
  },
]

const TYPE_SPEED = 18

const HeroTerminal = () => {
  const prefersReducedMotion = useReducedMotion()
  const [activeKey, setActiveKey] = useState(TABS[0].key)
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const timerRef = useRef(null)
  const panelRef = useRef(null)

  const active = TABS.find((tab) => tab.key === activeKey)
  const fullText = active.lines.join('\n')

  const runTyping = (text) => {
    clearInterval(timerRef.current)

    if (prefersReducedMotion) {
      setTyped(text)
      setDone(true)
      return
    }

    let i = 0
    setTyped('')
    setDone(false)
    timerRef.current = setInterval(() => {
      i += 1
      setTyped(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timerRef.current)
        setDone(true)
      }
    }, TYPE_SPEED)
  }

  useEffect(() => {
    runTyping(fullText)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey])

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { damping: 20, stiffness: 200 })
  const sry = useSpring(ry, { damping: 20, stiffness: 200 })

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !panelRef.current) return
    const rect = panelRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 8)
    rx.set(py * -8)
  }

  const handleMouseLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <div className="home__terminal-wrap">
      <motion.div
        className="hero-terminal"
        ref={panelRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: srx, rotateY: sry }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-terminal__bar">
          <div className="hero-terminal__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-terminal__tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={
                  tab.key === activeKey
                    ? 'hero-terminal__tab hero-terminal__tab--active'
                    : 'hero-terminal__tab'
                }
                onClick={() => setActiveKey(tab.key)}
                data-cursor-label="Switch"
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="hero-terminal__run"
            onClick={() => runTyping(fullText)}
            aria-label="Replay animation"
            data-cursor-label="Replay"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <pre className="hero-terminal__body">
          <code>
            {typed.split('\n').map((line, idx) => (
              <span className="hero-terminal__line" key={idx}>
                {line.startsWith('$') ? (
                  <>
                    <span className="hero-terminal__prompt">$</span>
                    {line.slice(1)}
                  </>
                ) : (
                  line
                )}
                {'\n'}
              </span>
            ))}
            <span
              className={done ? 'hero-terminal__caret hero-terminal__caret--idle' : 'hero-terminal__caret'}
              aria-hidden="true"
            />
          </code>
        </pre>
      </motion.div>
    </div>
  )
}

export default HeroTerminal
