import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import './constellation.css'

const DOT_COLOR = 'rgba(32, 31, 29, 0.4)'
const LINK_RGB = '30, 63, 143'
const LINK_DISTANCE = 120
const AREA_PER_DOT = 15000

const MOUSE_RADIUS = 140
const MOUSE_LINK_DISTANCE = 170
const MOUSE_STRENGTH = 0.9
const MAX_IMPULSE = 1.8

const Constellation = () => {
  const canvasRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, rafId
    let running = true
    const mouse = { x: -9999, y: -9999, active: false }

    const makeParticles = () => {
      const count = Math.max(18, Math.min(55, Math.floor((width * height) / AREA_PER_DOT)))
      return new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        ix: 0,
        iy: 0,
        r: 1.2 + Math.random() * 1.6,
      }))
    }

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = makeParticles()
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      // Soft light around the pointer, like it's illuminating the field
      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_LINK_DISTANCE + 40)
        glow.addColorStop(0, `rgba(${LINK_RGB}, 0.12)`)
        glow.addColorStop(1, `rgba(${LINK_RGB}, 0)`)
        ctx.fillStyle = glow
        ctx.fillRect(
          mouse.x - MOUSE_LINK_DISTANCE - 40,
          mouse.y - MOUSE_LINK_DISTANCE - 40,
          (MOUSE_LINK_DISTANCE + 40) * 2,
          (MOUSE_LINK_DISTANCE + 40) * 2
        )
      }

      for (const p of particles) {
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          if (dist < MOUSE_RADIUS) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH
            p.ix = Math.max(-MAX_IMPULSE, Math.min(MAX_IMPULSE, p.ix + (dx / dist) * force))
            p.iy = Math.max(-MAX_IMPULSE, Math.min(MAX_IMPULSE, p.iy + (dy / dist) * force))
          }
        }

        p.x += p.vx + p.ix
        p.y += p.vy + p.iy
        p.ix *= 0.94
        p.iy *= 0.94

        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${LINK_RGB}, ${(1 - dist / LINK_DISTANCE) * 0.4})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        if (mouse.active) {
          const mdx = a.x - mouse.x
          const mdy = a.y - mouse.y
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mdist < MOUSE_LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${LINK_RGB}, ${(1 - mdist / MOUSE_LINK_DISTANCE) * 0.55})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = DOT_COLOR
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (running) rafId = requestAnimationFrame(step)
    }

    setup()
    rafId = requestAnimationFrame(step)

    const resizeObserver = new ResizeObserver(() => setup())
    resizeObserver.observe(canvas.parentElement)

    const handleVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(rafId)
      } else if (!running) {
        running = true
        rafId = requestAnimationFrame(step)
      }
    }

    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const localX = e.clientX - rect.left
      const localY = e.clientY - rect.top
      const inside = localX >= 0 && localX <= rect.width && localY >= 0 && localY <= rect.height
      mouse.x = localX
      mouse.y = localY
      mouse.active = inside
    }
    const handleLeave = () => {
      mouse.active = false
    }

    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    window.addEventListener('blur', handleLeave)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('blur', handleLeave)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return <canvas className="constellation" ref={canvasRef} aria-hidden="true" />
}

export default Constellation
