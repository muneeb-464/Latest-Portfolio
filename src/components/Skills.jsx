import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiRedux, SiReactquery, SiChartdotjs,
  SiNodedotjs, SiExpress, SiNestjs, SiSocketdotio, SiMongodb, SiPostgresql,
  SiSupabase, SiFirebase, SiDocker, SiOpenai, SiGit, SiVercel, SiJest, SiVite,
} from 'react-icons/si'

const row1 = [
  { name: 'TypeScript',   icon: SiTypescript,  color: '#3178C6', category: 'Language'  },
  { name: 'JavaScript',   icon: SiJavascript,  color: '#F7DF1E', category: 'Language'  },
  { name: 'React',        icon: SiReact,       color: '#61DAFB', category: 'Framework' },
  { name: 'Next.js',      icon: SiNextdotjs,   color: '#FFFFFF', category: 'Framework' },
  { name: 'Tailwind',     icon: SiTailwindcss, color: '#06B6D4', category: 'Styling'   },
  { name: 'TanStack Query', icon: SiReactquery, color: '#FF4154', category: 'Data'     },
  { name: 'Redux Toolkit',icon: SiRedux,       color: '#764ABC', category: 'State'     },
  { name: 'Chart.js',     icon: SiChartdotjs,  color: '#FF6384', category: 'Dataviz'   },
  { name: 'HTML',         icon: SiHtml5,       color: '#E34F26', category: 'Markup'    },
  { name: 'CSS',          icon: SiCss,         color: '#1572B6', category: 'Styling'   },
  { name: 'Vite',         icon: SiVite,        color: '#646CFF', category: 'Tooling'   },
  { name: 'Jest',         icon: SiJest,        color: '#C21325', category: 'Testing'   },
]

const row2 = [
  { name: 'Node.js',      icon: SiNodedotjs,   color: '#339933', category: 'Backend'   },
  { name: 'Express.js',   icon: SiExpress,     color: '#FFFFFF', category: 'Backend'   },
  { name: 'NestJS',       icon: SiNestjs,      color: '#E0234E', category: 'Backend'   },
  { name: 'Socket.io',    icon: SiSocketdotio, color: '#FFFFFF', category: 'Realtime'  },
  { name: 'MongoDB',      icon: SiMongodb,     color: '#47A248', category: 'Database'  },
  { name: 'PostgreSQL',   icon: SiPostgresql,  color: '#4169E1', category: 'Database'  },
  { name: 'Supabase',     icon: SiSupabase,    color: '#3FCF8E', category: 'Backend'   },
  { name: 'Firebase',     icon: SiFirebase,    color: '#FFCA28', category: 'Backend'   },
  { name: 'OpenAI',       icon: SiOpenai,      color: '#FFFFFF', category: 'AI'        },
  { name: 'Docker',       icon: SiDocker,      color: '#2496ED', category: 'DevOps'    },
  { name: 'Git',          icon: SiGit,         color: '#F05032', category: 'DevOps'    },
  { name: 'Vercel',       icon: SiVercel,      color: '#FFFFFF', category: 'Cloud'     },
]

function SkillCard({ name, icon: Icon, color, category }) {
  return (
    <div className="
      group flex-shrink-0 w-[160px] relative
      bg-[rgba(18,18,18,0.85)] border border-white/8 rounded-2xl py-5 px-4
      flex flex-col items-center gap-2 backdrop-blur-md mx-2 cursor-default
      overflow-hidden transition-all duration-500
      hover:border-ruby/30 hover:shadow-[0_8px_48px_rgba(230,57,70,0.14)]
      before:content-[''] before:absolute before:top-0 before:right-0 before:w-36 before:h-36
      before:bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.22),transparent_65%)]
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-36 after:h-36
      after:bg-[radial-gradient(circle_at_bottom_left,rgba(230,57,70,0.22),transparent_65%)]
      after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none
    ">
      <Icon style={{ fontSize: 30, color }} className="relative z-10" />
      <span className="relative z-10 text-[13px] font-bold text-ink text-center leading-tight">{name}</span>
      <span className="relative z-10 text-[10px] font-semibold text-gray-500 uppercase tracking-[0.12em]">{category}</span>
    </div>
  )
}

function MarqueeRow({ items, direction = 'left', speed = 35 }) {
  // Duplicate items to create seamless loop
  const doubled = [...items, ...items, ...items]
  const totalCards = items.length
  // Each card is 160px wide + 16px (mx-2 * 2) = 176px
  const singleWidth = totalCards * 176

  const xFrom = direction === 'left' ? 0 : -singleWidth
  const xTo   = direction === 'left' ? -singleWidth : 0

  return (
    <div className="overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
      <motion.div
        className="flex"
        animate={{ x: [xFrom, xTo] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} {...skill} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] relative overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(230,57,70,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-ruby/50" />
            <p className="text-[11px] font-semibold tracking-[0.15em] text-ruby uppercase">Inventory</p>
            <div className="h-px w-8 bg-ruby/50" />
          </div>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-extrabold tracking-[-0.02em] m-0">
            <span className="text-ink">The </span>
            <span className="ruby-grad">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Row 1 — left to right */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <MarqueeRow items={row1} direction="left" speed={45} />
        </motion.div>

        {/* Row 2 — right to left */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <MarqueeRow items={row2} direction="right" speed={45} />
        </motion.div>

      </div>
    </section>
  )
}
