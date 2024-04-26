import { TextWithImageScreen as TextWithImageBlock } from "./TextWithImageBlock"
import { useTranslation } from "react-i18next"

export const Experience = () => {
  const { t } = useTranslation()
  return (
    <article id="experience" className="experience">
      <div className="breadCrumb breadCrumb--experience">
        <div className="breadCrumb__content">{t("Experience")}</div>
      </div>
      <div className="breadCrumbFiller"></div>
      <TextWithImageBlock
        mainText={t("ExperienceFortylines")}
        timePeriod={t("PeriodFortylines")}
        image="/fortylines.jpeg"
        alt={t("AltFortylines")}
        url="https://fortylines.io/home"
        tags={["Next", "Typescript", "Chakra UI"]}
      />
      <TextWithImageBlock
        mainText={t("ExperienceDevsFactory")}
        timePeriod={t("PeriodDevsFactory")}
        image="/devsfactory.jpg"
        alt={t("AltDevsFactory")}
        url="https://www.instagram.com/devsfactorykg/"
        tags={["React", "Typescript", "SCSS"]}
      />
      <TextWithImageBlock
        mainText={t("ExperienceRsk")}
        timePeriod={t("PeriodRsk")}
        image="/rsk.jpg"
        tags={["React", "JavaScript", "Tailwind"]}
        isImageClickable={true}
      />
      <TextWithImageBlock
        mainText={t("ExperienceMakers")}
        timePeriod={t("PeriodMakers")}
        image="/makers.jpg"
        alt={t("AltMakers")}
        url="https://makers.kg/"
        tags={["React", "Node", "Express"]}
      />
      <TextWithImageBlock
        mainText={t("ExperienceNbkr")}
        timePeriod="2013 - 2023"
        image="/nbkr.jpg"
        alt={t("AltNbkr")}
        url="https://www.nbkr.kg/"
      />
    </article>
  )
}
