
import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onContactClick }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Awards' },
    { id: 'github', label: 'Projects' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[90] w-full max-w-fit px-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-3 md:gap-8"
      >
        <div className="font-black text-lg md:text-xl tracking-tighter text-white hidden sm:block">OG</div>
        
        <ul className="flex items-center gap-3 md:gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-[9px] md:text-xs font-bold uppercase tracking-widest transition-colors relative py-1
                  ${activeSection === item.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"}
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-5 md:h-6 w-[1px] bg-white/10 mx-1 md:mx-2" />
        
        <button 
          onClick={onContactClick}
          className="whitespace-nowrap text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          Hire Me
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
