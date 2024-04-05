import { JSX } from "react/jsx-runtime"

export const IconPhone = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="100%"
      width="100%"
      {...props}
    >
      <path d="M5 16h6a2 2 0 002-2V2a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM4 2h8v12H4V2z"></path>
    </svg>
  )
}
