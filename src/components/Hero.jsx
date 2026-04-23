import { motion } from 'framer-motion'
import { SiGithub, SiX, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import resumePdf from '../assets/Resume.docx.pdf'
const socials = [
  { icon: SiGithub, href: 'https://github.com/muneeb-464' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/munib-sajjad/' },
  { icon: SiX, href: 'https://x.com/munib464' },
  { icon: SiInstagram, href: 'https://www.instagram.com/muneeb464/' },
]

const codeLines = [
  { tokens: [{ t: 'const ', c: '#C084FC' }, { t: 'developer', c: '#E3E2E2' }, { t: ' = {', c: '#E3E2E2' }] },
  { tokens: [{ t: '  name', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"Munib Sajjad"', c: '#86EFAC' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '  focus', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"FullStack Mastery"', c: '#86EFAC' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '  skills', c: '#60A5FA' }, { t: ': [', c: '#E3E2E2' }] },
  { tokens: [{ t: '    ', c: '#E3E2E2' }, { t: '"React.js"', c: '#86EFAC' }, { t: ', ', c: '#E3E2E2' }, { t: '"Next.js"', c: '#86EFAC' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '    ', c: '#E3E2E2' }, { t: '"Express.js"', c: '#86EFAC' }, { t: ', ', c: '#E3E2E2' }, { t: '"Node.js"', c: '#86EFAC' },  { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '    ', c: '#E3E2E2' }, { t: '"MongoDB"', c: '#86EFAC' }] },
  { tokens: [{ t: '  ],', c: '#E3E2E2' }] },
  { tokens: [{ t: '  passionate', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: 'true', c: '#E63946' }, { t: ',', c: '#E3E2E2' }] },
  { tokens: [{ t: '  motto', c: '#60A5FA' }, { t: ': ', c: '#E3E2E2' }, { t: '"Build with Purpose"', c: '#86EFAC' }] },
  { tokens: [{ t: '};', c: '#E3E2E2' }] },
  { tokens: [] },
  { tokens: [{ t: 'developer', c: '#60A5FA' }, { t: '.', c: '#E3E2E2' }, { t: 'build', c: '#FCD34D' }, { t: '();', c: '#E3E2E2' }] },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const roles = ['innovator', 'Engineer', 'Developer', 'Ai Expert']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [gloss, setGloss] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setTilt({ x: -dy * 10, y: dx * 10 })
    setGloss({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 })
  }

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGloss({ x: 50, y: 50 })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-[100px] pb-16 px-6">


      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Left ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">

            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] text-ruby uppercase m-0">
              Welcome to my Universe
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.08] tracking-[-0.04em] m-0 text-ink">
              Crafting <span className="ruby-grad">Digital</span> <br />
              <span className="ruby-grad">Masterpieces</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base text-gray-400 leading-[1.7] m-0 max-w-[460px]"
            >
              I'm <strong className="text-ink">Munib Sajjad</strong>, a professional{' '}

              <span className="inline-block align-bottom">
                <motion.span
                  key={roles[index]}
                  initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.6 }}
                  animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-ruby inline-block font-semibold"
                >
                  {roles[index]}
                </motion.span>
              </span>

              {' '}<br /> dedicated to building high-performance <br />
              user-centric web applications.
            </motion.p>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <a
                  key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="relative w-11 h-11 flex items-center justify-center bg-[#111] border border-white/10 rounded-xl text-ruby text-[18px] overflow-hidden transition-all duration-500 hover:scale-105 hover:border-ruby/50 hover:shadow-[0_0_20px_rgba(230,57,70,0.5)] before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-[linear-gradient(0deg,transparent,transparent_30%,rgba(230,57,70,0.3))] before:-rotate-45 before:transition-all before:duration-500 before:opacity-0 hover:before:opacity-100 hover:before:translate-y-full"
                >
                  <span className="relative z-10"><Icon /></span>
                </a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="relative px-7 py-[13px] font-semibold text-sm rounded-lg inline-flex items-center gap-2 overflow-hidden border border-white/15 text-white group"
              >
                {/* Sliding background */}
                <span className="absolute inset-0 bg-ruby/60 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>

                {/* Text */}
                <span className="relative z-10 flex items-center gap-2 transition-all duration-500 ">
                  Let's Collaborate ↗
                </span>
              </a>
              <a
                href={resumePdf} target="_blank" rel="noopener noreferrer" download="Munib_Sajjad_Resume.pdf"
                className="px-7 py-[13px] bg-white/5 text-ink font-semibold text-sm rounded-lg border border-white/15 inline-flex items-center gap-2 transition-all duration-300 hover:border-ruby/40 hover:bg-ruby/8"
              >
                Get Resume ↑
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Code Editor ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
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
    </section>
  )
}
