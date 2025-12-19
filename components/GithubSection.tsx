
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code, GitBranch } from 'lucide-react';
import { PROJECTS } from '../constants';

const GithubSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineering Showcase</h2>
          <p className="text-zinc-400">Production-grade projects and experimental tools.</p>
        </div>
        <a 
          href="https://github.com/ravengex4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all text-xs font-black uppercase tracking-widest"
        >
          <Github className="w-4 h-4" /> Full Profile
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-6 rounded-[32px] bg-zinc-900/40 border border-white/5 hover:border-indigo-500/20 transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Code className="w-5 h-5" />
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>

            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
              {project.name}
            </h3>
            
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800/50 text-zinc-500 rounded-md border border-white/5">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-600">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 10+</span>
                <span className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> 5+</span>
              </div>
              <a href={project.link} className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                View Source <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GithubSection;
