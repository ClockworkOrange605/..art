import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, ObjectId, SchemaTypes } from 'mongoose'

type ContractDocument = HydratedDocument<Contract>

@Schema()
class Contract {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: ObjectId

  @Prop({ type: SchemaTypes.String, unique: true })
  address: string

  @Prop({ type: SchemaTypes.String })
  name: string

  @Prop({ type: SchemaTypes.String })
  symbol: string

  // TODO: describe properly
  @Prop({ type: SchemaTypes.Mixed })
  metadata: object

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date
}

const ContractSchema = SchemaFactory.createForClass(Contract)

export { Contract, ContractSchema, ContractDocument }
