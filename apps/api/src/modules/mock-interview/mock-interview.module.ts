import { Module } from '@nestjs/common';
import { MockInterviewResolver } from './mock-interview.resolver';
import { MockInterviewService } from './mock-interview.service';

@Module({
  providers: [MockInterviewService, MockInterviewResolver],
})
export class MockInterviewModule {}
