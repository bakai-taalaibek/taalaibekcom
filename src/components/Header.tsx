import { useCallback, useEffect, useState } from "react"
import { isElementDominant } from "../lib/helpers"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [dominantElement, setDominantElement] = useState<string | null>(null)
  const handleMenu = () => {
    setMobileNav(!mobileNav)
  }

  let hero: Element | null = null
  let experience: Element | null = null
  let education: Element | null = null
  let contacts: Element | null = null

  let timer: number | null = null
  useEffect(() => {
    hero = document.getElementById("hero")
    experience = document.getElementById("experience")
    education = document.getElementById("education")
    contacts = document.getElementById("contacts")
    window.addEventListener("scroll", () => {
      if (timer !== null) clearTimeout(timer)
      timer = setTimeout(isElementDominantMemo, 30)
    })
  }, [])

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

  return (
    <>
      <header className="header header--desktop">
        <div className="header__container">
          <nav className="header__nav">
            <a
              href="#hero"
              className={`text anchor ${
                dominantElement === "hero" && "anchor--highlighted"
              }`}
            >
              Home
            </a>
            <a
              href="#experience"
              className={`text anchor ${
                dominantElement === "experience" && "anchor--highlighted"
              }`}
            >
              Experience
            </a>
            <a
              href="#education"
              className={`text anchor ${
                dominantElement === "education" && "anchor--highlighted"
              }`}
            >
              Education
            </a>
            <a
              href="#contacts"
              className={`text anchor ${
                dominantElement === "contacts" && "anchor--highlighted"
              }`}
            >
              Contacts
            </a>
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
          <a
            href="#hero"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "hero" && "anchor--highlighted"
            }`}
          >
            Home
          </a>
          <a
            href="#experience"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "experience" && "anchor--highlighted"
            }`}
          >
            Experience
          </a>
          <a
            href="#education"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "education" && "anchor--highlighted"
            }`}
          >
            Education
          </a>
          <a
            href="#contacts"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "contacts" && "anchor--highlighted"
            }`}
          >
            Contacts
          </a>
          {/* <p className="header__mobileNavItem text">Home</p>
          <p className="header__mobileNavItem text">Experience</p>
          <p className="header__mobileNavItem text">Education</p>
          <p className="header__mobileNavItem text">Contacts</p> */}
        </nav>
      </header>
    </>
  )
}
export default Header
