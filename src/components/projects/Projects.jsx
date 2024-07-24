import React, { useState } from 'react'
import './projects.css'
import { motion } from 'framer-motion';


const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">PROJECTS</h2>
            <span className="section__subtitle">That I have made</span>

            <div className="projects__container container grid">


                {/* NUMBER 1 LMS */}
                <div >
                    <motion.div
                        whileHover={{
                            boxShadow: "0px 20px 40px rgb(100, 153, 233, 0.7)",
                            transition: { duration: 0.3 },
                        }}
                        className="projects__content" onClick={() => toggleTab(1)}>
                        <i className="uil uil-book projects__icon"></i>
                        <motion.h3 className="projects__title">LMS</motion.h3>
                    </motion.div>

                    {/* <span className="projects__button">View More    
                            <i className="uil uil-arrow-right projects__button-icon"></i>
                        </span> */}

                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}
                    >
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Library Management System</h3>
                            <p className="projects__modal-description">
                                Django-based Project
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Client and Server side.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Containerisation using Docker.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">PostgreSQL Database Integrated.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Works on a virtual environment.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Bootstrap Components.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* NUMBER 2 CMS */}

                <div >
                    <motion.div
                        whileHover={{
                            boxShadow: "0px 20px 40px rgb(6, 208, 1, 0.7)",
                            transition: { duration: 0.3 },
                        }} className="projects__content" onClick={() => toggleTab(2)}>
                        <i class="uil uil-users-alt projects__icon"></i>
                        <h3 className="projects__title">CMS</h3>
                    </motion.div>
                    {/* 
                    <span className="projects__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span> */}

                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">Club Management System</h3>
                            <p className="projects__modal-description">
                                Django-based Full stack app
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Made for English language club.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Information about club activities.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">CLub members details.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Language Hub.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Dockerised.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* NUMBER 3 ADYA */}

                <div >
                    <motion.div whileHover={{
                        boxShadow: "0px 20px 40px rgb(175, 71, 210, 0.7)",
                        transition: { duration: 0.3 },
                    }} className="projects__content" onClick={() => toggleTab(3)}>
                        <i class="uil uil-shopping-basket projects__icon"></i>
                        <h3 className="projects__title">ADYA</h3>
                    </motion.div>

                    {/* <span className="projects__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span> */}

                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                            <h3 className="projects__modal-title">E-Commerce application for real-time client</h3>
                            <p className="projects__modal-description">
                                Product purchasing
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Products adding by admin.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Payment integration.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Delivery assistance.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Containerised.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">PostgreSQL.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* NUMBER 4 TAXIFY */}
                <div >
                    <motion.div whileHover={{
                        boxShadow: "0px 20px 40px rgb(255, 104, 104, 0.7)",
                        transition: { duration: 0.3 },
                    }} className="projects__content" onClick={() => toggleTab(4)}>
                        <i className="uil uil-car projects__icon"></i>
                        <h3 className="projects__title">TAXIFY</h3>
                    </motion.div>

                    {/* <span className="projects__button" onClick={() => toggleTab(4)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span> */}

                    <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Taxi-Booking app</h3>
                            <p className="projects__modal-description">
                                Users and drivers usage
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Accurate location</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Direct contact with Driver</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Payment integration</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Booking history</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Fully responsive.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                {/* NUMBER 5 BLOGGER */}

                <div >
                    <motion.div whileHover={{
                        boxShadow: "0px 20px 40px rgb(255, 255, 0, 0.7)",
                        transition: { duration: 0.3 },
                    }} className="projects__content" onClick={() => toggleTab(5)}>
                        <i className="uil uil-blogger projects__icon"></i>
                        <h3 className="projects__title">BLOGGER +</h3>
                    </motion.div>

                    {/* <span className="projects__button" onClick={() => toggleTab(5)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span> */}

                    <div className={toggleState === 5 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Blogger Plus</h3>
                            <p className="projects__modal-description">
                                A One-stop blogging website.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Easy posting.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">User friendly UI.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


                {/* NUMBER 6 VHS */}
                <div >
                    <motion.div whileHover={{
                        boxShadow: "0px 20px 40px rgb(41, 52, 98, 0.7)",
                        transition: { duration: 0.3 },
                    }} className="projects__content" onClick={() => toggleTab(6)}>
                        <i className="uil uil-glass-martini projects__icon"></i>
                        <h3 className="projects__title">VHS</h3>
                    </motion.div>

                    {/* <span className="projects__button" onClick={() => toggleTab(6)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span> */}

                    <div className={toggleState === 6 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Vibe HotSpot</h3>
                            <p className="projects__modal-description">
                                A Nightlife mobile app.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Easy posting.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">User friendly UI.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Maps API intergration.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Live tracking.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Online Payments integration.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


                {/* NUMBER 7 ASSISTROAD */}
                <div >
                    <motion.div whileHover={{
                        boxShadow: "0px 20px 40px rgb(255, 250, 0, 0.7)",
                        transition: { duration: 0.3 },
                    }} className="projects__content" onClick={() => toggleTab(7)}>
                        <i className="uil uil-subway projects__icon"></i>
                        <h3 className="projects__title">ASSISTROAD</h3>
                    </motion.div>

                    {/* <span className="projects__button" onClick={() => toggleTab(7)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span> */}

                    <div className={toggleState === 7 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">AssistRoad</h3>
                            <p className="projects__modal-description">
                                An AI-powered classifier using CNN.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Created using Convolutional Neural Networks.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Superfast simulation of results.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Graphs integration.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Detailed and lightweight.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Accurate upto 96%.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* UNIMAX */}
                <div  >
                    <motion.div whileHover={{
                        boxShadow: "0px 20px 40px rgb(247, 39, 152, 0.7)",
                        transition: { duration: 0.3 },
                    }} className="projects__content" onClick={() => toggleTab(8)}>
                        <i className="uil uil-map-pin projects__icon"></i>
                        <h3 className="projects__title">UNIMAX</h3>
                    </motion.div>



                    <div className={toggleState === 8 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="projects__modal-title">Unimax</h3>
                            <p className="projects__modal-description">
                                This is a GPS tracking system using Django.
                            </p>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Easy tracking.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Latest UI for Dashboard.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Optimised and Simplified.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Multiple user tracking.</p>
                                </li>
                            </ul>
                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-points">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Report generation.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Projects 