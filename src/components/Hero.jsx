import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'
import { MapPin } from 'lucide-react'

// Manual SVGs for Brand Icons
const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function Hero() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  
  const phrases = [
    `${t('hero-im-a')} ${t('hero-text-1')}`,
    t('hero-text-2'),
    t('hero-text-3')
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-10 md:px-20 overflow-hidden">
      {/* Bottom-Right Status Bar (Socials + Location) */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-5 z-30 font-mono text-[10px] tracking-[0.2em] uppercase bg-black/40 backdrop-blur-md p-4 border border-white/5 md:bg-transparent md:backdrop-blur-none md:p-0 md:border-none">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/s655liu" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group">
            <Github size={14} />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">GitHub</span>
          </a>
          <div className="w-[1px] h-3 bg-white/10 hidden md:block"></div>
          <a href="https://www.linkedin.com/in/shawn-liu-399448170/" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group">
            <Linkedin size={14} />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">LinkedIn</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex items-center gap-3 text-slate-500"
        >
          <MapPin size={12} className="text-primary" />
          {t('hero-location')} // 49.2827° N, 123.1207° W
        </motion.div>
      </div>

      <div className="z-10 max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary font-mono tracking-[0.3em] text-xs uppercase mb-6 block"
        >
          <ScrambleText text={t('hero-hi') || "HI, I'M"} delay={500} />
        </motion.div>
        
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[10rem] font-bold leading-[0.9] tracking-tighter"
          >
            <ScrambleText text={t('hero-name') || "Shawn Liu"} delay={800} speed={40} />
          </motion.h1>
        </div>

        {/* Alternating Hero Text */}
        <div className="h-24 md:h-20 flex items-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
              className="text-xl md:text-3xl lg:text-4xl text-white font-mono flex items-center gap-6"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shrink-0"></div>
              <span>
                 {phrases[index]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-wrap gap-8"
        >
          <a href="#projects" className="group relative px-12 py-6 bg-primary text-black font-bold uppercase tracking-widest overflow-hidden">
            <span className="relative z-10">{t('hero-view-proj')}</span>
            <motion.div 
              className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            />
          </a>
          <a href="#contact" className="px-12 py-6 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all uppercase font-mono tracking-widest text-sm shadow-[0_0_20px_rgba(100,255,218,0.15)]">
             {t('hero-contact-me')}
          </a>
        </motion.div>
      </div>

      {/* Hero Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute left-0 bottom-0 top-0 w-3/4 hidden lg:block pointer-events-none -z-10"
      >
        <img 
          src={`${import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`}Images/Shanghai_1.png`} 
          alt="SHANGHAI" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0c]/60 to-[#0a0a0c]"></div>
      </motion.div>
    </section>
  )
}
