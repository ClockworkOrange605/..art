import { Module } from '@nestjs/common'
import { ApiModule } from './api/api.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    // TODO: move to config
    MongooseModule.forRoot(process.env.MONGO_URI, {
      // serverApi: "1",
      appName: process.env.HOSTNAME,
      dbName: process.env.MONGO_DB_NAME,
    }),
    ApiModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
