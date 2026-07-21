import React from 'react'
import './qualification.css'
import { motion } from 'framer-motion'
import { RevealText, SectionKicker } from '../common/RevealText'
import Watermark from '../common/Watermark'

const TIMELINE = [
  {
    type: 'education',
    title: 'SSLC',
    place: 'R.G Matric Higher Secondary School',
    period: '2015 — 2016',
    detail: 'Percentage: 90%',
  },
  {
    type: 'education',
    title: 'HSC',
    place: 'R.G.Matric Higher Secondary School',
    period: '2017 — 2018',
    detail: 'Percentage: 81%',
  },
  {
    type: 'leadership',
    title: 'Joint Secretary',
    place: 'IRISH Association',
    period: '2018 — 2019',
  },
  {
    type: 'education',
    title: 'B.E.',
    place: 'P.A. College of Engineering and Technology',
    period: '2018 — 2022',
    detail: 'CGPA: 8.40',
  },
  {
    type: 'leadership',
    title: 'Secretary',
    place: 'Association of Department',
    period: '2021 — 2022',
  },
  {
    type: 'leadership',
    title: 'Head Volunteer',
    place: 'NSS (Active)',
    period: '2021 — 2022',
  },
]

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <Watermark text="Journey" align="right" />
      <div className="container">
        <div className="section-head">
          <SectionKicker>Journey</SectionKicker>
          <h2 className="heading-lg">
            <RevealText text="Education &amp; leadership, side by side." />
          </h2>
        </div>

        <ul className="qualification__list">
          {TIMELINE.map((item, i) => (
            <motion.li
              key={`${item.title}-${item.period}`}
              className="qualification__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="qualification__period">{item.period}</span>

              <span className="qualification__dot-col">
                <motion.span
                  className="qualification__dot"
                  initial={{ scale: 0.4, backgroundColor: 'var(--ink-faint)' }}
                  whileInView={{ scale: 1, backgroundColor: '#1e3f8f' }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 + 0.1 }}
                />
              </span>

              <div className="qualification__body">
                <div className="qualification__heading-row">
                  <h3 className="qualification__title">{item.title}</h3>
                  <span className={`qualification__tag qualification__tag--${item.type}`}>
                    {item.type === 'education' ? 'Education' : 'Leadership'}
                  </span>
                </div>
                <span className="qualification__place">{item.place}</span>
                {item.detail && <span className="qualification__detail">{item.detail}</span>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Qualification
