import { useState } from "react"
import { IconEmail } from "../icons/IconEmail"
import { IconLinkedIn } from "../icons/IconLinkedIn"
import { IconPhone } from "../icons/IconPhone"
import { IconTelegram } from "../icons/IconTelegram"

export const Contacts = () => {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const submitComment = () => {
    alert(`${name}, ${comment}`)
    setName("")
    setComment("")
  }

  return (
    <div id="contacts" className="contacts">
      <div className="breadCrumb breadCrumb--contacts">
        <div className="breadCrumb__content">Contacts</div>
      </div>
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
          <div className="form">
            <p>Name</p>
            <input
              className="input mb-5"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <p>Comment</p>
            <textarea
              className="textarea mb-10"
              placeholder="Leave your comment here"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <button className="button" onClick={submitComment}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
