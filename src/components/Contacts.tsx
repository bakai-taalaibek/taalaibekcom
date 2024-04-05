import { IconEmail } from "../icons/IconEmail"
import { IconLinkedIn } from "../icons/IconLinkedIn"
import { IconPhone } from "../icons/IconPhone"
import { IconTelegram } from "../icons/IconTelegram"

export const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="contacts__upper"></div>
      <div className="contacts__lower"></div>
      <div className="contacts__centered columns__container">
        <div className="columns__column">
          <p className="contacts__title">Feel free to contact me:</p>
          <div className="contactEntries">
            <div className="hstack hstack--vcentered">
              <IconEmail width="15px" height="max-content" />
              <a className="link" href="mailto:bakai.pochta@gmail.com">
                bakai.pochta@gmail.com
              </a>
            </div>
            <div className="hstack hstack--vcentered">
              <IconPhone width="15px" height="max-content" />
              <a className="link" href="https://wa.me/996500391990">
                +996 500 391990
              </a>
            </div>
            <div className="hstack hstack--vcentered">
              <IconTelegram width="15px" height="max-content" />
              <a className="link" href="https://t.me/bakai_abc">
                t.me/bakai_abc
              </a>
            </div>
            <div className="hstack hstack--vcentered">
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
          <p className="contacts__title">Or leave a comment below:</p>
          <p>form</p>
        </div>
      </div>
    </div>
  )
}
