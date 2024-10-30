import { Model, ObjectId } from 'mongoose'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Artwork, ArtworkDocument } from 'src/common/entities/artwork.entity'

@Injectable()
export class ArtworkService {
  constructor(
    @InjectModel(Artwork.name)
    private readonly artworkModel: Model<Artwork>,
  ) {}

  async create(payload: Partial<Artwork>): Promise<ArtworkDocument> {
    return await this.artworkModel.create(payload)
  }

  async filter(): Promise<ArtworkDocument[]> {
    return this.artworkModel.find()
  }

  async getById(id: ObjectId): Promise<ArtworkDocument> {
    return this.artworkModel.findById(id)
  }
}
