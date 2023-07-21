import { useEffect, useState } from 'react'

export const useGetWeeklyDownloads = (packageName = 'dd360-ds') => {
  const [downloads, setDownloads] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.npmjs.org/downloads/point/last-week/${packageName}`)
      .then((response) => response.json())
      .then((data) => setDownloads(data.downloads))
      .finally(() => setIsLoading(false))
  }, [packageName])

  return {
    weeklyDownloads: downloads,
    isLoading
  }
}
