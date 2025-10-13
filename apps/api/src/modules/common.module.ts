import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { JobModule } from './job/job.module';
import { JobAnswerModule } from './job_answer/job-answer.module';

@Module({
  imports: [FileModule, JobModule, JobAnswerModule],
})
export class CommonModule {}
