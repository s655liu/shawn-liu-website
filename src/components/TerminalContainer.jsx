import React from 'react';
import { motion } from 'framer-motion';

import { useLanguage } from '../context/LanguageContext';

const TerminalContainer = ({ children }) => {
  const { t } = useLanguage();
  return (
    <div className="max-w-[95%] lg:max-w-[1600px] mx-auto px-2 md:px-10 py-20">
      {/* Terminal Top Bar */}
      <div className="bg-[#121214] border border-white/10 rounded-t-xl p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">
          shawn — zsh — 80x24
        </div>
        <div className="w-12"></div>
      </div>

      {/* Terminal Body Wrapping Children */}
      <div className="bg-[#0a0a0c]/40 backdrop-blur-xl border-x border-b border-white/10 rounded-b-xl overflow-hidden">
        {/* Terminal Prompt Header (Sticks to top of container) */}
        <div className="p-8 font-mono text-sm md:text-base border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">shawn@desktop</span>
            <span className="text-slate-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-slate-200">$</span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white"
            >
              ls -hawn
            </motion.span>
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-5 bg-primary"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-primary/60 text-xs"
          >
            <span>drwxr-xr-x  {t('term-about')}</span>
            <span>drwxr-xr-x  {t('term-proj')}</span>
            <span>drwxr-xr-x  {t('term-exp')}</span>
            <span>drwxr-xr-x  {t('term-edu')}</span>
            <span>drwxr-xr-x  {t('term-skills')}</span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TerminalContainer;
