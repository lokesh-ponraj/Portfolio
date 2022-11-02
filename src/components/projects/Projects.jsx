import React, { useState } from 'react'
import './projects.css'

const Projects = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    } 
  return (
    <section className="projects section" id="projects">
    <h2 className="section__title">PROJECTS</h2>
    <span className="section__subtitle">That I have made</span>

    <div className="projects__container container grid">
        <div className="projects__content">
            <div>
                <i className="uil uil-car projects__icon"></i>
                <h3 className="projects__title">Object sensing car</h3>
            </div>

            <span className="projects__button" onClick={() => toggleTab(1)}>View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>
                    <h3 className="projects__modal-title">Obstacle Avoiding Robot</h3>
                    <p className="projects__modal-description">
                        Remote controllable setup
                    </p>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Usage of Sonar sensor.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Can sense upto 5 meters.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Can be used for spying purpose.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Independent working model.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Bluetooth connectivity to control.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="projects__content">
            <div>
                <i className="uil uil-battery-bolt projects__icon"></i>
                <h3 className="projects__title">24/7 Solar Charger</h3>
            </div>

            <span className="projects__button" onClick={()=>toggleTab(2)}>View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                    <h3 className="projects__modal-title">Automated Day and Night Solar Charging</h3>
                    <p className="projects__modal-description">
                        By using Arduino UNO, the whole setup is automated.
                    </p>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">24/7 electricity production</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">IR blasters are used as a artificial source.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Automatic sensing of climatic changes.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">All stats can be monitored.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Comparatively Less energy consumption.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="projects__content">
            <div>
                <i className="uil uil-laptop projects__icon"></i>
                <h3 className="projects__title">Bone Implants</h3>
            </div>

            <span className="projects__button" onClick={()=>toggleTab(3)}>View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                    <h3 className="projects__modal-title">Alternate Materials on Human Femur Bone</h3>
                    <p className="projects__modal-description">
                        This projects is proposed for a journal in scopus.
                    </p>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Hard and rigid material.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Longer lifetime of implants.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Implants are bulletproof materials.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">No reactions with human tissues.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">No side effects.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="projects__content">
            <div>
                <i className="uil uil-snowflake projects__icon"></i>
                <h3 className="projects__title">Nanorefrigerants</h3>
            </div>

            <span className="projects__button" onClick={()=>toggleTab(4)}>View More
            <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>

            <div className={toggleState === 4 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => toggleTab(0)}></i>
                    <h3 className="projects__modal-title">Nanorefrigerants</h3>
                    <p className="projects__modal-description">
                        The whole setup is verified using taguchi analysis and ANOVA software.
                    </p>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Higher COP compared to others.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Less Global Warming Potential.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Low Ozone Layer Depletion.</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">Usage of natural oils lower the emission of CFCs</p>
                        </li>
                    </ul>
                    <ul className="projects__modal-projects grid">
                        <li className="projects__modal-points">
                            <i className="uil uil-check-circle projects__modal-icon"></i>
                            <p className="projects__modal-info">No usage of HCFCs</p>
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