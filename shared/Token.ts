import {
  Address,
  BigNumber,
  BlockHash,
  HexColor,
  ObjectID,
  TransactionHash,
  URI
} from './Types'

interface Token {
  _id: ObjectID
  id: BigNumber
  contract: Address
  owner: Address
  approved: Address
  metadata_uri: URI
  metadata: TokenMetadata
  events: TokenEvent[]
}

interface TokenMetadata {
  name: string
  image: URI
  external_url: URI
  description: string
  background_color: HexColor
  animation_url: URI
  attributes: TokenMetadataAttributte[]
}

type TokenMetadataAttributteDisplayType = 'number'
type TokenMetadataAttributteTraitType =
  | 'Type'
  | 'Artist'
  | 'Edition Number'
  | 'Rarity'
  | 'Medium'
  | 'Year Published'
  | 'Original Resolution'

interface TokenMetadataAttributte {
  display_type?: TokenMetadataAttributteDisplayType
  trait_type: TokenMetadataAttributteTraitType
  value: number | string
  max_value?: any
}

type TokenEventType = 'Transfer' | 'Approval'
// type TokenEventType = "Transfer" | "Approval" | "ApprovalForAll"

interface TokenEvent {
  index: number
  event: TokenEventType
  isRemoved: boolean
  transaction: TokenEventTransaction
  payload: TokenEventPayload
}

interface TokenEventTransaction {
  index: number
  hash: TransactionHash
  block: {
    index: number
    hash: BlockHash
  }
}

interface TokenEventPayload {
  tokenId: BigNumber
  from: Address
  to: Address
  __length__: number
  '0': Address
  '1': Address
  '2': BigNumber
}

export { Token }
