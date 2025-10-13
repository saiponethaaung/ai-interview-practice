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

export type Mutation = {
  __typename?: 'Mutation';
  askQuestion: JobAnswerResponse;
  createJob: JobResponse;
  createUploadFile: CreateFileResponse;
  generateCoverLetter: JobAnswerResponse;
};


export type MutationAskQuestionArgs = {
  input: AskQuestionJobAnswerRequest;
};


export type MutationCreateJobArgs = {
  input: CreateJobRequest;
};


export type MutationCreateUploadFileArgs = {
  createFileRequest: CreateFileRequest;
};


export type MutationGenerateCoverLetterArgs = {
  input: GenerateCoverLetterRequest;
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
  job?: Maybe<JobResponse>;
  jobs: Array<JobResponse>;
};


export type QueryGetFilesArgs = {
  getFilesRequest: GetFilesRequest;
};


export type QueryGetJobAnswersArgs = {
  input: GetJobAnswersRequest;
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


export const CreateUploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createFileRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFileRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFileRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createFileRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUploadFileMutation, CreateUploadFileMutationVariables>;
export const GetFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getFilesRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetFilesRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getFilesRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getFilesRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"resume"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"certifications"}},{"kind":"Field","name":{"kind":"Name","value":"languages"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"education"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"fieldOfStudy"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<GetFilesQuery, GetFilesQueryVariables>;
export const AskQuestionJobAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AskQuestionJobAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AskQuestionJobAnswerRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"askQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AskQuestionJobAnswerMutation, AskQuestionJobAnswerMutationVariables>;
export const GenerateCoverLetterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateCoverLetter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenerateCoverLetterRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateCoverLetter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GenerateCoverLetterMutation, GenerateCoverLetterMutationVariables>;
export const GetJobAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getJobAnswers"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetJobAnswersRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getJobAnswers"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"jobId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"chats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetJobAnswersQuery, GetJobAnswersQueryVariables>;
export const CreateJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createJobRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateJobRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createJobRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mandatory"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"technical"}}]}}]}}]}}]} as unknown as DocumentNode<CreateJobMutation, CreateJobMutationVariables>;
export const GetJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getJob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetJobRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"GetJobRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getJob"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mandatory"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"technical"}}]}}]}}]}}]} as unknown as DocumentNode<GetJobQuery, GetJobQueryVariables>;
export const GetJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetJobs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getJobsRequest"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetJobsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"GetJobsRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getJobsRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mandatory"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"technical"}}]}}]}}]}}]} as unknown as DocumentNode<GetJobsQuery, GetJobsQueryVariables>;