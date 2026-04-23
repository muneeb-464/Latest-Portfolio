import { SiGithub, SiX, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

const socials = [
  { icon: SiGithub,    href: 'https://github.com/muneeb-464'     },
  { icon: FaLinkedin,  href: 'https://linkedin.com/in/munib-sajjad' },
  { icon: SiX,         href: 'https://x.com/munib-sajjad'          },
  { icon: SiInstagram, href: 'https://instagram.com/munib-sajjad'  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/7 pt-16 pb-8 px-6 bg-[#060606]">
      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Logo" className="w-[42px] h-[42px] rounded-lg object-contain mb-5" />
            <p className="text-sm text-gray-500 leading-[1.75] max-w-[300px] m-0">
              Professional <span className="text-ink">Full Stack Developer</span> dedicated to crafting immersive, high-performance digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-[0.1em] mb-5 mt-0">Navigation</p>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-500 font-medium transition-colors duration-200 hover:text-ink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-[0.1em] mb-5 mt-0">Connect</p>
            <div className="flex flex-col gap-2.5 mb-6">
              <a href="https://mail.google.com/mail/?view=cm&to=464muneeb@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 transition-colors duration-200 hover:text-ruby">
                464muneeb@gmail.com
              </a>
              <a href="https://wa.me/923036310002" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 transition-colors duration-200 hover:text-ruby">
                +92 303 6310002
              </a>
            </div>
            <div className="flex gap-2.5">
                {socials.map(({ icon: Icon, href }) => (
                <a
                  key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="relative w-11 h-11 flex items-center justify-center bg-[#111] border border-white/10 rounded-xl text-ruby text-[18px] overflow-hidden transition-all duration-500 hover:scale-105 hover:border-ruby/50 hover:shadow-[0_0_20px_rgba(230,57,70,0.5)] before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-[linear-gradient(0deg,transparent,transparent_30%,rgba(230,57,70,0.3))] before:-rotate-45 before:transition-all before:duration-500 before:opacity-0 hover:before:opacity-100 hover:before:translate-y-full"
                >
                  <span className="relative z-10"><Icon /></span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-7 flex justify-between items-center flex-wrap gap-3">
          <span className="text-[13px] text-gray-700">© 2026 Munib Sajjad. All rights reserved.</span>
          <span className="text-[13px] text-gray-700 flex items-center gap-1">
            Made with <span className="text-ruby">♥</span> in Pakistan
          </span>
        </div>

      </div>
    </footer>
  )
}
