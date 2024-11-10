import { useToken } from '@/api/Tokens'

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/table'
import { Card } from '@nextui-org/card'
import { Image } from '@nextui-org/image'

import { ObjectID } from '@/shared/Types'

import './index.css'

const TokenItem = ({ tokenId }: { tokenId: ObjectID | undefined }) => {
  const { data, error, isLoading } = useToken(tokenId)

  return (
    <div className='TokenItemContainer'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}

      {!isLoading && data && (
        <Card
          className='TokenItemCard'
          style={{
            backgroundColor: `#${data?.data.metadata.background_color}`
          }}
        >
          <video
            src={data?.data.metadata.animation_url}
            controlsList='nodownload noplaybackrate'
            controls={true}
            autoPlay
            loop
          />

          <div className='Token'>
            <div>
              <Image
                className='TokenImage'
                src={data?.data.metadata.image}
                alt={data?.data.metadata.name}
              />

              <div className='TokenLinks'>
                <a
                  href={data?.data.metadata_uri}
                  target='_blank'
                  rel='no-follow'
                >
                  Metadata URI
                </a>
                <a
                  href={`https://etherscan.io/address/${data?.data.owner}`}
                  target='_blank'
                  rel='no-follow'
                >
                  {data?.data.owner}
                </a>
                <a
                  href={`https://etherscan.io/token/${data?.data.contract}`}
                  target='_blank'
                  rel='no-follow'
                >
                  {data?.data.contract}
                </a>
              </div>
            </div>

            <div>
              <div className='Title'>
                <h1>
                  {data?.data.metadata.name}
                  <a
                    href={data?.data.metadata.external_url}
                    target='_blank'
                    rel='no-follow'
                  >
                    🛸
                  </a>
                </h1>
              </div>

              <div className='Description'>
                {data?.data.metadata.description}
              </div>

              <div className='Events'>
                <Table>
                  <TableHeader>
                    <TableColumn>Block #</TableColumn>
                    <TableColumn>Block hash</TableColumn>
                    <TableColumn>Event </TableColumn>
                    <TableColumn>From</TableColumn>
                    <TableColumn>To</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {data?.data.events.map((event) => (
                      <TableRow key={event.index}>
                        <TableCell>{event.transaction.block.index}</TableCell>
                        <TableCell>{event.transaction.hash}</TableCell>
                        <TableCell>{event.event}</TableCell>
                        <TableCell>{event.payload.from ?? '-'}</TableCell>
                        <TableCell>{event.payload.to ?? '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

export { TokenItem }
