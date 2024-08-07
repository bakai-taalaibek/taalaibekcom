const info = (...params: string[]) => {
  console.log(...params)
}

const error = (params: string[] | unknown) => {
  if (Array.isArray(params)) console.error(...params)
  else console.error(params)
}

const logger = {
  info,
  error,
}

export default logger
