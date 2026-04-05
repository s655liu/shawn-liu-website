import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import ScrambleText from './ScrambleText'
import { 
  Code2, 
  Atom, 
  Database, 
  Cpu, 
  Terminal, 
  Layers, 
  Globe, 
  Palette, 
  GitBranch, 
  FileJson, 
  FileCode,
  Coffee,
  BrainCircuit,
  FastForward,
  Layout
} from 'lucide-react'

const skills = [
  { name: 'Javascript', icon: FileJson },
  { name: 'Typescript', icon: FileCode },
  { name: 'React', icon: Atom },
  { name: 'C', icon: Cpu },
  { name: 'C++', icon: Terminal },
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: Layers },
  { name: 'PyTorch', icon: BrainCircuit },
  { name: 'Golang', icon: FastForward },
  { name: 'C#', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'ASP.NET', icon: Globe },
  { name: 'HTML', icon: Layout },
  { name: 'CSS', icon: Palette },
  { name: 'Git', icon: GitBranch }
]

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 px-10 md:px-20 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-mono uppercase tracking-widest mb-20 text-center"
      >
        <ScrambleText text={t('skills-title') || "Skills"} delay={200} />
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(100,255,218,0.05)',
              borderColor: 'rgba(100,255,218,0.3)' 
            }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col items-center justify-center p-8 bg-white/3 border border-white/5 rounded-xl transition-all group cursor-default"
          >
             <skill.icon className="w-10 h-10 mb-6 text-slate-500 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
             <span className="text-sm font-mono text-slate-400 group-hover:text-white transition-colors">
               {skill.name}
             </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
