import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import './header.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#qualification', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: 'https://lokesh-ponraj-blogs.netlify.app/', label: 'Blog', external: true },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={scrolled ? 'header header--scrolled' : 'header'}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Lokesh<span className="nav__logo-dot">.</span>
        </a>

        <ul className="nav__list">
          {NAV_LINKS.map((link) => (
            <li className="nav__item" key={link.href}>
              <a
                href={link.href}
                className="nav__link"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={menuOpen ? 'nav__toggle nav__toggle--open' : 'nav__toggle'}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__overlay"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="nav__overlay-list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    className="nav__overlay-link"
                    onClick={closeMenu}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
