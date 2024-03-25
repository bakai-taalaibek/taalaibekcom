import { TextWithImageScreen } from "./TextWithImageBlock"

export const Education = () => {
  return (
    <article id="education" className="education">
      <div className="breadCrumb">
        <div className="breadCrumb__content">Education</div>
      </div>
      <TextWithImageScreen
        mainText="Graduated with distinction
        from Kyrgyz-Russian Slavic
        University, Faculty of
        Economics"
        timePeriod="2017-2022"
        image="/krsu.jpg"
        urlText="KRSU homepage"
        url="https://www.krsu.edu.kg/"
      />
    </article>
  )
}
