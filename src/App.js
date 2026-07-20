import './App.css';
import SmoothScroll from './components/common/SmoothScroll';
import Cursor from './components/common/Cursor';
import Grain from './components/common/Grain';
import ScrollProgress from './components/common/ScrollProgress';
import Loader from './components/common/Loader';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <SmoothScroll>
      <Loader />
      <Cursor />
      <Grain />
      <ScrollProgress />
      <Header />
      <main>
        <Home />
        <About />
        <Qualification />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
