import { Controller, Get } from '@nestjs/common'
import { ContractService } from './contract.service'

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Get('all')
  async all() {
    return { contracts: await this.contractService.all() }
  }
}
