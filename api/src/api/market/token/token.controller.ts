import { Controller, Get, Param } from '@nestjs/common'
import { TokenService } from './token.service'
import { ObjectId } from 'mongoose'

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  // TODO: add filters/pagination
  async filter() {
    return { data: await this.tokenService.filter() }
  }

  @Get(':id')
  // TODO: better validation
  async getById(@Param('id') id: ObjectId) {
    return { data: await this.tokenService.getById(id) }
  }
}
