import useSWR from 'swr'

import { Token } from '@/shared/Token'
import { ObjectID } from '@/shared/Types'

// TODO: move to .env
const baseUrl = 'http://localhost:22000'

const fetcher = (url: string) =>
  fetch(`${baseUrl}/${url}`, {}).then((res) => res.json())

const useTokensList = () => useSWR<{ data: Token[] }>('token', fetcher)

const useToken = (id: ObjectID | undefined) =>
  useSWR<{ data: Token }>(id ? `token/${id}` : null, fetcher)

export { useToken, useTokensList }
