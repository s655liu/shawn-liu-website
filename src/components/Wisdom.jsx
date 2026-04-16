import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { Quote } from 'lucide-react'

export default function Wisdom() {
  const { t } = useLanguage();

  return (
    <section id="wisdom" className="py-32 px-10 md:px-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div className="p-4 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm">
            <Quote className="text-primary w-8 h-8" />
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-10"
          >
            <h2 className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-4">
              {t('wisdom-title')}
            </h2>
            <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium italic leading-[1.6] text-white/90 max-w-4xl whitespace-pre-line">
              {t('wisdom-quote')}
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-px bg-primary/30"></div>
              <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                {t('wisdom-author')}
              </span>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background ambient light */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  )
}
