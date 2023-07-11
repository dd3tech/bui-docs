export const splitArray = (array: any[], chunkSize: number) => {
  const partes = []
  for (let i = 0; i < array.length; i += chunkSize) {
    partes.push(array.slice(i, i + chunkSize))
  }
  return partes
}
