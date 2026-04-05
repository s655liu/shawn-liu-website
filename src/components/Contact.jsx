import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Manual SVGs for Social Icons
const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function Contact() {
  const { t } = useLanguage();
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  }

  return (
    <footer id="contact" className="py-20 px-10 md:px-20 bg-[#0f0f12] border-t border-white/10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed font-light">
          {t?.['footer-desc'] || "I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
          {/* Email Box */}
          <div className="flex flex-col items-center gap-4 group/box">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic group-hover/box:text-primary transition-colors">Email</div>
             <div className="flex items-center gap-4 bg-white/5 pr-1 py-1 pl-6 border border-white/25 rounded-lg group hover:border-primary/60 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <span className="font-mono text-slate-200 text-sm">s314liu@gmail.com</span>
                <button 
                  onClick={() => copyToClipboard('s314liu@gmail.com', 'email')}
                  className="relative p-3 bg-white/5 border border-white/10 rounded-md hover:bg-primary hover:text-black transition-all group/btn active:scale-95"
                >
                  <AnimatePresence mode="wait">
                    {copiedType === 'email' ? (
                      <motion.span 
                        key="check" 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="text-[10px] font-bold uppercase font-mono"
                      >
                         Done
                      </motion.span>
                    ) : (
                      <motion.svg 
                        key="copy" 
                        className="w-4 h-4 transition-colors" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </button>
             </div>
          </div>

          {/* Socials Connect */}
          <div className="flex flex-col items-center gap-4">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic">Connect</div>
             <div className="flex items-center gap-6 bg-white/5 px-8 py-3.5 border border-white/25 rounded-lg hover:border-primary/60 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <a href="https://github.com/s655liu" target="_blank" className="text-slate-400 hover:text-primary transition-colors hover:scale-110">
                  <Github size={22} />
                </a>
                <div className="w-[1px] h-4 bg-white/10"></div>
                <a href="https://www.linkedin.com/in/shawn-liu-399448170/" target="_blank" className="text-slate-400 hover:text-primary transition-colors hover:scale-110">
                  <Linkedin size={22} />
                </a>
             </div>
          </div>

          {/* Phone Box */}
          <div className="flex flex-col items-center gap-4 group/box">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest italic group-hover/box:text-primary transition-colors">Phone</div>
             <div className="flex items-center gap-4 bg-white/5 pr-1 py-1 pl-6 border border-white/25 rounded-lg group hover:border-primary/60 transition-all shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <span className="font-mono text-slate-200 text-sm">+1 (778)-939-2233</span>
                <button 
                  onClick={() => copyToClipboard('+1 778-939-2233', 'phone')}
                  className="relative p-3 bg-white/5 border border-white/10 rounded-md hover:bg-primary hover:text-black transition-all group/btn active:scale-95"
                >
                  <AnimatePresence mode="wait">
                    {copiedType === 'phone' ? (
                      <motion.span 
                        key="phone-check" 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="text-[10px] font-bold uppercase font-mono"
                      >
                         Done
                      </motion.span>
                    ) : (
                      <motion.svg 
                        key="phone-copy" 
                        className="w-4 h-4 transition-colors" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </button>
             </div>
          </div>
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:s314liu@gmail.com" 
          className="inline-block px-12 py-4 border-2 border-primary text-primary font-bold font-mono uppercase tracking-widest mb-20 hover:bg-primary hover:text-black transition-all shadow-[0_0_20px_rgba(100,255,218,0.15)]"
        >
          {t?.['footer-btn'] || 'Get In Touch'}
        </motion.a>

        <p className="text-slate-600 font-mono text-xs tracking-widest uppercase opacity-50">
          &copy; {new Date().getFullYear()} Shawn Liu // Vancouver, BC
        </p>
      </motion.div>
    </footer>
  )
}
