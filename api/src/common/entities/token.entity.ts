import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, ObjectId, SchemaTypes } from 'mongoose'

type TokenDocument = HydratedDocument<Token>

@Schema()
class Token {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: ObjectId

  @Prop({ type: SchemaTypes.String })
  contract: string

  @Prop({ type: SchemaTypes.String })
  id: string

  @Prop({ type: SchemaTypes.String })
  owner: string

  @Prop({ type: SchemaTypes.Mixed })
  metadata: {}

  @Prop({ type: SchemaTypes.Array })
  events: []

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date
}

const TokenSchema = SchemaFactory.createForClass(Token)

export { Token, TokenSchema, TokenDocument }
