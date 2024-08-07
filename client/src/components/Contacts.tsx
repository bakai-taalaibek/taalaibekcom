import { useState } from "react"
import { IconEmail } from "../icons/IconEmail"
import { IconLinkedIn } from "../icons/IconLinkedIn"
import { IconPhone } from "../icons/IconPhone"
import { IconTelegram } from "../icons/IconTelegram"
import { useTranslation } from "react-i18next"
import { URL } from "../constants"

export const Contacts = () => {
  const { t } = useTranslation()

  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const submitComment = async () => {
    const response = await fetch(`${URL}/api/review`, {
      method: "POST",
      body: JSON.stringify({ name, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const responseBody = await response.json()

    setName("")
    setComment("")
    if (response.ok) {
      alert(t("ReviewRegistration") + " " + responseBody.rowNumber)
    } else {
      alert(t("ReviewError"))
    }
  }

  return (
    <div id="contacts" className="contacts">
      <div className="breadCrumb breadCrumb--contacts">
        <div className="breadCrumb__content">{t("Contacts")}</div>
      </div>
      <div className="contacts__upper"></div>
      <div className="contacts__lower">
        © {new Date().getFullYear()} Bakai Taalaibek uulu
      </div>
      <div className="contacts__centered columns__container">
        <div className="columns__column">
          <p className="contacts__title text">{t("ContactMe")}</p>
          <div className="contactEntries">
            <div className="text hstack hstack--vcentered">
              <IconEmail width="15px" height="max-content" />
              <a className="link" href="mailto:bakai.pochta@gmail.com">
                bakai.pochta@gmail.com
              </a>
            </div>
            <div className="text hstack hstack--vcentered">
              <IconPhone width="15px" height="max-content" />
              <a className="link" href="https://wa.me/996500391990">
                +996 500 391990
              </a>
            </div>
            <div className="text hstack hstack--vcentered">
              <IconTelegram width="15px" height="max-content" />
              <a className="link" href="https://t.me/bakai_abc">
                t.me/bakai_abc
              </a>
            </div>
            <div className="text hstack hstack--vcentered">
              <IconLinkedIn width="15px" height="max-content" />
              <a
                className="link"
                href="https://linkedin.com/in/bakai-taalaibek"
              >
                linkedin.com/in/bakai-taalaibek
              </a>
            </div>
          </div>
        </div>
        <div className="columns__column">
          <p className="text contacts__title">{t("LeaveComment")}</p>
          <div className="form">
            <p className="text">{t("Name")}</p>
            <input
              className="input mb-5"
              placeholder={t("YourName")}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <p className="text">{t("Comment")}</p>
            <textarea
              className="textarea mb-10"
              placeholder={t("YourComment")}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <button className="button" onClick={submitComment}>
              {t("Submit")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
