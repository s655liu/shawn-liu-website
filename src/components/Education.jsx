import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-10 md:px-20 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-20 border-b border-white/5 pb-8"
      >
        <ScrambleText text={t('edu-title') || "Education"} delay={200} />
      </motion.h2>

      <div className="relative group">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center gap-8 p-8 bg-white/3 border border-white/5 rounded-2xl hover:border-primary/30 transition-all backdrop-blur-sm"
        >
          {/* Logo Placeholder / University Name Area */}
          <div className="w-20 h-20 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
             <img 
               src={`${import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`}Images/uwaterloo-logo.jpg`} 
               alt="Waterloo" 
               className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all" 
             />
          </div>

          <div>
             <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-2 block">
                2020 - 2025
             </span>
             <h3 className="text-3xl font-bold mb-1 tracking-tight text-white transition-colors">
               University of Waterloo
             </h3>
             <h4 className="text-slate-400 font-mono text-lg italic">
               {t('role-graduate')}
             </h4>
             <p className="mt-4 text-slate-500 font-mono text-sm leading-relaxed max-w-2xl">
               {t('edu-courses')}
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
