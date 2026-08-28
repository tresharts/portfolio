import Header from "./components/Header"
import Hero from "./components/HeroSection"
import Skills from "./components/Skills"
import Projetos from "./components/Projetos"
import Experiencia from "./components/Experiencia"
import Contato from "./components/Contato"

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Projetos />
        <Experiencia />
        <Contato />
      </main>
    </>
  )
}

export default App