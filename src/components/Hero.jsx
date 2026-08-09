import { motion } from 'framer-motion'
import { SiGithub, SiX, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import About from './About'
import profilePhoto from '../assets/profile-photo 2.jpeg'
const resumePdf = "/Muhammad_Munib_Sajjad_Full_Stack_Developer.pdf";
const socials = [
  { icon: SiGithub, href: 'https://github.com/muneeb-464' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/munib-sajjad/' },
  { icon: SiX, href: 'https://x.com/munib464' },
  { icon: SiInstagram, href: 'https://www.instagram.com/muneeb464/' },
]


const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const roles = ['Full-Stack Developer', 'MERN Specialist', 'Software Engineer', 'Instructor']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [gloss, setGloss] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

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
    setHovered(false)
  }

  return (
    <section id="hero" className="relative overflow-hidden px-6">

      {/* ── Intro row — fills the viewport ── */}
      <div className="min-h-screen flex items-center pt-[100px] pb-16">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Left ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">

            <motion.p variants={fadeUp} className="text-[11px] font-semibold tracking-[0.15em] text-ruby uppercase m-0">
              Welcome to my Universe
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-[clamp(44px,6vw,76px)] font-extrabold leading-[1.02] tracking-[-0.04em] m-0 text-ink">
              Munib <span className="ruby-grad">Sajjad</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[clamp(19px,2.2vw,26px)] font-bold tracking-[-0.02em] text-gray-500 m-0 -mt-2">
              Crafting Digital Masterpieces
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="relative text-[17px] text-gray-300 leading-[1.75] m-0 max-w-[520px] pl-5 border-l-2 border-ruby/60"
            >
              A professional{' '}

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

              {' '}<br /> dedicated to building high-performance, user-centric web
              applications and CRMs with integrated <span className="text-ink font-semibold">AI</span>.
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
                href={resumePdf} target="_blank" rel="noopener noreferrer" download="Muhammad_Munib_Sajjad_Full_Stack_Developer.pdf"
                className="px-7 py-[13px] bg-white/5 text-ink font-semibold text-sm rounded-lg border border-white/15 inline-flex items-center gap-2 transition-all duration-300 hover:border-ruby/40 hover:bg-ruby/8"
              >
                Get Resume ↑
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex justify-center"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            onMouseEnter={() => setHovered(true)}
            style={{ perspective: '1000px' }}
          >
            <div
              className="w-[290px] h-[340px] sm:w-[400px] sm:h-[470px] rounded-3xl overflow-hidden relative border border-white/8"
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

      {/* ── Divider ── */}
      <div className="max-w-[1200px] mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── About block — same section, own #about anchor ── */}
      <About />

    </section>
  )
}
