import { Button } from '@nextui-org/button'
import { Card } from '@nextui-org/card'

import { useCreateArtwork } from '@/api/Artwork'

import './index.css'
import { useEffect } from 'react'

interface ComponentProps {
  scrollToForm: () => void
}

const Drafts = ({ scrollToForm }: ComponentProps) => {
  const { trigger, isMutating, data, error } = useCreateArtwork()

  useEffect(() => {
    console.log('data', data)
  }, [data])

  useEffect(() => {
    console.log('error', error)
  }, [error])

  const createArtwork = async () => {
    console.log('put artwork', await trigger())

    scrollToForm()
  }

  return (
    <div className='DraftsContainer'>
      <div className='Actions'>
        <Button onClick={createArtwork} isLoading={isMutating} fullWidth={true}>
          Create Artwork
        </Button>
      </div>
      <Card className='DraftsList'>
        <Card className='DraftsItem'></Card>
        <Card className='DraftsItem'></Card>
        <Card className='DraftsItem'></Card>
      </Card>
    </div>
  )
}

export { Drafts }
