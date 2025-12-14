import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
import Projects from './components/Home/Projects';
import Experience from './components/Sections/Experience';
import Education from './components/Sections/Education';
import ContactForm from './components/Home/ContactForm';
import './App.css';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <AnimatePresence>
      <div className="App">
        <Header />
        
        <main>
          <Hero />
          
          <motion.div {...fadeInUp}>
            <About />
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <Skills />
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <Projects />
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <Experience />
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <Education />
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <ContactForm />
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;