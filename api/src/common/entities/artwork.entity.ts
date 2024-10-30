import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, ObjectId, SchemaTypes } from 'mongoose'

import { ArtworkLibraryEnum } from 'src/shared/Artwork'

type ArtworkDocument = HydratedDocument<Artwork>

@Schema()
class Artwork {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: ObjectId
  
  @Prop({ type: SchemaTypes.String, required: true })
  library: ArtworkLibraryEnum

  // @Prop({ type: SchemaTypes.String })
  // title: string

  // @Prop({ type: SchemaTypes.Mixed })
  // metadata: {}

  @Prop({ type: SchemaTypes.Date, default: new Date() })
  createdAt: Date

  @Prop({ type: SchemaTypes.Date, default: new Date() })
  updatedAt: Date
}

const ArtworkSchema = SchemaFactory.createForClass(Artwork)

export { Artwork, ArtworkSchema, ArtworkDocument }
