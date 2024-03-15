type TProps = {
  reverse?: boolean
  icons: JSX.Element[]
  isSliderActive: boolean
}
export const ColumnOfIcons = ({ reverse, icons, isSliderActive }: TProps) => {
  return (
    <div
      className={`column-of-icons animate-slider ${
        reverse && "animate-slider--reverse"
      } ${!isSliderActive && "animation-paused"}`}
    >
      {icons.map((item, index) => (
        <div key={index} className="column-of-icons column-of-icons__icon ">
          {item}
        </div>
      ))}
      {icons.map((item, index) => (
        <div key={index * 2} className="column-of-icons column-of-icons__icon ">
          {item}
        </div>
      ))}
    </div>
  )
}
