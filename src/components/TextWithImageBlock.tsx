type TProps = {
  mainText: string
  timePeriod: string
  image: string
  tags?: string[]
  urlText?: string
  url?: string
}

export const TextWithImageScreen = ({
  mainText,
  timePeriod,
  image,
  tags,
  urlText,
  url,
}: TProps) => {
  return (
    <div className="textWithImage">
      <div className="textWithImage__center">
        <div className="textWithImage__textGroup">
          <div className="textWithImage__mainText">{mainText}</div>
          {tags && (
            <div className="textWithImage__tags">
              {tags.map((item, index) => (
                <>
                  <span>{item}</span>
                  {index !== tags.length - 1 && <span> &#x2022; </span>}
                </>
              ))}
            </div>
          )}
          <div className="textWithImage__timePeriod">{timePeriod}</div>
        </div>
        <a href={url} className="textWithImage__image">
          <img src={image} alt={urlText} />
        </a>
      </div>
    </div>
  )
}
