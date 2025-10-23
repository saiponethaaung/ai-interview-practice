import { Module } from '@nestjs/common';
import { MockInterviewSessionQuestionResolver } from './mock-interview-session-question.resolver';
import { MockInterviewSessionQuestionService } from './mock-interview-session-question.service';

@Module({
  providers: [
    MockInterviewSessionQuestionService,
    MockInterviewSessionQuestionResolver,
  ],
})
export class MockInterviewSessionQuestionModule {}
