import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile-photo 2.jpeg'
import { useState, useEffect, useRef } from 'react'

const aboutText =
  "I'm Munib Sajjad, a Full-Stack Developer (MERN) with 5+ years of experience building production web applications in React, Next.js, Node.js and TypeScript. I currently build and architect a freelance marketplace at Hunar.pk, and scaled multi-country education platforms to 500+ SEO-optimized pages at BoomerangEdu. Across four years at Meta Brains I built 40+ full-stack applications — eCommerce, AI-driven apps, booking systems and CRM dashboards — that became the foundation of courses reaching 100k+ students, and was promoted from Senior Developer to Project Manager leading a 5-member team. I also teach on Preply with a 5-star rating. My strengths are performance optimization, REST APIs, real-time features, and owning delivery end to end."

const stats = [
  { value: '5+',    label: 'Years Experience'  },
  { value: '40+',   label: 'Apps Shipped'      },
  { value: '100k+', label: 'Students Reached'  },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp  = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }

export default function About() {
  const [typed, setTyped]   = useState('')
  const [tilt, setTilt]     = useState({ x: 0, y: 0 })
  const [gloss, setGloss]   = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)
  const textRef  = useRef(null)
  const hasTyped = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped.current) {
          hasTyped.current = true
          let i = 0
          const id = setInterval(() => {
            i++
            setTyped(aboutText.slice(0, i))
            if (i >= aboutText.length) clearInterval(id)
          }, 9)
        }
      },
      { threshold: 0.3 }
    )
    if (textRef.current) observer.observe(textRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setTilt({ x: -dy * 12, y: dx * 12 })
    setGloss({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGloss({ x: 50, y: 50 })
    setHovered(false)
  }

  return (
    <div id="about" className="py-[120px] relative scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-[11px] font-semibold tracking-[0.15em] text-ruby uppercase mb-4"
        >
          Discovery
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* ── Left ── */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.02em] leading-[1.15] mb-7 text-ink"
            >
              About <span className="ruby-grad">The Architect</span>
            </motion.h2>

            {/* Typing animation paragraph */}
            <div ref={textRef} className="text-base text-gray-400 leading-[1.8] mb-12 min-h-[280px]">
              {typed}
              <span className="inline-block w-[2px] h-[1em] bg-ruby align-middle ml-[2px] animate-pulse" />
            </div>

            {/* Stats */}
            <motion.div variants={stagger} className="flex gap-8 flex-wrap">
              {stats.map(({ value, label }) => (
                <motion.div key={label} variants={fadeUp} className="flex flex-col gap-1">
                  <span className="text-4xl font-extrabold text-ruby tracking-[-0.02em] leading-none">{value}</span>
                  <span className="text-[13px] text-muted font-medium uppercase tracking-[0.08em]">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHovered(true)}
            style={{ perspective: '1000px' }}
          >
            <div
              className="w-[340px] h-[400px] rounded-3xl overflow-hidden relative border border-white/8"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.12s ease, box-shadow 0.4s ease, filter 0.5s ease',
                filter: hovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(1.15)',
                boxShadow: hovered
                  ? '0 32px 80px rgba(230,57,70,0.25), 0 0 0 1px rgba(230,57,70,0.2)'
                  : '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              <img src={profilePhoto} alt="Munib Sajjad" className="w-full h-full object-cover" />

              {/* White overlay — fades out on hover */}
              <div
                className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
                style={{ background: 'rgba(255,255,255,0.18)', opacity: hovered ? 0 : 1 }}
              />

              {/* Glossy light reflection — follows cursor */}
              <div
                className="absolute inset-0 pointer-events-none z-10 rounded-3xl transition-opacity duration-200"
                style={{
                  background: `radial-gradient(circle at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, transparent 65%)`,
                  opacity: hovered ? 1 : 0,
                }}
              />

              {/* Bottom vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.75) 100%)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
