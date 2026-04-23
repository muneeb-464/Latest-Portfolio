import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((section) => {
        const el = document.getElementById(section.toLowerCase())
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) setActive(section)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-max max-w-[calc(100vw-32px)]">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Pill */}
        <div className="flex items-center justify-between gap-8 px-5 py-[10px] rounded-full bg-black/60 backdrop-blur-lg border border-white/8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] min-w-[480px] max-md:min-w-0 max-md:w-[calc(100vw-32px)]">

          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-[34px] h-[34px] rounded-lg object-contain shrink-0" />

          {/* Desktop links */}
          <ul className="flex gap-7 list-none m-0 p-0 max-md:hidden">
            {links.map((l) => {
              const isActive = active === l
              return (
                <li key={l} className="relative">
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setActive(l)}
                    className={`text-sm font-medium pb-1.5 transition-colors duration-300 no-underline ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    {l}
                  </a>
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-ruby origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 ml-auto"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="block w-5 h-0.5 bg-gray-400 rounded" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-5 h-0.5 bg-gray-400 rounded" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block w-5 h-0.5 bg-gray-400 rounded" />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl overflow-hidden bg-[rgba(10,10,10,0.96)] backdrop-blur-xl border border-white/7 shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
            >
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => { setOpen(false); setActive(l) }}
                  className={`block py-3.5 px-6 border-b border-white/5 text-sm font-medium transition-colors duration-200 ${active === l ? 'text-ruby' : 'text-gray-400 hover:text-white'}`}
                >
                  {l}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
