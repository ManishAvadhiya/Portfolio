import React from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"; // Import necessary icons
import { Dock, DockIcon } from "./ui/dock"; // Assuming you're using Magic UI's Dock component
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import  { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const DockNavbar = () => {
    
    const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll Down
        setIsVisible(false);
      } else {
        // Scroll Up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navIcons = [
    { href: "#home", icon: <FaHome size={20} />, label: "Home" }, // Home icon
    { href: "#about", icon: <FaUser size={20} />, label: "About" }, // About icon
    {
      href: "#projects",
      icon: <FaProjectDiagram size={20} />,
      label: "Projects",
    }, // Projects icon
    { href: "#contact", icon: <FaEnvelope size={20} />, label: "Contact" }, // Contact icon
  ];

  const socialIcons = [
    {
      url: "https://github.com",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    }, // GitHub icon
    {
      url: "https://linkedin.com",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    }, // LinkedIn icon
  ];

  return (
    <motion.div className={` bg-transparent text-gray-100  ${
        isVisible ? 'translate-y-0' : 'hidden'
      } fixed bottom-4 left-0 right-0 z-50` } id="Dock"
      
      
      >
      {/* Desktop & Tablet Navbar */}
      <nav className="flex justify-between items-center p-2 " >
        {/* Reduced padding */}
        <TooltipProvider>
          <Dock className="flex space-x-2 items-center  border-gray-300 border-opacity-50 ">
            {/* Reduced horizontal spacing */}

            {/* Navigation Icons */}
            {navIcons.map((navItem, index) => (
              <DockIcon key={index} className="p-1">
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    {/* Reduced padding */}
                    <a
                      href={navItem.href}
                      className="hover:text-gray-400 transition-colors duration-300 "
                      title={navItem.label}
                    >
                      {navItem.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{navItem.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            {/* Divider */}
            <div className="h-full w-px bg-gray-600" />

            {/* Social Icons */}
            {socialIcons.map((socialItem, index) => (
              <DockIcon key={index} className="p-1">
                {/* Reduced padding */}
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    {/* Reduced padding */}
                    <a
                      href={socialItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-400 transition-colors duration-300"
                      title={socialItem.label}
                    >
                      {socialItem.icon}{" "}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{socialItem.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </nav>
    </motion.div>
  );
};

export default DockNavbar;
