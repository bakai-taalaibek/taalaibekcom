import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import Header from "./components/Header"
import { Hero } from "./components/Hero"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
      </main>
    </>
  )
}

export default App
