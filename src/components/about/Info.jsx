import React from 'react'
import { motion } from 'framer-motion'
const Info = () => {
  return (
    <div className="about__info grid">
      <motion.div whileHover={{ y: -10 ,boxShadow: "0px 5px 20px rgb(255, 153, 51, 0.7)" }} transition={{ type: 'spring', stiffness: 300 }} className="about__box">
        <i class='bx bxs-graduation about__icon'></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">BE</span>
      </motion.div>

      <motion.div whileHover={{ y: -10 ,boxShadow: "0px 5px 20px rgb(0, 0, 128, 0.7)" }} transition={{ type: 'spring', stiffness: 300 }} className="about__box">
        <i class='bx bx-medal about__icon'></i>
        <h3 className="about__title">CGPA</h3>
        <span className="about__subtitle">8.40 of 10</span>
      </motion.div>

      <motion.div whileHover={{ y: -10 ,boxShadow: "0px 5px 20px rgb(20, 136, 8, 0.7)" }} transition={{ type: 'spring', stiffness: 300 }} className="about__box">
        <i class='bx bxs-calendar about__icon' ></i>
        <h3 className="about__title">2022</h3>
        <span className="about__subtitle">Year of passing</span>
      </motion.div>
    </div>
  )
}

export default Info