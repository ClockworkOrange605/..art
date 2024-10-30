import { ObjectId } from 'mongoose'
import { Body, Controller, Get, Param, ParseEnumPipe, Put } from '@nestjs/common'
import { ArtworkService } from './artwork.service'
import { ArtworkLibraryEnum } from 'src/shared/Artwork'

@Controller('artwork')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Put()
  async create(
    @Body('library', new ParseEnumPipe(ArtworkLibraryEnum)) library: ArtworkLibraryEnum,
  ) {
    return { data: await this.artworkService.create({ library }) }
  }

  @Get()
  // TODO: add authorization
  async list() {
    return { data: await this.artworkService.filter() }
  }

  @Get(':id')
  // TODO: add authorization
  async getOne(
    // TODO: ParseObjectIDPipe
    @Param('id' /*ParseObjectIDPipe*/) id: ObjectId,
  ) {
    return { data: await this.artworkService.getById(id) }
  }
}
