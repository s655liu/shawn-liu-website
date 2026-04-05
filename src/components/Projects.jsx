import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'

const projects = [
  {
    id: 'chess',
    title: 'Majestic Chess: Tournament Edition',
    desc: 'High-performance C++ chess engine with Minimax AI.',
    image: '/Images/chess.png',
    tags: ['C++', 'Raylib'],
    link: 'https://github.com/s655liu/Chess'
  },
  {
    id: 'cc3k',
    title: 'CC3K-Villain (Final Premium)',
    desc: 'Graphical Rogue-lite dungeon crawler with smart AI.',
    image: '/Images/cc3k.png',
    tags: ['C++', 'olcPixelGameEngine'],
    link: 'https://github.com/s655liu/CC3K-Villain'
  }
]

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-20 px-10 md:px-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-20 text-center"
      >
        <ScrambleText text={t('proj-title') || "Featured Projects"} delay={200} />
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#121214] border border-white/5 overflow-hidden"
          >
            <div className="h-[300px] overflow-hidden">
              <motion.img 
                src={project.image} 
                alt={project.title}
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-mono text-primary mb-4">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors"
              >
                View Source <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
