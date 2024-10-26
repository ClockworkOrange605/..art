import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ContractController } from './market/contract/contract.controller'
import { ContractService } from './market/contract/contract.service'
import { TokenService } from './market/token/token.service'
import { TokenController } from './market/token/token.controller'
import { Contract, ContractSchema, Token, TokenSchema } from 'src/common/entities'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Contract.name, schema: ContractSchema },
      { name: Token.name, schema: TokenSchema },
    ]),
  ],
  controllers: [ContractController, TokenController],
  providers: [ContractService, TokenService],
  exports: [],
})
export class ApiModule {}
