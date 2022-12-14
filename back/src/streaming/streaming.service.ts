import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStreamingDto } from './dto/create-streaming.dto';
import { Streaming } from './entities/streaming.entity';

@Injectable()
export class StreamingService {
  constructor(
    @InjectRepository(Streaming)
    private streamingRepository: Repository<Streaming>,
  ) {}

  create(createStreamingDto: CreateStreamingDto) {
    return this.streamingRepository.save(createStreamingDto);
  }

  findAll() {
    return this.streamingRepository.find();
  }

  findOne(id: string) {
    return this.streamingRepository.findOneBy({ id });
  }

  remove(id: string) {
    return this.streamingRepository.delete(id);
  }
}
