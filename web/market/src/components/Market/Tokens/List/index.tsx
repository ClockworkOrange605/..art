// import { PressEvent } from '@react-types/shared'

import { Image } from '@nextui-org/image'
import { Card, CardFooter } from '@nextui-org/card'

import { useTokensList } from '@/api/Tokens'

import { ObjectID } from '@/shared/Types'

import './index.css'

interface ComponentProps {
  openToken: (id: ObjectID) => void
}

const TokensList = ({ openToken }: ComponentProps) => {
  const { data, error, isLoading } = useTokensList()

  // const onPressTokenCardEventHandler = (event: PressEvent) => {
  //   console.log(event.target)
  //   // openToken()
  // }

  return (
    <div className='TokenListContainer'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}

      {!isLoading && !error && (
        <>
          {data?.data.map((item) => (
            <Card
              key={item.id}
              className='TokenItem'
              style={{ backgroundColor: `#${item.metadata.background_color}` }}
              onPress={() => openToken(item._id)}
              isHoverable
              isPressable
              isBlurred
              radius='lg'
            >
              <Image
                className='Image'
                src={item.metadata.image}
                alt={item.metadata.name}
              />
              <CardFooter className='Footer'>
                <div className='Title'>{item.metadata.name}</div>
                {/* <a
                  href={item.metadata.external_url}
                  target='_blank'
                  rel='no-follow'
                >
                  🔗
                </a> */}
              </CardFooter>
            </Card>
          ))}
        </>
      )}
    </div>
  )
}

export { TokensList }
