import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi2'
import { projects, ProjectCard } from '../components/Projects'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] px-6 py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 text-sm font-semibold hover:text-ruby transition-colors duration-200"
          >
            <HiArrowLeft className="text-base" />
            Back to Home
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-[11px] font-semibold tracking-[0.15em] text-ruby uppercase mb-3.5">All Work</p>
          <h1 className="text-[clamp(32px,4vw,56px)] font-extrabold tracking-[-0.02em] m-0 text-ink">
            All <span className="ruby-grad">Projects</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-500 text-[15px] max-w-[560px] mx-auto mt-4 mb-16 leading-[1.7]"
        >
          Every project I've shipped — from product ideas to client work. Built with care for performance, UX, and clean code.
        </motion.p>

        {/* All 6 cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 items-start group/cards"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </motion.div>

      </div>
    </div>
  )
}
