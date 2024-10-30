import { HydratedDocument, ObjectId, SchemaTypes } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Address } from 'src/shared/Types'

type UserDocument = HydratedDocument<User>

@Schema()
class User {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: ObjectId

  @Prop({ type: SchemaTypes.String })
  address: Address

  // TODO: profile

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date
}

const UserSchema = SchemaFactory.createForClass(User)

export { User, UserSchema, UserDocument }
