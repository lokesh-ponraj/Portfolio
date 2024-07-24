import React from 'react'
import './footer.css'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <motion.h1 transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "easeInOut",
                }} className="footer__title">Lokesh</motion.h1>

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
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/lokesh_ponraj" className="footer__social-link_insta" target="_blank"><i class="bx bxl-instagram"></i></a>
                    <a href="https://www.github.com/lokesh-ponraj" className="footer__social-link_github" target="_blank"><i class="bx bxl-github"></i></a>
                    <a href="https://www.x.com/Lokesh_Ponraj" className="footer__social-link_x" target="_blank"><i class="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/tech.lokesh.ponraj" className="footer__social-link_facebook" target="_blank"><i class="bx bxl-facebook"></i></a>
                </div>
                <h4 className="footer__copy">&#169; LokeshPonraj</h4>
                <span className='footer__mastercopy'>All rights reserved</span>

            </div>
        </footer>
    )
}

export default Footer