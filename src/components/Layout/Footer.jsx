import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiCode,
} from 'react-icons/fi';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/AdithyaPrabhakar', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/adithyaprabhakar', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://x.com/AdithyaPrabha11', label: 'X' },
    { icon: <FiMail />, href: 'mailto:adithya.prabhakar2004@gmail.com', label: 'Email' },
    { icon: <FiCode />, href: 'https://leetcode.com/u/Adithya5UCC355', label: 'Leetcode' },
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleFooterNav = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Adithya</h3>
            <p className="text-gray-400 mb-4">
              Crafting scalable software with clean architecture.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleFooterNav(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
            <p className="text-gray-400">Bangalore, India</p>
            <p className="text-gray-400">Open for Internships & FTE</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {currentYear} Adithya Prabhakar. Built with React & passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
