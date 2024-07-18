import { Certificates } from "./Certificates"
import { TextWithImageScreen } from "./TextWithImageBlock"
import { useTranslation } from "react-i18next"

export const Education = () => {
  const { t } = useTranslation()
  return (
    <article id="education" className="education">
      <div className="breadCrumb breadCrumb--education">
        <div className="breadCrumb__content">{t("Education")}</div>
      </div>
      <TextWithImageScreen
        mainText={t("EducationKrsu")} 
        timePeriod="2007 - 2012"
        image="/krsu.jpg"
        alt={t("AltKrsu")}
        url="https://www.krsu.edu.kg/"
      />
      <Certificates />
    </article>
  )
}
