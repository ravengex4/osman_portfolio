
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical Prowess</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(39, 39, 42, 0.9)",
              borderColor: "rgba(99, 102, 241, 0.4)" 
            }}
            className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 transition-all duration-300 flex flex-col items-center gap-4 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">{skill.category}</span>
            </div>
            
            <div className="w-16 h-16 mb-2 grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center p-2">
              <img 
                src={skill.icon} 
                alt={`${skill.name} logo`} 
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            
            <span className="font-bold text-zinc-400 group-hover:text-white transition-colors text-center">{skill.name}</span>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* CS Fundamentals Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-10 rounded-[40px] bg-zinc-900/40 border border-white/5 backdrop-blur-sm max-w-4xl w-full relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
            className="w-32 h-32" 
            alt="" 
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-20 h-20 rounded-3xl bg-indigo-500/20 flex items-center justify-center text-4xl shadow-inner overflow-hidden">
             <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
              className="w-12 h-12 grayscale brightness-200"
              alt="DSA"
             />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Data Structures & Algorithms</h3>
            <p className="text-zinc-400 leading-relaxed max-w-xl">
              Specialized in engineering high-performance algorithms using Java. Expert in architecting memory-efficient data structures for complex computational problems.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
          {["Recursion", "Dynamic Programming", "Graph Theory", "Optimization", "Heaps & Trees", "Hashing"].map(topic => (
            <span key={topic} className="px-4 py-2 rounded-xl bg-zinc-800/80 text-[11px] font-bold uppercase tracking-wider text-zinc-500 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 transition-all cursor-default">
              {topic}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
