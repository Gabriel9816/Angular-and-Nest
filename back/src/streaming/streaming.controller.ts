/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StreamingService } from './streaming.service';
import { CreateStreamingDto } from './dto/create-streaming.dto';
import { UpdateStreamingDto } from './dto/update-streaming.dto';

@Controller('streaming')
export class StreamingController {
  constructor(private readonly streamingService: StreamingService) {}

  @Post()
  create(@Body() createStreamingDto: CreateStreamingDto) {
    return this.streamingService.create(createStreamingDto);
  }

  @Get()
  findAll() {
    return this.streamingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.streamingService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streamingService.remove(id);
  }
}
