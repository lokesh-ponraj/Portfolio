import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
// import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { motion} from 'framer-motion';
// import { useAnimation } from 'framer-motion';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useViewportScroll } from 'framer-motion';
// import { useTransform } from 'framer-motion';




function App() {


  return (

   <>
   <Header />
   <motion.main >

     <Home />
     <About />
     <Projects /> 
     <Skills />
     <Contact />
     <Footer />

   </motion.main>
   </>
  );
}

export default App;
