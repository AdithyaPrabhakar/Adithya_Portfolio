import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../UI/Button';
import TextType from '../Home/TextType';
import './Header.css';
import FancyResumeButton from './FancyResumeButton';
import { FiDownload } from 'react-icons/fi';
const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50  backdrop-blur bg-white/40  border-b border-white-40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
            className="text-3xl font-bold text-black doto-text cursor-pointer">
        <TextType 
            text={["Create", "Learn", "Win", "Inspire", "Adithya Prabhakar"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            />
        </div>

        {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
  {navItems.map((item) => (
    <button
      key={item.label}
      onClick={() =>
        document
          .querySelector(item.href)
          ?.scrollIntoView({ behavior: 'smooth' })
      }
      className="text-sm font-medium text-black hover:text-grey-60  transition-colors"
    >
      {item.label}
    </button>
  ))}
</nav>


        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-full">
                <FancyResumeButton />
            </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium"
              >
                {item.label}
              </a>
            ))}
           
            <div className="flex items-center justify-center h-full">
                <FancyResumeButton />
            </div>


          </nav>
        </div>
        
      )}
    </header>
    

  );
};

export default Header;
