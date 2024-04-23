import { Gallery, Item } from "react-photoswipe-gallery"

const options = {
  zoom: false,
  secondaryZoomLevel: "fit" as const,
}

export const Certificates = () => {
  return (
    <div className="certificates">
      <p className="text">My certificates:</p>
      <div className="certificates__groupOfImages">
        <Gallery id="certificates" options={options}>
          <Item
            original="cs50.png"
            thumbnail="cs50.png"
            width="1132"
            height="800"
          >
            {({ ref, open }) => (
              <img
                className="clickableImage__image"
                alt="CS50 certificate"
                ref={ref}
                onClick={open}
                src="cs50.png"
              />
            )}
          </Item>
          <Item
            original="fso.png"
            thumbnail="fso.png"
            width="1132"
            height="800"
          >
            {({ ref, open }) => (
              <img
                className="clickableImage__image"
                alt="Full-Stack Open certificate"
                ref={ref}
                onClick={open}
                src="fso.png"
              />
            )}
          </Item>
        </Gallery>
      </div>
    </div>
  )
}
