type TProps = {
  src: string
  alt: string
}

export const ClickableImage = ({ src, alt }: TProps) => {
  return (
    <div className="clickableImage">
      <img className="clickableImage__image" src={src} alt={alt} />
    </div>
  )
}
