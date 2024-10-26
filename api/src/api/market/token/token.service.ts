import { Model, ObjectId } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Token, TokenDocument } from 'src/common/entities'

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name)
    private readonly tokenModel: Model<Token>,
  ) {}

  async filter(): Promise<TokenDocument[]> {
    return this.tokenModel.find()
  }

  async getById(id: ObjectId): Promise<TokenDocument> {
    return this.tokenModel.findById(id)
  }
}
