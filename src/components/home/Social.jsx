import React from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: 'https://www.github.com/lokesh-ponraj', icon: 'uil uil-github', label: 'GitHub' },
  { href: '#', icon: 'uil uil-linkedin', label: 'LinkedIn' }, // TODO: swap in the real LinkedIn profile URL
]

const Social = () => {
  return (
    <div className="home__social">
      <span className="home__social-line" aria-hidden="true"></span>
      {LINKS.map((link) => (
        <motion.a
          key={link.label}
          whileHover={{ scale: 1.2, color: 'var(--accent)' }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          href={link.href}
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          <i className={link.icon}></i>
        </motion.a>
      ))}
    </div>
  )
}

export default Social
