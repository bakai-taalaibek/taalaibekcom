import { TextWithImageScreen as TextWithImageBlock } from "./TextWithImageBlock"

export const Experience = () => {
  return (
    <article id="experience" className="experience">
      <div className="breadCrumb breadCrumb--experience">
        <div className="breadCrumb__content">Experience</div>
      </div>
      <div className="breadCrumbFiller"></div>
      <TextWithImageBlock
        mainText="I create beautiful, responsive and snappy applications as a Front-End developer at Fortylines IO"
        timePeriod="since October 2023"
        image="/fortylines.jpeg"
        urlText="Fortylines home page"
        url="https://fortylines.io/home"
        tags={["Next", "Typescript", "Chakra UI"]}
      />
      <TextWithImageBlock
        mainText="Developed an online recruiting service application at DevsFactory"
        timePeriod="August - October 2023"
        image="/devsfactory.jpg"
        urlText="DevsFactory instagram page"
        url="https://www.instagram.com/devsfactorykg/"
        tags={["React", "Typescript", "SCSS"]}
      />
      <TextWithImageBlock
        mainText="Awarded 1st place in an internship hosted by RSK Bank Kyrgyzstan for developing an online queue system"
        timePeriod="June - July 2023"
        image="/rsk.jpg"
        tags={["React", "JavaScript", "Tailwind"]}
      />
      <TextWithImageBlock
        mainText="Developed Full-Stack applications independently and collaboratively at an internship hosted by Makers"
        timePeriod="March - May 2023"
        image="/makers.jpg"
        urlText="Makers home page"
        url="https://makers.kg/"
        tags={["React", "Node", "Express"]}
      />
      <TextWithImageBlock
        mainText="Received a Certificate of Merit for special contributions to
        the National Bank of the Kyrgyz Republic as a Lead Analyst"
        timePeriod="2013 - 2023"
        image="/nbkr.jpg"
        urlText="National Bank home page"
        url="https://www.nbkr.kg/"
      />
    </article>
  )
}
