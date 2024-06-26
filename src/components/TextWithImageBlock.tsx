import { Gallery, Item } from "react-photoswipe-gallery"

const options = {
  zoom: false,
  secondaryZoomLevel: "fit" as const,
}

type TProps = {
  mainText: string
  timePeriod: string
  image: string
  tags?: string[]
  alt?: string
  url?: string
  isImageClickable?: boolean
}

export const TextWithImageScreen = ({
  mainText,
  timePeriod,
  image,
  tags,
  alt,
  url,
  isImageClickable,
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
        <a href={url} target="_blank" className="textWithImage__image">
          {isImageClickable ? (
            <Gallery id="rsk" options={options}>
              <Item
                original={image}
                thumbnail={image}
                width="1132"
                height="800"
              >
                {({ ref, open }) => (
                  <img
                    className="clickableImage__image"
                    alt={alt}
                    ref={ref}
                    onClick={open}
                    src={image}
                  />
                )}
              </Item>
            </Gallery>
          ) : (
            <img src={image} alt={alt} />
          )}
        </a>
      </div>
    </div>
  )
}
