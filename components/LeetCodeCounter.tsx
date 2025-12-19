
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Activity, Target, ChevronRight, Loader2 } from 'lucide-react';
import { leetCodeService } from '../services/leetCodeService';
import { LeetCodeStats } from '../types';

const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(value, { mass: 0.5, stiffness: 50, damping: 10 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span className="tabular-nums">{display}</motion.span>;
};

const LeetCodeCounter: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const unsubscribe = leetCodeService.subscribe((newStats) => {
      setStats(newStats);
      setLastUpdate(new Date());
      setIsSyncing(true);
      setTimeout(() => setIsSyncing(false), 2000);
    });

    return () => unsubscribe();
  }, []);

  if (!stats) {
    return (
      <div className="container mx-auto px-6 flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4 text-zinc-500">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
          <p className="text-[10px] font-black uppercase tracking-widest">Syncing Algorithms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6">
      <div className="relative overflow-hidden bg-zinc-900/60 border border-white/5 rounded-[40px] p-8 md:p-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full -mr-32 -mt-32" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500/80">
                Live Backend Linked
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white">
              Algorithmic Growth
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Real-time synchronization with <span className="text-indigo-400 font-bold">@{stats.username}</span>. 
              Visualizing data structures and complexity management.
            </p>

            <a 
              href={`https://leetcode.com/u/${stats.username}/`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
            >
              LeetCode Profile <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-zinc-950 border-2 border-white/5 flex flex-col items-center justify-center relative shadow-2xl">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="50%" cy="50%" r="48%" className="fill-none stroke-zinc-900 stroke-[3]" />
                  <motion.circle
                    cx="50%" cy="50%" r="48%"
                    className="fill-none stroke-indigo-500 stroke-[3]"
                    strokeDasharray="100 100"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: Math.min(stats.solved / 1000, 1) }} 
                  />
                </svg>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white">
                    <AnimatedNumber value={stats.solved} />
                  </div>
                  <div className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-500 mt-1">Solved</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { label: 'Easy', value: stats.easy, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { label: 'Medium', value: stats.medium, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
                { label: 'Hard', value: stats.hard, color: 'text-red-400', bg: 'bg-red-500/10' }
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-zinc-950/50 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}>
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[8px] font-black uppercase tracking-widest text-zinc-500">{item.label}</h4>
                      <p className="text-sm font-bold text-white"><AnimatedNumber value={item.value} /></p>
                    </div>
                  </div>
                  <div className="h-1 w-20 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${item.bg.replace('/10', '')}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${stats.solved > 0 ? (item.value / stats.solved) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeCounter;
