import useSWR from 'swr'
import useSWRMutation, { MutationFetcher } from 'swr/mutation'

import { ObjectID } from '@/shared/Types'
import { Artwork, ArtworkLibraryEnum } from '@/shared/Artwork'

// TODO: move to .env
const baseUrl = 'http://localhost:22000'

const fetcher = (url: string) =>
  fetch(`${baseUrl}/${url}`, {}).then((res) => res.json())

const putArtwork: MutationFetcher<
  { data: Artwork },
  string,
  { library: ArtworkLibraryEnum }
> = async (url: string, args) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      library: args.arg.library
    })
  })

  // TODO: better error processing
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}

const useCreateArtwork = () =>
  useSWRMutation<
    { data: Artwork },
    any,
    string,
    { library: ArtworkLibraryEnum }
  >('artwork', putArtwork)

const useArtwork = (id: ObjectID) =>
  useSWR<{ data: Artwork }>(`artwork/${id}`, fetcher)

const useArtworks = () =>
  useSWR<{ data: Artwork[]; count: number }>('artwork', fetcher)

export { useCreateArtwork, useArtwork, useArtworks }
