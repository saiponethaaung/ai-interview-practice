import { Global, Module } from '@nestjs/common';
import { AIService } from './ai.service';

// TODO: Implement AI Service methods and integrate with message queue if needed
@Global()
@Module({
  providers: [AIService],
  exports: [AIService],
})
export class AIModule {}
