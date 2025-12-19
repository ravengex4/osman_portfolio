
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, School, Mail } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, profileImage }) => {
  const details = [
    { icon: <School className="w-5 h-5" />, label: "School", value: "Radhwa International School, Yanbu", color: "text-blue-400" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "College", value: "Lords Institute (CSE AI/ML)", color: "text-emerald-400" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Hyderabad, India", color: "text-red-400" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "osmn.ghani@gmail.com", color: "text-purple-400" }
  ];

  const handleExploreClick = () => {
    const projectSection = document.getElementById('github');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-6 pt-32 pb-12 lg:py-0 overflow-hidden min-h-[100dvh]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-5xl w-full"
      >
        {/* Profile Circle Container */}
        <div className="relative mb-8 md:mb-12 flex justify-center items-center">
          {/* Rotating ring - simplified for performance */}
          <div
            className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite]"
          />
          
          {/* Main Profile Image */}
          <motion.div
            className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-4 md:border-8 border-indigo-500/20 overflow-hidden shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)] bg-zinc-900 z-10"
          >
            <img 
              src={profileImage} 
              alt="Mohammed Osman Ghani" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Orbiting Details for Desktop */}
          <div className="hidden lg:block">
            {details.map((detail, idx) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 100 }}
                className={`absolute p-5 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl w-64 text-left z-20
                  ${idx === 0 ? "top-4 -left-64" : ""}
                  ${idx === 1 ? "top-4 -right-64" : ""}
                  ${idx === 2 ? "bottom-4 -left-64" : ""}
                  ${idx === 3 ? "bottom-4 -right-64" : ""}
                `}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={detail.color}>{detail.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{detail.label}</span>
                </div>
                <div className="text-sm font-semibold text-zinc-200">{detail.value}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-7xl font-extrabold tracking-tighter mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-600"
        >
          Mohammed Osman Ghani
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-base md:text-2xl max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-4"
        >
          Full-Stack Developer specializing in AI/ML. 
          Architecting robust solutions at the intersection of intelligence and performance.
        </motion.p>

        {/* Mobile Details - Optimized layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8 max-w-md mx-auto px-4">
          {details.map((detail) => (
            <div key={detail.label} className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center gap-3">
              <span className={`flex-shrink-0 ${detail.color}`}>{detail.icon}</span>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">{detail.label}</p>
                <p className="text-xs font-medium truncate">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 px-6"
        >
          <button 
            onClick={handleExploreClick}
            className="px-8 py-4 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]"
          >
            Explore My Work
          </button>
          <button 
            onClick={onContactClick}
            className="px-8 py-4 border border-zinc-800 rounded-full font-black hover:bg-white hover:text-black transition-all active:scale-95"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
