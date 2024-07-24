import React from 'react'
import { motion } from 'framer-motion';


const Frontend = () => {

    return (
        <motion.div className="skills__content"
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }}>
            <h3 className="skills__title">Frontend</h3>


            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data" >
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">HTML/CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data" >
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data" >
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">React Native</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data" >
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data" >
                        <i class='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data" >
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Angular</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Frontend