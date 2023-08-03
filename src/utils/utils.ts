export const splitArray = (array: any[], chunkSize: number) => {
  const partes = []
  for (let i = 0; i < array.length; i += chunkSize) {
    partes.push(array.slice(i, i + chunkSize))
  }
  return partes
}

export const getElements = (
  targetSearchElement: string,
  searchBy: 'name' | 'class' | 'tag'
): HTMLElement[] => {
  const assignedSearchMethod = {
    name: document?.getElementsByName(targetSearchElement),
    class: document?.getElementsByClassName(targetSearchElement),
    tag: document?.getElementsByTagName(targetSearchElement)
  }

  return Array.from(assignedSearchMethod[searchBy]) as HTMLElement[]
}

export const isProd = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
