import { Contacts } from "./components/Contacts"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import Header from "./components/Header"
import { Hero } from "./components/Hero"
import "photoswipe/dist/photoswipe.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Contacts />
      </main>
    </>
  )
}

export default App
