import './App.css'
import { Contact } from './components/Contact.tsx'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { Projects } from './components/Projects.tsx'
import { Skills } from './components/Skills.tsx'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
