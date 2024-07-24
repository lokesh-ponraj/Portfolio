import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import Scroll from './Scroll'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <motion.div drag
            dragConstraints={{ left: 5, right: 5, top:0, bottom:0 }}
            dragElastic={0.2} className="home__img"></motion.div>
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  )
}

export default Home