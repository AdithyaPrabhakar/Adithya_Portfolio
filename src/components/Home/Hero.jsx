import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';
import PixelTransition from './PixelTransition';
import './Hero.css';

const Hero = () => {
  return (
    
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0B0F1A] text-white overflow-hidden"
    > 
    
      {/* Glow accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[160px]" />
      
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[160px]" />
    
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className='h-20'>
    </div>
            <p className="text-sm tracking-widest text-blue-400 uppercase mb-6">
              MERN Stack Developer / Computer Science Engineer
            </p>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-tight">
              Building
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                digital products
              </span>
              that scale.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-300">
              I’m <span className="text-white font-medium">Adithya Prabhakar</span>, a
              developer focused on crafting high-performance web applications
              with clean architecture, modern UI, and scalable backend systems.
            </p>
            <div className='h-3'></div>
            {/* BUTTONS */}
            <div className=" flex flex-wrap gap-6">
              {/* Primary CTA */}
              <button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="
                  px-6 py-3.5 text-sm font-medium text-white-300 border border-blue-600 hover:border-white hover:text-white transition-colors inline-flex items-center gap-2 h-10 w-45 justify-center rounded-lg mt-4 bg-blue-600 hover:bg-blue-800
                "
              >
                <FiEye className="opacity-80" />
                View Projects
              </button>

              {/* Secondary CTA */}
              
            </div>
            {/* STATS */}
            <div
  className="
    mt-12
    grid grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-5
    gap-8
    max-w-xl lg:max-w-none
  "
>
  <div>
    <p className="text-3xl md:text-4xl font-bold">10+</p>
    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
      Projects
    </p>
  </div>

  <div>
    <p className="text-3xl md:text-4xl font-bold">0.6</p>
    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
      Internship Experience
    </p>
  </div>

  <div>
    <p className="text-3xl md:text-4xl font-bold">100%</p>
    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
      Dedication
    </p>
  </div>

  <div>
    <p className="text-3xl md:text-4xl font-bold">100%</p>
    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
      Hard Work
    </p>
  </div>

  <div>
    <p className="text-3xl md:text-4xl font-bold">100%</p>
    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
      Humor
    </p>
  </div>
</div>

            <div className='h-5'></div>
          </motion.div>

          {/* RIGHT CONTENT – PIXEL TRANSITION */}
          {/* RIGHT CONTENT – PIXEL TRANSITION */}
<div
  className="
    flex justify-center
    lg:justify-end
    mt-16 lg:mt-0
  "
>
  {/* Rainbow border wrapper */}
  <div
    className="
      rainbow
      w-[260px] h-[340px]
      sm:w-[300px] sm:h-[400px]
      md:w-[340px] md:h-[440px]
      lg:w-[380px] lg:h-[500px]
      flex items-center justify-center
    "
  >
    {/* Force PixelTransition to fill rainbow */}
    <div className="w-full h-full">
      <PixelTransition
        firstContent={
          <img
            src={`${import.meta.env.BASE_URL}myphoto.jpeg`}
            alt="Adithya Prabhakar"
            className="w-full h-full object-cover"
          />
        }
        secondContent={
          <div className="w-full h-full grid place-items-center bg-[#111]">
            <p className="text-3xl font-black text-white">Hey!</p>
          </div>
        }
        gridSize={22}
        pixelColor="#6d6affff"
        once={false}
        animationStepDuration={0.4}
        className="w-full h-full"
      />
    </div>
  </div>
</div>



        

        </div>
      </div>
    </section>
  );
};

export default Hero;
