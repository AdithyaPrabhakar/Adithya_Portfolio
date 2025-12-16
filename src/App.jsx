import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
import Projects from './components/Home/Projects';
import Experience from './components/Sections/Experience';
import Education from './components/Sections/Education';
import ContactForm from './components/Home/ContactForm';

import ProjectDetail from './components/Projects/ProjectDetail';

import './App.css';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Education />
    <ContactForm />
  </>
);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home */}
          <Route
            path="/"
            element={
              <motion.main {...pageTransition}>
                <HomePage />
              </motion.main>
            }
          />

          {/* Project Details */}
          <Route
            path="/projects/:slug"
            element={
              <motion.main {...pageTransition}>
                <ProjectDetail />
              </motion.main>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
