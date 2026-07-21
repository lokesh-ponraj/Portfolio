import React from 'react'
import './footer.css'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <motion.a
                    href="#home"
                    className="footer__title"
                    whileHover={{ letterSpacing: '0.01em' }}
                    transition={{ duration: 0.3 }}
                >
                    Lokesh Ponraj
                </motion.a>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.github.com/lokesh-ponraj" className="footer__social-link" target="_blank" rel='noreferrer' aria-label="GitHub"><i className="bx bxl-github"></i></a>
                    {/* TODO: swap in the real LinkedIn profile URL */}
                    <a href="#" className="footer__social-link" target="_blank" rel='noreferrer' aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
                    <a href="mailto:tech.lokeshponraj@gmail.com" className="footer__social-link" aria-label="Email"><i className="bx bx-mail-send"></i></a>
                </div>

                <div className="footer__bottom">
                    <span>&#169; Lokesh Ponraj</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
