
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative z-10 overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white">Mohammed Osman Ghani</h2>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              {[
                { icon: <Github className="w-6 h-6" />, link: "https://github.com/ravengex4" },
                { icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/in/mohammed-osman-ghani-154613332" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-900 border border-white/5 hover:border-indigo-500/50 hover:text-indigo-400 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              &copy; 2025 Osman Ghani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-indigo-500/5 blur-[120px] rounded-[100%] -z-10" />
    </footer>
  );
};

export default Footer;
