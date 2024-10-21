import { Address, ObjectID, URI } from './Types'

interface Contract {
  _id: ObjectID
  address: Address
  symbol: string
  name: string
  metadata_uri: URI
  metadata: ContractMetadata
}

interface ContractMetadata {
  name: string
  description: string
  image: URI
  external_link: URI
  // TODO: better royalty
  fee_recipient: Address
  seller_fee_basis_points: number
}

export { Contract }
