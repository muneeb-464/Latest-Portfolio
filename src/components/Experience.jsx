import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const jobs = [
  {
    role: 'Senior Developer & Team Leader',
    company: 'Meta Brains',
    location: 'Remote',
    date: '2021 – 2025',
    bullets: [
      'Led a team of 4–5 developers to deliver 10+ full-stack web applications.',
      'Built AI-powered systems using OpenAI APIs to automate business workflows.',
      'Improved development efficiency by optimizing code structure and team collaboration.',
    ],
  },
    {
    role: 'Programming Instructor',
    company: 'Preply',
    location: 'Remote · Global',
    date: '2021 – Present',
    bullets: [
      'Teaching web development and programming to students globally with a 5-star rating.',
      'Covering HTML, CSS, JavaScript, TypeScript, React.js, Next.js and Node.js in structured online sessions.',
    ],
  },
  {
    role: 'QA Engineer',
    company: 'Masood Textile Mills',
    location: 'Pakistan',
    date: '2019 – 2021',
    bullets: [
      'Conducted staff training sessions on quality control procedures and internal software usage.',
      'Performed software testing and quality assurance for enterprise textile systems.',
      'Improved bug detection efficiency by up to 80% through structured testing processes.',
    ],
  },

]

function JobCard({ job, side }) {
  return (
    <div className="
      group relative bg-[rgba(18,18,18,0.85)] border border-white/8 rounded-2xl p-6
      backdrop-blur-md overflow-hidden transition-all duration-500
      hover:border-ruby/30 hover:shadow-[0_8px_48px_rgba(230,57,70,0.14)]
      before:content-[''] before:absolute before:top-0 before:right-0 before:w-52 before:h-52
      before:bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.22),transparent_65%)]
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-52 after:h-52
      after:bg-[radial-gradient(circle_at_bottom_left,rgba(230,57,70,0.22),transparent_65%)]
      after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none
    ">
      {/* Connector arrow */}
      <div
        className={`hidden md:block absolute top-5 w-0 h-0
          border-t-[8px] border-t-transparent
          border-b-[8px] border-b-transparent
          ${side === 'left'
            ? 'right-[-8px] border-l-[8px] border-l-white/8'
            : 'left-[-8px] border-r-[8px] border-r-white/8'
          }
        `}
      />

      <h3 className="text-[17px] font-bold text-ink mb-1">{job.role}</h3>

      <p className="flex items-center gap-1.5 text-[13px] text-ruby font-semibold mb-0.5">
        <FaBriefcase className="text-[11px] opacity-80" />
        {job.company}
      </p>

      <ul className="flex flex-col gap-1 mt-4">
        {job.bullets.map((b, i) => (
          <li
            key={i}
            className="group/bullet flex items-start gap-2.5 text-sm text-gray-500 leading-[1.65] px-2 py-1 rounded-md transition-all duration-250 hover:bg-ruby/5 cursor-default"
          >
            <span className="mt-[3px] flex-shrink-0 text-ruby/40 text-[11px] transition-all duration-250 group-hover/bullet:text-ruby group-hover/bullet:scale-110">
              ▸
            </span>
            <span className="transition-colors duration-250 group-hover/bullet:text-gray-200">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] px-6 relative">
      <div className="max-w-[1100px] mx-auto">

        {/* Heading badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center mb-[72px]"
        >
          {/* Horizontal line behind the pill */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-ruby to-transparent" />

          {/* Pill */}
          <div className="relative z-10 inline-flex items-center px-7 py-2.5 bg-[#0d0d0d] border border-white/10 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_4px_32px_rgba(0,0,0,0.6)]">
            <span className="text-[15px] font-bold text-white tracking-tight">Professional Journey</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center vertical line — hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ruby/30 to-transparent" />

          {/* Mobile left vertical line */}


          
          <div className="block md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ruby/25 to-transparent" />

          <div className="flex flex-col gap-14">
            {jobs.map((job, i) => {
              const isLeft = i % 2 === 0

              return (
                <div key={i} className="relative flex items-start md:items-center">

                  {/* ── DESKTOP zigzag layout ── */}
                  <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] w-full items-start gap-0">

                    {/* Left slot */}
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        className="pr-6"
                      >
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 bg-white/5 border border-white/8 px-2.5 py-0.5 rounded-full mb-3 float-right">
                          <FaCalendarAlt className="text-ruby/70 text-[9px]" />
                          {job.date}
                        </span>
                        <div className="clear-both" />
                        <JobCard job={job} side="left" />
                      </motion.div>
                    ) : (
                      <div />
                    )}

                    {/* Center node */}
                    <div className="flex justify-center pt-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.45, ease: 'backOut', delay: 0.15 }}
                        className="w-[42px] h-[42px] rounded-xl bg-ruby/15 border border-ruby/30 flex items-center justify-center shadow-[0_0_18px_rgba(230,57,70,0.35)] z-10 flex-shrink-0"
                      >
                        <FaBriefcase className="text-ruby text-[15px]" />
                      </motion.div>
                    </div>

                    {/* Right slot */}
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        className="pl-6"
                      >
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 bg-white/5 border border-white/8 px-2.5 py-0.5 rounded-full mb-3">
                          <FaCalendarAlt className="text-ruby/70 text-[9px]" />
                          {job.date}
                        </span>
                        <JobCard job={job} side="right" />
                      </motion.div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* ── MOBILE single-column layout ── */}
                  <div className="flex md:hidden gap-4 w-full">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.45, ease: 'backOut' }}
                        className="w-[38px] h-[38px] rounded-xl bg-ruby/15 border border-ruby/30 flex items-center justify-center shadow-[0_0_14px_rgba(230,57,70,0.3)] z-10"
                      >
                        <FaBriefcase className="text-ruby text-[13px]" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="flex-1 pt-1"
                    >
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 bg-white/5 border border-white/8 px-2.5 py-0.5 rounded-full mb-3">
                        <FaCalendarAlt className="text-ruby/70 text-[9px]" />
                        {job.date}
                      </span>
                      <JobCard job={job} side="right" />
                    </motion.div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
