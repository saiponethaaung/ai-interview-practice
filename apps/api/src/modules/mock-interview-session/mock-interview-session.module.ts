import { Module } from '@nestjs/common';
import { MockInterviewSessionResolver } from './mock-interview-session.resolver';
import { MockInterviewSessionService } from './mock-interview-session.service';

@Module({
  providers: [MockInterviewSessionResolver, MockInterviewSessionService],
})
export class MockInterviewSessionModule {}
