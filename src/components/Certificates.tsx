import { ClickableImage } from "./ClickableImage"

export const Certificates = () => {
  return (
    <div className="certificates">
      <p className="text">My Software Development certificates:</p>
      <div className="certificates__rowOfImages">
        <ClickableImage src="cs50.png" alt="CS50 certificate" />
        <ClickableImage src="fso.png" alt="Full-Stack Open certificate" />
      </div>
    </div>
  )
}
