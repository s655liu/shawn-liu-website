import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-10 md:px-20 max-w-7xl mx-auto overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-heading mb-20 text-primary border-b border-primary/20 pb-4 inline-block tracking-widest uppercase font-mono"
      >
        <ScrambleText text={t('about-title') || "About Me"} delay={200} />
      </motion.h2>

      <div className="grid lg:grid-cols-12 gap-16 items-center">
        {/* About Text Content - Left */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-8"
        >
          <div className="relative p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-xl">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
             <p className="text-xl md:text-3xl leading-relaxed mb-8 font-light text-slate-200">
               {t('about-p1')}
             </p>
             <p className="text-lg md:text-xl text-slate-400 font-mono leading-relaxed">
               {t('about-p2')}
             </p>
          </div>
        </motion.div>

        {/* Profile Image with Technical Frame - Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-4 relative group"
        >
          {/* Technical Borders */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
          <div className="absolute top-0 right-0 text-[10px] font-mono text-primary/50 vertical-text py-4 tracking-tighter hidden md:block">
            SCAN_001 // IMG_REF_314
          </div>

          <div className="relative overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 shadow-2xl">
            <img 
              src="/Images/Me in Xi'an.png" 
              alt="Me in Xi'an" 
              className="w-full h-full object-cover transition-all duration-700 filter brightness-90 contrast-125 sepia-[0.1] hue-rotate-[-10deg] group-hover:filter-none group-hover:scale-105"
            />
            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(100,255,218,0.03),rgba(0,0,0,0),rgba(100,255,218,0.03))] bg-[length:100%_2px,3px_100%] opacity-30"></div>
          </div>
          
          <div className="mt-4 flex justify-between items-center font-mono text-[10px] text-primary">
            <span>[ SYSTEM_ACTIVE ]</span>
            <span>SHAWN_LIU.EXE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
