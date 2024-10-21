import useSWR from 'swr'

import { Token } from '@/shared/Token'

// TODO: move to .env
const baseUrl = 'http://localhost:22000'

const fetcher = (url: string) =>
  fetch(`${baseUrl}/${url}`, {}).then((res) => res.json())

const useTokensList = () => useSWR<{ data: Token[] }>('token', fetcher)

export { useTokensList }
