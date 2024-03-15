import { TextWithImageScreen } from "./TextWithImageScreen"

export const Experience = () => {
  return (
    <article className="experience">
      <div className="experience__breadCrumb">Experience</div>
      <TextWithImageScreen
        mainText="I work as a Front-End developer at Fortylines IO, creating beautiful, responsive and snappy applications."
        timePeriod="since October 2023"
        image="/fortylines.jpeg"
        urlText="Fortylines home page"
        url="https://fortylines.io/home"
      />
      <TextWithImageScreen
        mainText="I work as a Front-End developer at Fortylines IO, creating beautiful, responsive and snappy applications."
        timePeriod="since October 2023"
        image="/fortylines.jpeg"
        urlText="Fortylines home page"
        url="https://fortylines.io/home"
      />
    </article>
  )
}
