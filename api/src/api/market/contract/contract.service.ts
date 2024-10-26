import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Contract, ContractDocument } from 'src/common/entities'

@Injectable()
export class ContractService {
  constructor(
    @InjectModel(Contract.name)
    private readonly contractModel: Model<Contract>,
  ) {}

  async all(): Promise<ContractDocument[]> {
    return this.contractModel.find()
  }
}
