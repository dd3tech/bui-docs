import { useEffect, useState } from 'react'

export const useGetInfoRepository = (repositoryName = 'bui') => {
  const [info, setInfo] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.github.com/repos/dd3tech/${repositoryName}`)
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .finally(() => setIsLoading(false))
  }, [repositoryName])

  return {
    info,
    watchers: info?.watchers_count,
    isLoading
  }
}
