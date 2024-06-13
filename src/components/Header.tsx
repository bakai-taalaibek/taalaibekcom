import { useCallback, useEffect, useState } from "react"
import { isElementDominant } from "../lib/helpers"
import { useTranslation } from "react-i18next"
import { IconSun } from "../icons/IconSun"
import { IconMoon } from "../icons/IconMoon"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [dominantElement, setDominantElement] = useState<string | null>(null)
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState("theme--light")

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

  const toggleTheme = () => {
    if (theme === "theme--light") {
      document.getElementById("body")?.classList.add("theme--dark")
      setTheme("theme--dark")
    } else {
      document.getElementById("body")?.classList.remove("theme--dark")
      setTheme("theme--light")
    }
  }

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
              {t("Home")}
            </a>
            <a
              href="#experience"
              className={`text anchor ${
                dominantElement === "experience" && "anchor--highlighted"
              }`}
            >
              {t("Experience")}
            </a>
            <a
              href="#education"
              className={`text anchor ${
                dominantElement === "education" && "anchor--highlighted"
              }`}
            >
              {t("Education")}
            </a>
            <a
              href="#contacts"
              className={`text anchor ${
                dominantElement === "contacts" && "anchor--highlighted"
              }`}
            >
              {t("Contacts")}
            </a>
          </nav>
          <div className="header__rightGroup">
            <div className="header__languages">
              <button
                className={`{text languages__button ${
                  i18n.language === "en" && "languages__button--active"
                }`}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`{text languages__button ${
                  i18n.language === "ru" && "languages__button--active"
                }`}
                onClick={() => i18n.changeLanguage("ru")}
              >
                RU
              </button>
            </div>
            <div className="header__theme">
              <button
                onClick={() => toggleTheme()}
                className={`themeToggle ${
                  theme === "theme--dark" && "themeToggle--dark"
                }`}
              >
                <div
                  className={`themeToggle__circle ${
                    theme === "theme--dark" && "themeToggle__circle--dark"
                  }`}
                ></div>
                <IconSun
                  className={`lighter__sun ${
                    theme === "theme--dark" && "lighter__sun--hidden"
                  }`}
                  width="15px"
                />
                <IconMoon
                  className={`lighter__moon ${
                    theme === "theme--light" && "lighter__moon--hidden"
                  }`}
                  width="15px"
                />
              </button>
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

        <nav className="header__mobileNav" onClick={handleMenu}>
          <a
            href="#hero"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "hero" && "anchor--highlighted"
            }`}
          >
            {t("Home")}
          </a>
          <a
            href="#experience"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "experience" && "anchor--highlighted"
            }`}
          >
            {t("Experience")}
          </a>
          <a
            href="#education"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "education" && "anchor--highlighted"
            }`}
          >
            {t("Education")}
          </a>
          <a
            href="#contacts"
            className={`header__mobileNavItem text anchor ${
              dominantElement === "contacts" && "anchor--highlighted"
            }`}
          >
            {t("Contacts")}
          </a>
        </nav>
      </header>
    </>
  )
}
export default Header
