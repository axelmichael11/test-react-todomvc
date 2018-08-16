

export const log = (...args) =>
  process.env.__DEBUG__ ? console.log(...args) : undefined

export const logError = (...args) =>
  process.env.__DEBUG__ ? console.error(...args) : undefined
