import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import './App.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function GlobalGlow() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(230,57,70,0.18) 0%, rgba(230,57,70,0.08) 40%, rgba(230,57,70,0.03) 65%, transparent 85%)',
      }}
    />
  )
}

export default function App() {
  return (
    <>
      <GlobalGlow />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}
