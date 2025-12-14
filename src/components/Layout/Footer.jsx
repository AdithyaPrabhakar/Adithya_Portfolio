import { FileCode, FileCode2, FileCode2Icon, FileCodeCorner, FileCodeIcon } from 'lucide-react';
import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiCodepen } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/AdithyaPrabhakar', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/adithyaprabhakar', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://x.com/AdithyaPrabha11', label: 'X' },
    { icon: <FiMail />, href: 'mailto:adithya.prabhakar2004@gmail.com', label: 'Email' },
    { icon: <FiCode />, href: 'https://leetcode.com/u/Adithya5UCC355', label: 'Leetcode' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Adithya</h3>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting digital experiences with clean code and modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  title={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                <span className="text-white font-medium">Email:</span> adithya.prabhakar2004@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Location:</span> Bangalore, India
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Available:</span> For freelance work, Internship and Full-Time Job.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Adithya Prabhakar. All rights reserved. 
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Node.js and Passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;