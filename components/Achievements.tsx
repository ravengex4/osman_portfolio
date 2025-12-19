
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Star, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Achievements</h2>
        <p className="text-zinc-400">Recognitions for innovation and technical excellence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {ACHIEVEMENTS.map((achievement, idx) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-transparent transition-all"
          >
            <div className="bg-zinc-950 p-8 rounded-[22px] h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl mb-6 shadow-xl group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-white">{achievement.title}</h3>
              <p className="text-sm font-bold text-indigo-400 mb-4">{achievement.organizer}</p>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {achievement.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-600 tracking-widest">{achievement.year}</span>
                <Award className="w-4 h-4 text-zinc-800" />
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
