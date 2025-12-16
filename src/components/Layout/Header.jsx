import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import TextType from '../Home/TextType';
import FancyResumeButton from './FancyResumeButton';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setOpen(false);

    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/40 border-b border-white/40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-black doto-text cursor-pointer">
          <TextType
            text={['Create', 'Learn', 'Win', 'Inspire', 'Adithya Prabhakar']}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <FancyResumeButton />
        </div>

        {/* Mobile Toggle */}
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
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 font-medium text-left"
              >
                {item.label}
              </button>
            ))}

            <div className="flex justify-center pt-4">
              <FancyResumeButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
