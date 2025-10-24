import { Field, ObjectType } from '@nestjs/graphql';
import { MockInterviewSessionQuestion } from 'generated/prisma';

@ObjectType()
export class MockInterviewSessionQuestionsConversation {
  @Field()
  role: 'system' | 'user' | 'assistant';

  @Field()
  content: string;
}

@ObjectType()
class ScoreAnalysis {
  @Field()
  score: string;

  @Field()
  feedback: string;

  @Field()
  example: string;

  @Field({ nullable: true })
  highlights?: string;
}

@ObjectType()
class Scores {
  @Field(() => ScoreAnalysis)
  correctness: ScoreAnalysis;

  @Field(() => ScoreAnalysis)
  relevance: ScoreAnalysis;

  @Field(() => ScoreAnalysis)
  depth: ScoreAnalysis;

  @Field(() => ScoreAnalysis)
  structure: ScoreAnalysis;

  @Field(() => ScoreAnalysis)
  clarity: ScoreAnalysis;

  @Field(() => ScoreAnalysis)
  tone: ScoreAnalysis;

  @Field(() => ScoreAnalysis)
  confidence: ScoreAnalysis;
}

@ObjectType()
export class MockInterviewSessionQuestionAnalysis {
  @Field()
  overview: string;

  @Field()
  strengths: string;

  @Field()
  improvements: string;

  @Field()
  averageScore: number;

  @Field()
  scores: Scores;
}

@ObjectType()
export class MockInterviewSessionQuestionResponse {
  constructor(partial?: Partial<MockInterviewSessionQuestion>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }

  @Field()
  id: string;

  @Field()
  question: string;

  @Field()
  type:
    | 'BEHAVIORAL'
    | 'TECHNICAL'
    | 'SITUATIONAL'
    | 'PERSONAL'
    | 'COMPANY_SPECIFIC'
    | 'ROLE_SPECIFIC'
    | 'MIXED';

  @Field(() => [MockInterviewSessionQuestionsConversation])
  conversations: MockInterviewSessionQuestionsConversation[];

  @Field({ nullable: true })
  startTime?: Date;

  @Field({ nullable: true })
  endTime?: Date;

  @Field(() => MockInterviewSessionQuestionAnalysis, { nullable: true })
  analysis?: MockInterviewSessionQuestionAnalysis;

  @Field()
  mockInterviewSessionId: string;
}
