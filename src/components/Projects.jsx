import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/Project-3.png'
import project4 from '../assets/Project-4.png'
import project5 from '../assets/Project-5.png'
import project6 from '../assets/Project-6.png'
import project7 from '../assets/Project-7.png'


export const projects = [
   {
    title: 'Data Vault',
    tagline: 'User Categories Data Management System',
    description: 'Data Vault is a user categories data management system designed to securely store and manage user information based on specific categories. The platform emphasizes data privacy and security, ensuring that sensitive user data is protected while providing efficient tools for categorization and retrieval.',
    tags: ['React.js', 'TypeScript', 'TailwindCSS', 'Supabase' ,'Google Auth'],
    image: project7,
    accent: '#E63946',
    live: 'https://data-vault-drab.vercel.app/',
    github: 'https://github.com/muneeb-464/Data-Vault',
  },

   {
    title: 'Displine Dashboard',
    tagline: 'User Maintenance and Daily Goals with Security and Privacy',
    description: 'Displine is a comprehensive user maintenance and daily goals dashboard designed to help individuals stay organized, motivated, and on track with their personal and professional objectives. The platform emphasizes security and privacy, ensuring that users can manage their tasks and goals with confidence.',
    tags: ['React', 'TypeScript', 'Node.js', 'TailwindCSS', 'MongoDB'],
    image: project6,
    accent: '#E63946',
    live: 'https://shinespanproject.netlify.app/',
    github: '#',
  },
  {
    title: 'Travel & Chalet Booking',
    tagline: 'Elite Alps – Luxury Travel & Chalet Booking Platform',
    description: 'Elite Alps operates in the luxury travel and hospitality industry, offering premium chalet rentals, concierge services, and curated alpine experiences across top destinations like the French Alps. ',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    image: project1,
    accent: '#E63946',
    live: 'https://elitealps.com/',
    github: '#',
  },
  {
    title: 'Media Production',
    tagline: 'Courchevel Media – Creative Production Portfolio',
    description: 'This App represents a modern media production portfolio, where clients can explore previous work in photography and videography. It showcases high-quality visual projects, helping clients understand the brand’s creative capabilities and style.',
    tags: ['React', 'TailwindCSS', 'Vercel'],
    image: project2,
    accent: '#E63946',
    live: 'https://courchevelmedia.com/',
    github: '#',
  },
   {
    title: 'Video & AI Automation',
    tagline: 'VideoSpark AI',
    description: 'An advanced video automation and project management suite designed for content creators and remote teams. The platform utilizes AI-driven logic to automatically prioritize video production tasks, suggest realistic deadlines, and identify workflow bottlenecks.',
    tags: ['React.js', 'Firebase', 'Strip', 'TailwindCSS', 'Cloud Functions'],
    image: project4,
    accent: '#E63946',
    live: 'https://videospark.site/',
    github: '#',
  },
  {
    title: 'Cleaning Services Platform',
    tagline: 'Simplifying  connection between local homeowners .',
    description: 'A comprehensive cleaning service ecosystem that allows users to pre-book specialized sessions with transparent, real-time service charge calculation. The platform provides a highly customized user experience where service costs are dynamically generated based on house size and specific requirements.',
    tags: ['React.js', 'TailwindCSS', 'MaterialUI' , "Netlify"],
    image: project3,
    accent: '#E63946',
    live: '#',
    github: '#',
  },
 
  {
    title: 'Real Estate Tech',
    tagline: 'Contran Realtor Pro',
    description: 'A specialized CRM designed for real estate professionals to securely capture and manage client information during open house events. The platform emphasizes data privacy and security, ensuring that sensitive client details are protected while providing tools for efficient lead management and follow-up.',
    tags: ['React', 'Firebase', 'Tailwind', 'Node.js'],
    image: project5,
    accent: '#E63946',
    live: 'https://contranrealtor.net/',
    github: 'https://github.com/muneeb-464/Con-tran-final',
  },
 
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }
const card = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ProjectCard({ p }) {
  const [expanded, setExpanded] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [gloss, setGloss] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setTilt({ x: -dy * 8, y: dx * 8 })
    setGloss({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGloss({ x: 50, y: 50 })
  }

  return (
    <motion.article
      layout
      variants={card}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-[opacity,filter] duration-300 group-hover/cards:opacity-40 group-hover/cards:blur-[3px] hover:!opacity-100 hover:!blur-none"
    >
      <div
        className="
          group relative bg-[rgba(18,18,18,0.85)] border border-white/8 rounded-3xl overflow-hidden
          backdrop-blur-md flex flex-col
          hover:border-ruby/30 hover:shadow-[0_8px_48px_rgba(230,57,70,0.18)]
          before:content-[''] before:absolute before:top-0 before:right-0 before:w-56 before:h-56
          before:bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.22),transparent_65%)]
          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none before:z-10
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-56 after:h-56
          after:bg-[radial-gradient(circle_at_bottom_left,rgba(230,57,70,0.22),transparent_65%)]
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none after:z-10
        "
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.12s ease, box-shadow 0.3s ease, border-color 0.5s ease',
        }}
      >
        {/* Glossy light reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: `radial-gradient(circle at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)` }}
        />

        {/* Image preview */}
        <div className="h-[200px] relative overflow-hidden bg-[#111]">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex-1 flex flex-col gap-3">
          <h3 className="text-xl font-bold text-ink m-0 tracking-[-0.01em]">{p.title}</h3>
          <p className="text-[13px] font-semibold m-0 ruby-grad">{p.tagline}</p>
          <div className="flex-1">
            <p className={`text-sm text-gray-500 leading-[1.7] m-0 transition-all duration-300 ${expanded ? '' : 'line-clamp-3'}`}>
              {p.description}
            </p>
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="mt-1 text-[13px] font-bold text-ruby hover:text-ruby/80 transition-colors duration-200"
            >
              {expanded ? 'See less ↑' : 'See more ↓'}
            </button>
          </div>

          {/* Tags — sliding fill on hover */}
          <div className="flex flex-wrap gap-2">
            {p.tags.map(tag => (
              <span
                key={tag}
                className="group/tag relative inline-flex text-[11px] font-semibold py-1 px-2.5 rounded-full border border-ruby/25 tracking-[0.04em] overflow-hidden cursor-default"
              >
                <span className="absolute inset-0 bg-ruby -translate-x-full group-hover/tag:translate-x-0 transition-transform duration-300 ease-out rounded-full" />
                <span className="relative z-10 text-ruby group-hover/tag:text-white transition-colors duration-200">{tag}</span>
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5 mt-1">
            <a
              href={p.live} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-[10px] bg-ruby text-white text-[13px] font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-opacity duration-200 hover:opacity-85"
            >
              <HiArrowTopRightOnSquare className="text-sm" />
              Live Demo
            </a>
            <a
              href={p.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-[10px] bg-white/5 text-ink text-[13px] font-semibold rounded-lg border border-white/12 flex items-center justify-center gap-1.5 transition-all duration-200 hover:border-white/25 hover:bg-white/8"
            >
              <SiGithub className="text-sm" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-[11px] font-semibold tracking-[0.15em] text-ruby uppercase mb-3.5">Portfolio</p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-extrabold tracking-[-0.02em] m-0 text-ink">
            Featured <span className="ruby-grad">Creations</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-500 text-[15px] max-w-[560px] mx-auto mt-4 mb-16 leading-[1.7]"
        >
          A selection of high-impact digital solutions, built with focus on scalability, performance, and exceptional user experience.
        </motion.p>

        {/* Top 3 cards */}
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid gap-6 items-start group/cards"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {featured.map((p) => <ProjectCard key={p.title} p={p} />)}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-[13px] rounded-lg border border-ruby/40 text-ruby text-sm font-semibold bg-ruby/6 transition-all duration-300 hover:bg-ruby/14 hover:border-ruby/70"
          >
            View All Projects →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
