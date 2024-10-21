import { useEffect } from 'react'

import { useTokensList } from '@/api/Tokens'

import './index.css'

const TokensList = () => {
  const { data, error, isLoading } = useTokensList()

  useEffect(() => {
    if (!isLoading) {
      console.log('length', data?.data.length)

      console.log(
        data?.data.map((token: any) =>
          token.events.map((event: any) => event.event)
        )
      )
    }
  }, [data, isLoading])

  return (
    <div className='TokenListContainer'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}

      {/* TODO: typization */}
      {!isLoading && !error && (
        <>
          {data?.data.map((item) => (
            <div className='TokenItem' key={item.id}>
              <div className='Header'>
                <div className='Title'>{item.metadata.name}</div>
                <a
                  href={item.metadata.external_url}
                  target='_blank'
                  rel='no-follow'
                >
                  🔗
                </a>
              </div>
              <img src={item.metadata.image} alt={item.metadata.name} />
              {/* <video src={item.metadata.animation_url} controls={true} /> */}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export { TokensList }
