import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Streaming } from './streaming/entities/streaming.entity';
import { StreamingModule } from './streaming/streaming.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'admin',
      database: 'streaming',
      entities: [Streaming],
      synchronize: true,
      logging: true,
    }),
    StreamingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
