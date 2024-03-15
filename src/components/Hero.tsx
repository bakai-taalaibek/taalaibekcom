import { useState } from "react"
import { IconBash } from "../icons/IconBash"
import { IconCSS } from "../icons/IconCSS"
import { IconDocker } from "../icons/IconDocker"
import { IconExpress } from "../icons/IconExpress"
import { IconGit } from "../icons/IconGit"
import { IconHTML } from "../icons/IconHTML"
import { IconJS } from "../icons/IconJS"
import { IconMongodb } from "../icons/IconMongodb"
import { IconNext } from "../icons/IconNext"
import { IconNode } from "../icons/IconNode"
import { IconPostgres } from "../icons/IconPostgres"
import { IconReact } from "../icons/IconReact"
import { IconRedux } from "../icons/IconRedux"
import { IconSass } from "../icons/IconSass"
import { IconTS } from "../icons/IconTS"
import { IconTailwind } from "../icons/IconTailwind"
import { ColumnOfIcons } from "./ColumnOfIcons"

const rows = [
  [
    <IconExpress />,
    <IconPostgres color="#0277bd" />,
    <IconMongodb />,
    <IconGit color="#f05639" />,
  ],
  [
    <IconReact color="#5ed3f3" />,
    <IconNext color="black" />,
    <IconCSS />,
    <IconJS color="#efd81d" />,
  ],
  [
    <IconTS color="#2f74c0" />,
    <IconHTML />,
    <IconRedux color="#7a50be" />,
    <IconNode />,
  ],
  [
    <IconTailwind color="#3ebff8" />,
    <IconBash color="#2f363d" />,
    <IconSass color="#b95d8a" />,
    <IconDocker color="#2468ee" />,
  ],
]

const greetings = [
  "Բարեւ",
  "გამარჯობა",
  "Përshëndetje",
  "Salam",
  "Ahoj",
  "Szia",
  "Сәлеметсіз бе",
  "Саламатсызбы",
  "Sveiki",
  "Салом",
  "Merhaba",
  "Привіт",
  "Salom",
  "Здраво",
  "Alo",
  "Здравствуйте",
]

const colors = [
  "#e1b496",
  "#c1aa67",
  "#e1d2af",
  "#a0a5a0",
  "#b9d2c3",
  "#a3c0c0",
  "#ffd2b4",
  "#9edde8",
]

export const Hero = () => {
  const [isSliderActive, setIsSliderActive] = useState(true)
  const [isScrollerActive, setIsScrollerActive] = useState(true)
  let currentColor = 0

  const variateColors = () => {
    currentColor = currentColor + 1
    return colors[currentColor % colors.length]
  }

  return (
    <article className="hero">
      <div className="hero__main">
        <div className="introduction">
          <p>Hi!</p>
          <p>I am Bakai,</p>
          <p className="introduction--smaller">a Front-End developer</p>
          <button className="introduction__download-resume">
            Download resume
          </button>
        </div>

        <div
          className="rectangle"
          onClick={() => setIsSliderActive(!isSliderActive)}
        >
          <div className="rectangle__rotated-wrapper">
            {rows.map((item, index) => (
              <ColumnOfIcons
                isSliderActive={isSliderActive}
                key={index}
                icons={item}
                reverse={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`hero__greetings animate-scroller ${
          !isScrollerActive && "animation-paused"
        }`}
        onClick={() => setIsScrollerActive(!isScrollerActive)}
      >
        {greetings.map((item, index) => (
          <p key={index} style={{ color: variateColors() }}>
            {item}
          </p>
        ))}
        {greetings.map((item, index) => (
          <p key={index * 2} style={{ color: variateColors() }}>
            {item}
          </p>
        ))}
      </div>
    </article>
  )
}
