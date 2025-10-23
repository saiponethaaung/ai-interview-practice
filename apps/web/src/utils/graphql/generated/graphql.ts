/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AnswerMockInterviewSessionQuestionRequest = {
  answer: Scalars['String']['input'];
  mockInterviewSessionQuestionId: Scalars['String']['input'];
};

export type AskQuestionJobAnswerRequest = {
  jobId: Scalars['String']['input'];
  question: Scalars['String']['input'];
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  content: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type CreateFileRequest = {
  filename: Scalars['String']['input'];
  mime: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};

export type CreateFileResponse = {
  __typename?: 'CreateFileResponse';
  file: FileResponse;
  url: Scalars['String']['output'];
};

export type CreateJobRequest = {
  company: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  link: Scalars['String']['input'];
  resumeFileId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMockInterviewRequest = {
  difficulty: Scalars['String']['input'];
  globalPrompt?: InputMaybe<Scalars['String']['input']>;
  jobId: Scalars['String']['input'];
  questionType: Scalars['String']['input'];
  stage: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateMockInterviewSessionRequest = {
  mockInterviewId: Scalars['String']['input'];
  numberOfQuestions?: InputMaybe<Scalars['Float']['input']>;
  skillsFocus?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EndMockInterviewSessionRequest = {
  mockInterviewSessionId: Scalars['String']['input'];
};

export type FilePaginatedResponse = {
  __typename?: 'FilePaginatedResponse';
  data: Array<FileResponse>;
  pagination: PaginationResponse;
};

export type FileResponse = {
  __typename?: 'FileResponse';
  createdAt: Scalars['DateTime']['output'];
  errorMessage?: Maybe<Scalars['String']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resume?: Maybe<ResumeResponse>;
  size: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type GenerateCoverLetterRequest = {
  jobId: Scalars['String']['input'];
};

export type GetFilesRequest = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
};

export type GetJobAnswersRequest = {
  jobId: Scalars['String']['input'];
};

export type GetJobRequest = {
  id: Scalars['String']['input'];
};

export type GetJobsRequest = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetMockInterviewRequest = {
  id: Scalars['String']['input'];
};

export type GetMockInterviewSessionQuestionRequest = {
  mockInterviewSessionId: Scalars['String']['input'];
};

export type GetMockInterviewSessionRequest = {
  id: Scalars['String']['input'];
};

export type GetMockInterviewSessionsRequest = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  mockInterviewId: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Float']['input']>;
};

export type GetMockInterviewsRequest = {
  difficulty?: InputMaybe<Scalars['String']['input']>;
  jobId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  questionType?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type JobAnswerResponse = {
  __typename?: 'JobAnswerResponse';
  content: JobContent;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  jobId: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type JobContent = {
  __typename?: 'JobContent';
  chats: Array<ChatMessage>;
  content: Scalars['String']['output'];
};

export type JobResponse = {
  __typename?: 'JobResponse';
  company?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  skills: Array<Skill>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MockInterviewPaginatedResponse = {
  __typename?: 'MockInterviewPaginatedResponse';
  data: Array<MockInterviewResponse>;
  pagination: PaginationResponse;
};

export type MockInterviewResponse = {
  __typename?: 'MockInterviewResponse';
  createdAt: Scalars['DateTime']['output'];
  difficulty: Scalars['String']['output'];
  globalPrompt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  jobId: Scalars['String']['output'];
  questionType: Scalars['String']['output'];
  stage: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MockInterviewSessionPaginatedResponse = {
  __typename?: 'MockInterviewSessionPaginatedResponse';
  data: Array<MockInterviewSessionResponse>;
  pagination: PaginationResponse;
};

export type MockInterviewSessionQuestionResponse = {
  __typename?: 'MockInterviewSessionQuestionResponse';
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  mockInterviewSessionId: Scalars['String']['output'];
  question: Scalars['String']['output'];
  startTime?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
};

export type MockInterviewSessionResponse = {
  __typename?: 'MockInterviewSessionResponse';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  mockInterviewId: Scalars['String']['output'];
  numberOfQuestions: Scalars['Float']['output'];
  skillFocus: Scalars['Boolean']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  answerMockInterviewSessionQuestion: Scalars['Boolean']['output'];
  askQuestion: JobAnswerResponse;
  createJob: JobResponse;
  createMockInterview: MockInterviewResponse;
  createMockInterviewSession: MockInterviewSessionResponse;
  createUploadFile: CreateFileResponse;
  endMockInterviewSession: Scalars['Boolean']['output'];
  generateCoverLetter: JobAnswerResponse;
  startMockInterviewSession: Scalars['Boolean']['output'];
  startMockInterviewSessionQuestion: Scalars['Boolean']['output'];
};


export type MutationAnswerMockInterviewSessionQuestionArgs = {
  input: AnswerMockInterviewSessionQuestionRequest;
};


export type MutationAskQuestionArgs = {
  input: AskQuestionJobAnswerRequest;
};


export type MutationCreateJobArgs = {
  input: CreateJobRequest;
};


export type MutationCreateMockInterviewArgs = {
  input: CreateMockInterviewRequest;
};


export type MutationCreateMockInterviewSessionArgs = {
  input: CreateMockInterviewSessionRequest;
};


export type MutationCreateUploadFileArgs = {
  createFileRequest: CreateFileRequest;
};


export type MutationEndMockInterviewSessionArgs = {
  input: EndMockInterviewSessionRequest;
};


export type MutationGenerateCoverLetterArgs = {
  input: GenerateCoverLetterRequest;
};


export type MutationStartMockInterviewSessionArgs = {
  input: StartMockInterviewSessionRequest;
};


export type MutationStartMockInterviewSessionQuestionArgs = {
  input: StartMockInterviewSessionQuestionRequest;
};

export type PaginationResponse = {
  __typename?: 'PaginationResponse';
  limit: Scalars['Float']['output'];
  page: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getFiles: FilePaginatedResponse;
  getJobAnswers: Array<JobAnswerResponse>;
  getMockInterviewById: MockInterviewResponse;
  getMockInterviewSessionById: MockInterviewSessionResponse;
  getMockInterviewSessionQuestions: Array<MockInterviewSessionQuestionResponse>;
  getMockInterviewSessions: MockInterviewSessionPaginatedResponse;
  getMockInterviews: MockInterviewPaginatedResponse;
  job?: Maybe<JobResponse>;
  jobs: Array<JobResponse>;
};


export type QueryGetFilesArgs = {
  getFilesRequest: GetFilesRequest;
};


export type QueryGetJobAnswersArgs = {
  input: GetJobAnswersRequest;
};


export type QueryGetMockInterviewByIdArgs = {
  input: GetMockInterviewRequest;
};


export type QueryGetMockInterviewSessionByIdArgs = {
  input: GetMockInterviewSessionRequest;
};


export type QueryGetMockInterviewSessionQuestionsArgs = {
  input: GetMockInterviewSessionQuestionRequest;
};


export type QueryGetMockInterviewSessionsArgs = {
  input: GetMockInterviewSessionsRequest;
};


export type QueryGetMockInterviewsArgs = {
  input: GetMockInterviewsRequest;
};


export type QueryJobArgs = {
  GetJobRequest: GetJobRequest;
};


export type QueryJobsArgs = {
  GetJobsRequest: GetJobsRequest;
};

export type ResumeEducation = {
  __typename?: 'ResumeEducation';
  degree?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  fieldOfStudy?: Maybe<Scalars['String']['output']>;
  institution?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
};

export type ResumeExperience = {
  __typename?: 'ResumeExperience';
  company?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
};

export type ResumeResponse = {
  __typename?: 'ResumeResponse';
  address?: Maybe<Scalars['String']['output']>;
  certifications?: Maybe<Array<Scalars['String']['output']>>;
  education?: Maybe<Array<ResumeEducation>>;
  email?: Maybe<Scalars['String']['output']>;
  experience?: Maybe<Array<ResumeExperience>>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Scalars['String']['output']>>;
  summary?: Maybe<Scalars['String']['output']>;
};

export type Skill = {
  __typename?: 'Skill';
  analysis?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  mandatory: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  technical: Scalars['Boolean']['output'];
};

export type StartMockInterviewSessionQuestionRequest = {
  mockInterviewSessionQuestionId: Scalars['String']['input'];
};

export type StartMockInterviewSessionRequest = {
  mockInterviewSessionId: Scalars['String']['input'];
};

export type CreateUploadFileMutationVariables = Exact<{
  createFileRequest: CreateFileRequest;
}>;


export type CreateUploadFileMutation = { __typename?: 'Mutation', createUploadFile: { __typename?: 'CreateFileResponse', url: string, file: { __typename?: 'FileResponse', createdAt: any, errorMessage?: string | null, id: string, mime: string, name: string, size: number, status: string, type: string, updatedAt: any } } };

export type GetFilesQueryVariables = Exact<{
  getFilesRequest: GetFilesRequest;
}>;


export type GetFilesQuery = { __typename?: 'Query', getFiles: { __typename?: 'FilePaginatedResponse', data: Array<{ __typename?: 'FileResponse', createdAt: any, errorMessage?: string | null, id: string, url: string, mime: string, name: string, filename: string, size: number, status: string, type: string, updatedAt: any, resume?: { __typename?: 'ResumeResponse', fullName?: string | null, firstName?: string | null, middleName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, address?: string | null, skills?: Array<string> | null, certifications?: Array<string> | null, languages?: Array<string> | null, summary?: string | null, education?: Array<{ __typename?: 'ResumeEducation', institution?: string | null, degree?: string | null, fieldOfStudy?: string | null, startDate?: string | null, endDate?: string | null, description?: string | null }> | null, experience?: Array<{ __typename?: 'ResumeExperience', company?: string | null, position?: string | null, startDate?: string | null, endDate?: string | null, description?: string | null }> | null } | null }>, pagination: { __typename?: 'PaginationResponse', limit: number, page: number, total: number, totalPages: number } } };

export type AskQuestionJobAnswerMutationVariables = Exact<{
  input: AskQuestionJobAnswerRequest;
}>;


export type AskQuestionJobAnswerMutation = { __typename?: 'Mutation', askQuestion: { __typename?: 'JobAnswerResponse', createdAt: any, id: string, jobId: string, question?: string | null, type: string, updatedAt: any, content: { __typename?: 'JobContent', content: string, chats: Array<{ __typename?: 'ChatMessage', content: string, role: string }> } } };

export type GenerateCoverLetterMutationVariables = Exact<{
  input: GenerateCoverLetterRequest;
}>;


export type GenerateCoverLetterMutation = { __typename?: 'Mutation', generateCoverLetter: { __typename?: 'JobAnswerResponse', createdAt: any, id: string, question?: string | null, jobId: string, type: string, updatedAt: any, content: { __typename?: 'JobContent', content: string, chats: Array<{ __typename?: 'ChatMessage', content: string, role: string }> } } };

export type GetJobAnswersQueryVariables = Exact<{
  getJobAnswers: GetJobAnswersRequest;
}>;


export type GetJobAnswersQuery = { __typename?: 'Query', getJobAnswers: Array<{ __typename?: 'JobAnswerResponse', type: string, updatedAt: any, question?: string | null, jobId: string, id: string, createdAt: any, content: { __typename?: 'JobContent', content: string, chats: Array<{ __typename?: 'ChatMessage', content: string, role: string }> } }> };

export type CreateJobMutationVariables = Exact<{
  createJobRequest: CreateJobRequest;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob: { __typename?: 'JobResponse', createdAt: any, description?: string | null, id: string, link: string, status: string, title: string, updatedAt: any, company?: string | null, skills: Array<{ __typename?: 'Skill', description: string, mandatory: boolean, name: string, technical: boolean }> } };

export type GetJobQueryVariables = Exact<{
  getJob: GetJobRequest;
}>;


export type GetJobQuery = { __typename?: 'Query', job?: { __typename?: 'JobResponse', createdAt: any, description?: string | null, id: string, company?: string | null, link: string, status: string, title: string, updatedAt: any, skills: Array<{ __typename?: 'Skill', description: string, mandatory: boolean, name: string, technical: boolean }> } | null };

export type GetJobsQueryVariables = Exact<{
  getJobsRequest: GetJobsRequest;
}>;


export type GetJobsQuery = { __typename?: 'Query', jobs: Array<{ __typename?: 'JobResponse', createdAt: any, description?: string | null, id: string, company?: string | null, link: string, status: string, title: string, updatedAt: any, skills: Array<{ __typename?: 'Skill', description: string, mandatory: boolean, name: string, technical: boolean }> }> };

export type AnswerMockInterviewSessionQuestionMutationVariables = Exact<{
  input: AnswerMockInterviewSessionQuestionRequest;
}>;


export type AnswerMockInterviewSessionQuestionMutation = { __typename?: 'Mutation', answerMockInterviewSessionQuestion: boolean };

export type GetMockInterviewSessionQuestionsQueryVariables = Exact<{
  input: GetMockInterviewSessionQuestionRequest;
}>;


export type GetMockInterviewSessionQuestionsQuery = { __typename?: 'Query', getMockInterviewSessionQuestions: Array<{ __typename?: 'MockInterviewSessionQuestionResponse', endTime?: any | null, id: string, mockInterviewSessionId: string, question: string, startTime?: any | null, type: string }> };

export type StartMockInterviewSessionQuestionMutationVariables = Exact<{
  input: StartMockInterviewSessionQuestionRequest;
}>;


export type StartMockInterviewSessionQuestionMutation = { __typename?: 'Mutation', startMockInterviewSessionQuestion: boolean };

export type CreateMockInterviewSessionMutationVariables = Exact<{
  input: CreateMockInterviewSessionRequest;
}>;


export type CreateMockInterviewSessionMutation = { __typename?: 'Mutation', createMockInterviewSession: { __typename?: 'MockInterviewSessionResponse', createdAt: any, id: string, mockInterviewId: string, numberOfQuestions: number, skillFocus: boolean, updatedAt: any, isCompleted: boolean, startedAt?: any | null, completedAt?: any | null } };

export type EndMockInterviewSessionMutationVariables = Exact<{
  input: EndMockInterviewSessionRequest;
}>;


export type EndMockInterviewSessionMutation = { __typename?: 'Mutation', endMockInterviewSession: boolean };

export type GetMockInterviewSessionByIdQueryVariables = Exact<{
  input: GetMockInterviewSessionRequest;
}>;


export type GetMockInterviewSessionByIdQuery = { __typename?: 'Query', getMockInterviewSessionById: { __typename?: 'MockInterviewSessionResponse', createdAt: any, id: string, mockInterviewId: string, numberOfQuestions: number, skillFocus: boolean, updatedAt: any, isCompleted: boolean, startedAt?: any | null, completedAt?: any | null } };

export type GetMockInterviewSessionsQueryVariables = Exact<{
  input: GetMockInterviewSessionsRequest;
}>;


export type GetMockInterviewSessionsQuery = { __typename?: 'Query', getMockInterviewSessions: { __typename?: 'MockInterviewSessionPaginatedResponse', data: Array<{ __typename?: 'MockInterviewSessionResponse', createdAt: any, id: string, mockInterviewId: string, numberOfQuestions: number, skillFocus: boolean, updatedAt: any, isCompleted: boolean, startedAt?: any | null, completedAt?: any | null }>, pagination: { __typename?: 'PaginationResponse', limit: number, page: number, total: number, totalPages: number } } };

export type StartMockInterviewSessionMutationVariables = Exact<{
  input: StartMockInterviewSessionRequest;
}>;


export type StartMockInterviewSessionMutation = { __typename?: 'Mutation', startMockInterviewSession: boolean };

export type CreateMockInterviewMutationVariables = Exact<{
  input: CreateMockInterviewRequest;
}>;


export type CreateMockInterviewMutation = { __typename?: 'Mutation', createMockInterview: { __typename?: 'MockInterviewResponse', createdAt: any, difficulty: string, globalPrompt?: string | null, id: string, jobId: string, questionType: string, stage: string, type: string, updatedAt: any } };

export type GetMockInterviewByIdQueryVariables = Exact<{
  input: GetMockInterviewRequest;
}>;


export type GetMockInterviewByIdQuery = { __typename?: 'Query', getMockInterviewById: { __typename?: 'MockInterviewResponse', createdAt: any, difficulty: string, globalPrompt?: string | null, id: string, jobId: string, questionType: string, stage: string, type: string, updatedAt: any } };

export type GetMockInterviewsQueryVariables = Exact<{
  input: GetMockInterviewsRequest;
}>;


export type GetMockInterviewsQuery = { __typename?: 'Query', getMockInterviews: { __typename?: 'MockInterviewPaginatedResponse', data: Array<{ __typename?: 'MockInterviewResponse', createdAt: any, difficulty: string, globalPrompt?: string | null, id: string, jobId: string, questionType: string, stage: string, type: string, updatedAt: any }>, pagination: { __typename?: 'PaginationResponse', limit: number, page: number, total: number, totalPages: number } } };


export const CreateUploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createFileRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFileRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createFileRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUploadFileMutation, CreateUploadFileMutationVariables>;
export const GetFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getFilesRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetFilesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getFilesRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getFilesRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"resume"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"certifications"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"education"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOfStudy"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GetFilesQuery, GetFilesQueryVariables>;
export const AskQuestionJobAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AskQuestionJobAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AskQuestionJobAnswerRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"askQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AskQuestionJobAnswerMutation, AskQuestionJobAnswerMutationVariables>;
export const GenerateCoverLetterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateCoverLetter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenerateCoverLetterRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateCoverLetter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GenerateCoverLetterMutation, GenerateCoverLetterMutationVariables>;
export const GetJobAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getJobAnswers"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetJobAnswersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getJobAnswers"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetJobAnswersQuery, GetJobAnswersQueryVariables>;
export const CreateJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createJobRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateJobRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createJobRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mandatory"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"technical"}}]}}]}}]}}]} as unknown as DocumentNode<CreateJobMutation, CreateJobMutationVariables>;
export const GetJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getJob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetJobRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"GetJobRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getJob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mandatory"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"technical"}}]}}]}}]}}]} as unknown as DocumentNode<GetJobQuery, GetJobQueryVariables>;
export const GetJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getJobsRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetJobsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"GetJobsRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getJobsRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mandatory"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"technical"}}]}}]}}]}}]} as unknown as DocumentNode<GetJobsQuery, GetJobsQueryVariables>;
export const AnswerMockInterviewSessionQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnswerMockInterviewSessionQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnswerMockInterviewSessionQuestionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerMockInterviewSessionQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<AnswerMockInterviewSessionQuestionMutation, AnswerMockInterviewSessionQuestionMutationVariables>;
export const GetMockInterviewSessionQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMockInterviewSessionQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMockInterviewSessionQuestionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMockInterviewSessionQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mockInterviewSessionId"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GetMockInterviewSessionQuestionsQuery, GetMockInterviewSessionQuestionsQueryVariables>;
export const StartMockInterviewSessionQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartMockInterviewSessionQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StartMockInterviewSessionQuestionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startMockInterviewSessionQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<StartMockInterviewSessionQuestionMutation, StartMockInterviewSessionQuestionMutationVariables>;
export const CreateMockInterviewSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMockInterviewSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMockInterviewSessionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMockInterviewSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mockInterviewId"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"skillFocus"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}}]}}]}}]} as unknown as DocumentNode<CreateMockInterviewSessionMutation, CreateMockInterviewSessionMutationVariables>;
export const EndMockInterviewSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EndMockInterviewSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EndMockInterviewSessionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endMockInterviewSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<EndMockInterviewSessionMutation, EndMockInterviewSessionMutationVariables>;
export const GetMockInterviewSessionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMockInterviewSessionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMockInterviewSessionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMockInterviewSessionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mockInterviewId"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"skillFocus"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}}]}}]}}]} as unknown as DocumentNode<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables>;
export const GetMockInterviewSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMockInterviewSessions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMockInterviewSessionsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMockInterviewSessions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mockInterviewId"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"skillFocus"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables>;
export const StartMockInterviewSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartMockInterviewSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StartMockInterviewSessionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startMockInterviewSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<StartMockInterviewSessionMutation, StartMockInterviewSessionMutationVariables>;
export const CreateMockInterviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMockInterview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMockInterviewRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMockInterview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrompt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateMockInterviewMutation, CreateMockInterviewMutationVariables>;
export const GetMockInterviewByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMockInterviewById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMockInterviewRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMockInterviewById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrompt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables>;
export const GetMockInterviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMockInterviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMockInterviewsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMockInterviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"globalPrompt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GetMockInterviewsQuery, GetMockInterviewsQueryVariables>;