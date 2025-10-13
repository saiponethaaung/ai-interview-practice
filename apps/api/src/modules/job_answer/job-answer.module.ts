import { Module } from '@nestjs/common';
import { JobAnswerResolver } from './job-answer.resolver';
import { JobAnswerService } from './job-answer.service';

@Module({
  providers: [JobAnswerResolver, JobAnswerService],
})
export class JobAnswerModule {}
