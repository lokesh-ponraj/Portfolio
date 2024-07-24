import React from 'react'
import './header.css'
import { useState } from 'react'



const Header = () => {
    const[Toggle,showMenu] = useState(false)
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Lokesh Ponraj</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    {/* item 1 */}
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                             <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    {/* item 2*/}
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                             <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    {/* item 3 */}

                    <li className="nav__item">
                        <a href="#projects" className="nav__link">
                             <i className="uil uil-file-alt nav__icon"></i>Projects
                        </a>
                    </li>
                    {/* item 4 */}
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                             <i className="uil uil-award nav__icon"></i>Skills
                        </a>
                    </li>
                    {/* item 5 */}
                    {/* <li className="nav__item">
                        <a href="#qualification" className="nav__link">
                             <i className="uil uil-briefcase-alt nav__icon"></i>Qualification
                        </a>
                    </li> */}
                    {/* item 6 */}
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                             <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>


                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-align-justify"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header