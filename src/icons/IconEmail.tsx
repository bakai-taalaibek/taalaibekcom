import { JSX } from "react/jsx-runtime"

export const IconEmail = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      height="100%"
      width="100%"
      {...props}
    >
      <path
        d="M45 7H3a3 3 0 00-3 3v28a3 3 0 003 3h42a3 3 0 003-3V10a3 3 0 00-3-3zm-.64 2L24 24.74 3.64 9zM2 37.59V10.26l15.41 11.91zM3.41 39L19 23.41l4.38 3.39a1 1 0 001.22 0l4.4-3.39L44.59 39zM46 37.59L30.59 22.17 46 10.26z"
        data-name="8-Email"
      ></path>
    </svg>
  )
}
