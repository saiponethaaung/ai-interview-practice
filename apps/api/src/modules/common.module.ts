import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { JobModule } from './job/job.module';
import { JobAnswerModule } from './job-answer/job-answer.module';
import { MockInterviewModule } from './mock-interview/mock-interview.module';
import { MockInterviewSessionModule } from './mock-interview-session/mock-interview-session.module';
import { MockInterviewSessionQuestionModule } from './mock-interview-session-question/mock-interview-session-question.module';

@Module({
  imports: [
    FileModule,
    JobModule,
    JobAnswerModule,
    MockInterviewModule,
    MockInterviewSessionModule,
    MockInterviewSessionQuestionModule,
  ],
})
export class CommonModule {}
