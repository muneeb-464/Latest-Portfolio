import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const codeLines = [
  { tokens: [{ t: 'const ', c: '#C084FC' }, { t: 'developer', c: '#E3E2E2' }, { t: ' = {', c: '#E3E2E2' }] },
  { tokens: [{ t: '  name', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"Munib Sajjad"', c: '#FD7581' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '  focus', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"Full-Stack Developer (MERN Stack Specialist)"', c: '#FD7581' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '  skills', c: '#60A5FA' }, { t: ': [', c: '#E3E2E2' }] },
  { tokens: [{ t: '    ', c: '#E3E2E2' }, { t: '"React"', c: '#FD7581' }, { t: ', ', c: '#E3E2E2' }, { t: '"Next.js"', c: '#FD7581' }, { t: ', ', c: '#E3E2E2' }, { t: '"TypeScript"', c: '#FD7581' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '    ', c: '#E3E2E2' }, { t: '"Node.js"', c: '#FD7581' }, { t: ', ', c: '#E3E2E2' }, { t: '"NestJS"', c: '#FD7581' }, { t: ', ', c: '#E3E2E2' }, { t: '"Express"', c: '#FD7581' },  { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '    ', c: '#E3E2E2' }, { t: '"MongoDB"', c: '#FD7581' }, { t: ', ', c: '#E3E2E2' }, { t: '"PostgreSQL"', c: '#FD7581' }] },
  { tokens: [{ t: '  ],', c: '#E3E2E2' }] },
  { tokens: [{ t: '  experience', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"5+ years"', c: '#FD7581' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '  shipped', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"40+ apps"', c: '#FD7581' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '  motto', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"Build with Purpose"', c: '#FD7581' }] },
  { tokens: [{ t: '};', c: '#E3E2E2' }] },
  { tokens: [] },
  { tokens: [{ t: 'developer', c: '#60A5FA' }, { t: '.', c: '#E3E2E2' }, { t: 'build', c: '#FCD34D' }, { t: '();', c: '#E3E2E2' }] },
]

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

          {/* ── Right: Code Editor ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative bg-[rgba(14,14,14,0.85)] border border-white/8 rounded-2xl overflow-hidden backdrop-blur-lg shadow-[0_24px_64px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_32px_80px_rgba(230,57,70,0.18),0_0_0_1px_rgba(230,57,70,0.12)]"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.12s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Glossy light reflection */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl z-10 opacity-0 hover:opacity-100 transition-opacity duration-200"
                style={{ background: `radial-gradient(circle at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)` }}
              />
              {/* Header */}
              <div className="px-4 py-3 border-b border-white/7 flex items-center gap-2 bg-black/30">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#874242]" />
                <span className="w-3 h-3 rounded-full bg-[#442E2E]" />
                <span className="text-xs text-gray-600 ml-2">dev/Munib.ts</span>
              </div>

              {/* Code */}
              <pre className="m-0 px-6 py-6 text-[13.5px] leading-[1.85] font-mono overflow-x-auto">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-gray-700 mr-5 select-none min-w-[20px] text-right">{i + 1}</span>
                    <span>
                      {line.tokens.map((tok, j) => (
                        <span key={j} style={{ color: tok.c }}>{tok.t}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </pre>

              {/* Status bar */}
              <div className="px-4 py-2 border-t border-white/6 bg-ruby/10 flex justify-between">
                <span className="text-[11px] text-ruby font-semibold">● Full Stack Developer</span>
                <span className="text-[11px] text-gray-600">UTF-8 · LF</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
