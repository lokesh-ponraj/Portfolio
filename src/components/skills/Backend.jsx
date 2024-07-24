import React from 'react'
import { motion } from 'framer-motion'

const Backend = () => {
  return (
    <motion.div className="skills__content" whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }}>
        <h3 className="skills__title">Backend</h3>


        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                
                </div>
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">C++</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
            </div>
{/* SECOND COLUMN */}
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Nodejs</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Django</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">ExpressJS</h3>
                    <span className="skills__level">Beginner</span>
                </div>
                </div>
                
            </div>
        </div>
    </motion.div>
  )
}

export default Backend