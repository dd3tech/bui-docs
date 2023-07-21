export const splitArray = (array: any[], chunkSize: number) => {
  const partes = []
  for (let i = 0; i < array.length; i += chunkSize) {
    partes.push(array.slice(i, i + chunkSize))
  }
  return partes
}

export const isProd = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
