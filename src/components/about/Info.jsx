import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const Counter = ({ to, decimals = 0, suffix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const STATS = [
  { label: 'Experience', to: 4, decimals: 0, suffix: '+', sub: 'Years in the industry' },
  { label: 'Education', display: 'BE', sub: 'Bachelor of Engineering' },
  { label: 'CGPA', to: 8.4, decimals: 2, sub: 'out of 10' },
  { label: 'Graduated', to: 2022, decimals: 0, sub: 'Year of passing' },
]

const Info = () => {
  return (
    <div className="about__info">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="about__stat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about__stat-label">{stat.label}</span>
          <h3 className="about__stat-value">
            {stat.display ? stat.display : <Counter to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />}
          </h3>
          <span className="about__stat-sub">{stat.sub}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default Info
