import React, { useState } from 'react'
import './projects.css'
import { AnimatePresence, motion } from 'framer-motion'
import { RevealText, SectionKicker } from '../common/RevealText'
import Watermark from '../common/Watermark'

const FEATURED = [
  {
    icon: 'uil uil-server-network',
    accent: '#6366f1',
    name: 'XSERP',
    title: 'Industry ERP System',
    role: 'Senior Developer — codebase, database & deployment owner',
    description: 'A completely custom-built, industry-level ERP system.',
    stack: ['Python', 'Django', 'JavaScript', 'SQLAlchemy', 'SQL', 'Microservices'],
    points: [
      'Owned the codebase, database, and deployment as senior developer and administrator on a legacy platform.',
      'Replaced Django server-rendered forms with JSON REST APIs, driving a major speed improvement across the app.',
      'Migrated a large volume of raw SQL queries into SQLAlchemy for maintainability and safety.',
      'Introduced a microservice architecture on top of the original monolith.',
      'Extended the platform with custom plugins for industry-specific ERP workflows.',
    ],
  },
  {
    icon: 'uil uil-mobile-android-alt',
    accent: '#14b8a6',
    name: 'PLM',
    title: 'Product Lifecycle Management',
    role: 'Built from the ground up',
    description: 'A responsive web and mobile app for managing product lifecycles.',
    stack: ['React Native', 'Supabase', 'JavaScript'],
    points: [
      'Built from scratch as a single React Native codebase targeting iOS, Android, and Web.',
      'Used Supabase as the backend and database.',
      'Delivered a fully responsive UI shared across all three platforms from one codebase.',
    ],
  },
]

const ARCHIVE = [
  {
    icon: 'uil uil-book',
    accent: '#5b8def',
    name: 'LMS',
    title: 'Library Management System',
    description: 'Django-based Project',
    points: [
      'Client and Server side.',
      'Containerisation using Docker.',
      'PostgreSQL Database Integrated.',
      'Works on a virtual environment.',
      'Bootstrap Components.',
    ],
  },
  {
    icon: 'uil uil-users-alt',
    accent: '#22c55e',
    name: 'CMS',
    title: 'Club Management System',
    description: 'Django-based Full stack app',
    points: [
      'Made for English language club.',
      'Information about club activities.',
      'Club members details.',
      'Language Hub.',
      'Dockerised.',
    ],
  },
  {
    icon: 'uil uil-shopping-basket',
    accent: '#b06fe0',
    name: 'ADYA',
    title: 'E-Commerce application for real-time client',
    description: 'Product purchasing',
    points: [
      'Products adding by admin.',
      'Payment integration.',
      'Delivery assistance.',
      'Containerised.',
      'PostgreSQL.',
    ],
  },
  {
    icon: 'uil uil-car',
    accent: '#ff6f6f',
    name: 'TAXIFY',
    title: 'Taxi-Booking app',
    description: 'Users and drivers usage',
    points: [
      'Accurate location.',
      'Direct contact with Driver.',
      'Payment integration.',
      'Booking history.',
      'Fully responsive.',
    ],
  },
  {
    icon: 'uil uil-blogger',
    accent: '#e8c547',
    name: 'BLOGGER +',
    title: 'Blogger Plus',
    description: 'A One-stop blogging website.',
    points: ['Easy posting.', 'User friendly UI.'],
  },
  {
    icon: 'uil uil-glass-martini',
    accent: '#5865a8',
    name: 'VHS',
    title: 'Vibe HotSpot',
    description: 'A Nightlife mobile app.',
    points: [
      'Easy posting.',
      'User friendly UI.',
      'Maps API integration.',
      'Live tracking.',
      'Online Payments integration.',
    ],
  },
  {
    icon: 'uil uil-subway',
    accent: '#d4b83f',
    name: 'ASSISTROAD',
    title: 'AssistRoad',
    description: 'An AI-powered classifier using CNN.',
    points: [
      'Created using Convolutional Neural Networks.',
      'Superfast simulation of results.',
      'Graphs integration.',
      'Detailed and lightweight.',
      'Accurate upto 96%.',
    ],
  },
  {
    icon: 'uil uil-map-pin',
    accent: '#ea5ea8',
    name: 'UNIMAX',
    title: 'Unimax',
    description: 'This is a GPS tracking system using Django.',
    points: [
      'Easy tracking.',
      'Latest UI for Dashboard.',
      'Optimised and Simplified.',
      'Multiple user tracking.',
      'Report generation.',
    ],
  },
]

const ProjectRow = ({ project, isOpen, onToggle, compact }) => (
  <li
    className={[
      'projects__row',
      isOpen && 'projects__row--open',
      compact && 'projects__row--compact',
    ]
      .filter(Boolean)
      .join(' ')}
    style={{ '--project-accent': project.accent }}
  >
    <button
      className="projects__row-head"
      onClick={onToggle}
      aria-expanded={isOpen}
      data-cursor-label={isOpen ? 'Collapse' : 'Expand'}
    >
      <i className={`${project.icon} projects__icon`}></i>
      <span className="projects__name">{project.name}</span>
      <span className="projects__tagline">{project.description}</span>

      {project.stack && (
        <span className="projects__stack">
          {project.stack.map((tech) => (
            <span className="projects__stack-item" key={tech}>
              {tech}
            </span>
          ))}
        </span>
      )}

      <span className={isOpen ? 'projects__plus projects__plus--open' : 'projects__plus'}>
        <span></span>
        <span></span>
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="projects__row-body"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="projects__row-inner">
            <h3 className="projects__title">{project.title}</h3>
            {project.role && <p className="projects__role">{project.role}</p>}
            <ul className="projects__tags">
              {project.points.map((point) => (
                <li key={point} className="projects__tag">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </li>
)

const Projects = () => {
  const [openKey, setOpenKey] = useState(null)

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <section className="projects section" id="projects">
      <Watermark text="Work" align="left" />
      <div className="container">
        <div className="section-head">
          <SectionKicker>Projects</SectionKicker>
          <h2 className="heading-lg">
            <RevealText text="Industry work I've built and owned." />
          </h2>
        </div>

        <ul className="projects__list">
          {FEATURED.map((project) => (
            <ProjectRow
              key={project.name}
              project={project}
              isOpen={openKey === project.name}
              onToggle={() => toggle(project.name)}
            />
          ))}
        </ul>

        <div className="projects__archive-head">
          <span className="kicker">Earlier &amp; academic work</span>
        </div>

        <ul className="projects__list projects__list--compact">
          {ARCHIVE.map((project) => (
            <ProjectRow
              key={project.name}
              project={project}
              isOpen={openKey === project.name}
              onToggle={() => toggle(project.name)}
              compact
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
