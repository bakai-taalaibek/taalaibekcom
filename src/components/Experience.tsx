import { TextWithImageScreen } from "./TextWithImageScreen"

export const Experience = () => {
  return (
    <article className="experience">
      <div className="experience__breadCrumb">Experience</div>
      <TextWithImageScreen
        mainText="As a Front-End developer at Fortylines IO, I create beautiful, responsive and snappy applications."
        timePeriod="since October 2023"
        image="/fortylines.jpeg"
        urlText="Fortylines home page"
        url="https://fortylines.io/home"
      />
      <TextWithImageScreen
        mainText="Developed an application for online recruiting service at DevsFactory."
        timePeriod="August - October 2023"
        image="/devsfactory.jpg"
        urlText="DevsFactory instagram page"
        url="https://www.instagram.com/devsfactorykg/"
      />
      <TextWithImageScreen
        mainText="Awarded 1st place in an internship hosted by RSK Bank Kyrgyzstan for developing an online queue system."
        timePeriod="June - July 2023"
        image="/devsfactory.jpg"
      />
      <TextWithImageScreen
        mainText="Developed Full-Stack applications on my own and as part of a team at Makers."
        timePeriod="March - May 2023"
        image="/makers.jpg"
        urlText="Makers home page"
        url="https://makers.kg/"
      />
    </article>
  )
}
