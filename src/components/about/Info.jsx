import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bxs-graduation about__icon'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">BE</span>
        </div>

        <div className="about__box">
        <i class='bx bx-medal about__icon'></i>
            <h3 className="about__title">CGPA</h3>
            <span className="about__subtitle">8.40 of 10</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-calendar about__icon' ></i>
            <h3 className="about__title">2022</h3>
            <span className="about__subtitle">Year of passing</span>
        </div>
    </div>
  )
}

export default Info