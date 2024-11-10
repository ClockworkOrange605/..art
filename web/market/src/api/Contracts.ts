import useSWR from 'swr'

// TODO: move to .env
const baseUrl = 'http://localhost:22000'

const fetcher = (url: string) =>
  fetch(`${baseUrl}/${url}`, {}).then((res) => res.json())

const useContractsList = () => useSWR('contract/all', fetcher)

export { useContractsList }
