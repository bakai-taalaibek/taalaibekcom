type TProps = {
  mainText: string
  timePeriod: string
  image: string
  urlText?: string
  url?: string
}

export const TextWithImageScreen = ({
  mainText,
  timePeriod,
  image,
  urlText,
  url,
}: TProps) => {
  return (
    <div className="textWithImage">
      <div className="textWithImage__center">
        <div className="textWithImage__textGroup">
          <div className="textWithImage__mainText">{mainText}</div>
          <div className="textWithImage__timePeriod">{timePeriod}</div>
        </div>
        <div className="textWithImage__imageGroup">
          <img
            className="textWithImage__image"
            src={image}
            alt="Illustration to text"
          />
          {url && <a href={url}>{urlText}</a>}
        </div>
      </div>
    </div>
  )
}
