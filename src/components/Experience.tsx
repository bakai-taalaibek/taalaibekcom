import { TextWithImageScreen } from "./TextWithImageBlock"

export const Experience = () => {
  return (
    <article className="experience">
      <div className="breadCrumb">
        <div className="breadCrumb__content">Experience</div>
      </div>
      <div className="breadCrumbFiller"></div>
      <TextWithImageScreen
        mainText="I create beautiful, responsive and snappy applications as a Front-End developer at Fortylines IO"
        timePeriod="since October 2023"
        image="/fortylines.jpeg"
        urlText="Fortylines home page"
        url="https://fortylines.io/home"
      />
      <TextWithImageScreen
        mainText="Developed an online recruiting service application at DevsFactory"
        timePeriod="August - October 2023"
        image="/devsfactory.jpg"
        urlText="DevsFactory instagram page"
        url="https://www.instagram.com/devsfactorykg/"
      />
      <TextWithImageScreen
        mainText="Awarded 1st place in an internship hosted by RSK Bank Kyrgyzstan for developing an online queue system"
        timePeriod="June - July 2023"
        image="/rsk.jpg"
      />
      <TextWithImageScreen
        mainText="Developed Full-Stack applications independently and collaboratively at internship hosted by Makers"
        timePeriod="March - May 2023"
        image="/makers.jpg"
        urlText="Makers home page"
        url="https://makers.kg/"
      />
    </article>
  )
}
