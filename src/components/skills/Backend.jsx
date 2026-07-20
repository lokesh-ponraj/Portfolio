import React from 'react'
import { motion } from 'framer-motion'

const LEVEL_DOTS = { Beginner: 1, Intermediate: 2, Advanced: 3 }

const SKILLS = [
  { name: 'Python', level: 'Intermediate' },
  { name: 'C++', level: 'Intermediate' },
  { name: 'Java', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Django', level: 'Advanced' },
  { name: 'ExpressJS', level: 'Beginner' },
]

const Backend = () => {
  return (
    <motion.div
      className="skills__content"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        {SKILLS.map((skill) => (
          <div className="skills__data" key={skill.name}>
            <span className="skills__name">{skill.name}</span>
            <span className="skills__dots" aria-label={skill.level}>
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={dot <= LEVEL_DOTS[skill.level] ? 'skills__dot skills__dot--filled' : 'skills__dot'}
                />
              ))}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Backend
