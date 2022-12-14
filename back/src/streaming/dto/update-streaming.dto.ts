import { CreateStreamingDto } from './create-streaming.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStreamingDto extends PartialType(CreateStreamingDto) {}
