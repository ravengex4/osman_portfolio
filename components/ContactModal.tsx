
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, X, Copy, Check, Linkedin, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "osmn.ghani@gmail.com";
  const phone = "+91 7680802273";
  const linkedin = "https://www.linkedin.com/in/mohammed-osman-ghani-154613332";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">Get in Touch</h3>
                <p className="text-zinc-500 text-sm">I'm currently open to new opportunities.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-800 text-zinc-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              {/* Email Card */}
              <div className="group relative p-5 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Email Address</p>
                    <p className="text-white font-mono text-sm truncate">{email}</p>
                  </div>
                  <button 
                    onClick={copyEmail}
                    className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 hover:text-white transition-all active:scale-95"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-zinc-500" />}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative p-5 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Professional Profile</p>
                    <p className="text-white font-medium text-sm truncate">Mohammed Osman Ghani</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href={`tel:${phone}`}
                className="block group relative p-5 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Direct Contact</p>
                    <p className="text-white font-mono text-sm truncate">{phone}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="p-6 bg-zinc-950/50 text-center">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-black">
                Usually responds within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
