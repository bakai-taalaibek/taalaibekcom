import { useCallback, useEffect, useRef, useState } from "react"
import { isElementDominant } from "../lib/helpers"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [dominantElement, setDominantElement] = useState<string | null>(null)
  const scrollDebounce = useRef<boolean>(true)
  const handleMenu = () => {
    setMobileNav(!mobileNav)
  }

  let hero: Element | null = null
  let experience: Element | null = null
  let education: Element | null = null
  let contacts: Element | null = null

  const isElementDominantMemo = useCallback(() => {
    const elements = [
      { name: "hero", dominance: isElementDominant(hero) },
      { name: "experience", dominance: isElementDominant(experience) },
      { name: "education", dominance: isElementDominant(education) },
      { name: "contacts", dominance: isElementDominant(contacts) },
    ]

    elements.sort((a, b) => {
      return b.dominance - a.dominance
    })

    const newDominantElement = elements[0]
    if (
      dominantElement === null ||
      newDominantElement.name !== dominantElement
    ) {
      setDominantElement(newDominantElement.name)
    }
  }, [])

  useEffect(() => {
    hero = document.getElementById("hero")
    experience = document.getElementById("experience")
    education = document.getElementById("education")
    contacts = document.getElementById("contacts")
    window.addEventListener("scroll", isElementDominantMemo)
  }, [])

  return (
    <>
      <header className="header header--desktop">
        <div className="header__container">
          <nav className="header__nav">
            <p
              className={`text ${
                dominantElement === "hero" && "text--highlighted"
              }`}
            >
              Home
            </p>
            <p
              className={`text ${
                dominantElement === "experience" && "text--highlighted"
              }`}
            >
              Experience
            </p>
            <p
              className={`text ${
                dominantElement === "education" && "text--highlighted"
              }`}
            >
              Education
            </p>
            <p
              className={`text ${
                dominantElement === "contacts" && "text--highlighted"
              }`}
            >
              Contacts
            </p>
          </nav>
          <div className="header__rightGroup">
            <div className="header__languages">
              <p className="text">en</p>
              <p className="text">ru</p>
              <p className="text">kg</p>
            </div>
            <div className="header__theme">
              <p className="text">dark</p>
              <p className="text">light</p>
            </div>
          </div>
        </div>
      </header>

      <header
        className={`header header--mobile ${
          mobileNav && "header--mobileVisible"
        }`}
      >
        <div className="header__menuButton" onClick={handleMenu}>
          <p className="header__menuButtonDecoration"></p>
        </div>

        <nav className="header__mobileNav">
          <p className="header__mobileNavItem text">Home</p>
          <p className="header__mobileNavItem text">Experience</p>
          <p className="header__mobileNavItem text">Education</p>
          <p className="header__mobileNavItem text">Contacts</p>
        </nav>
      </header>
    </>
  )
}
export default Header
