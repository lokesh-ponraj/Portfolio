import React from 'react'
import { motion } from 'framer-motion'

const Social = () => {
  return (
    <div className="home__social">
        <motion.a initial={{color:'#000'}} whileHover={{scale:1.2, color:'#ff0267', transition:{duration:0.2, ease:"easeInOut"}}}  href="https://www.instagram.com/lokesh_ponraj" className="home__social-icon" target="_blank"><i class="uil uil-instagram"></i></motion.a>
        <motion.a initial={{color:'#000'}} whileHover={{scale:1.2, color:'black', transition:{duration:0.2, ease:"easeInOut"}}}  href="https://www.github.com/lokesh-ponraj" className="home__social-icon" target="_blank"><i class="uil uil-github"></i></motion.a>
        <motion.a initial={{color:'#000'}} whileHover={{scale:1.2, color:'green', transition:{duration:0.2, ease:"easeInOut"}}}  href="https://www.twitter.com/Lokesh_Ponraj" className="home__social-icon" target="_blank"><i class="uil uil-whatsapp"></i></motion.a>
        <motion.a initial={{color:'#000'}} whileHover={{scale:1.2, color:'blue', transition:{duration:0.2, ease:"easeInOut"}}}  href="https://www.facebook.com/lokesh.ponraj.tech" className="home__social-icon" target="_blank"><i class="uil uil-facebook"></i></motion.a>
    </div>
  )
}

export default Social