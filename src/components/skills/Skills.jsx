import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Tools from './Tools'
import { RevealText, SectionKicker } from '../common/RevealText'

const TECH = [
  'HTML/CSS', 'React', 'React Native', 'Tailwind', 'Bootstrap', 'Angular',
  'Python', 'C++', 'Java', 'Node.js', 'Django', 'ExpressJS',
  'Git', 'Docker', 'AWS EC2', 'GCP', 'Apache2', 'Firebase', 'MongoDB',
]

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-head">
          <SectionKicker>Skills</SectionKicker>
          <h2 className="heading-lg">
            <RevealText text="Tools I reach for the most." />
          </h2>
        </div>
      </div>

      <div className="skills__marquee" aria-hidden="true">
        <div className="skills__marquee-track">
          {[...TECH, ...TECH].map((tech, i) => (
            <span className="skills__marquee-item" key={`${tech}-${i}`}>
              {tech}
              <span className="skills__marquee-dot">&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills__container">
          <Frontend />
          <Backend />
          <Tools />
        </div>
      </div>
    </section>
  )
}

export default Skills
