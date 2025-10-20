import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
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

export type InterviewQuestions = {
  __typename?: 'InterviewQuestions';
  question: Scalars['String']['output'];
  type: Scalars['String']['output'];
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

export type MockInterviewSessionResponse = {
  __typename?: 'MockInterviewSessionResponse';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  mockInterviewId: Scalars['String']['output'];
  questions: Array<InterviewQuestions>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  askQuestion: JobAnswerResponse;
  createJob: JobResponse;
  createMockInterview: MockInterviewResponse;
  createMockInterviewSession: MockInterviewSessionResponse;
  createUploadFile: CreateFileResponse;
  generateCoverLetter: JobAnswerResponse;
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
  getMockInterviewById: MockInterviewResponse;
  getMockInterviewSessionById: MockInterviewSessionResponse;
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

export type CreateMockInterviewSessionMutationVariables = Exact<{
  input: CreateMockInterviewSessionRequest;
}>;


export type CreateMockInterviewSessionMutation = { __typename?: 'Mutation', createMockInterviewSession: { __typename?: 'MockInterviewSessionResponse', createdAt: any, id: string, mockInterviewId: string, updatedAt: any, questions: Array<{ __typename?: 'InterviewQuestions', question: string, type: string }> } };

export type GetMockInterviewSessionByIdQueryVariables = Exact<{
  input: GetMockInterviewSessionRequest;
}>;


export type GetMockInterviewSessionByIdQuery = { __typename?: 'Query', getMockInterviewSessionById: { __typename?: 'MockInterviewSessionResponse', createdAt: any, id: string, mockInterviewId: string, updatedAt: any, isCompleted: boolean, startedAt?: any | null, completedAt?: any | null, questions: Array<{ __typename?: 'InterviewQuestions', question: string, type: string }> } };

export type GetMockInterviewSessionsQueryVariables = Exact<{
  input: GetMockInterviewSessionsRequest;
}>;


export type GetMockInterviewSessionsQuery = { __typename?: 'Query', getMockInterviewSessions: { __typename?: 'MockInterviewSessionPaginatedResponse', data: Array<{ __typename?: 'MockInterviewSessionResponse', createdAt: any, id: string, mockInterviewId: string, updatedAt: any, isCompleted: boolean, startedAt?: any | null, completedAt?: any | null, questions: Array<{ __typename?: 'InterviewQuestions', question: string, type: string }> }>, pagination: { __typename?: 'PaginationResponse', limit: number, page: number, total: number, totalPages: number } } };

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


export const CreateUploadFileDocument = gql`
    mutation CreateUploadFile($createFileRequest: CreateFileRequest!) {
  createUploadFile(createFileRequest: $createFileRequest) {
    url
    file {
      createdAt
      errorMessage
      id
      mime
      name
      size
      status
      type
      updatedAt
    }
  }
}
    `;
export type CreateUploadFileMutationFn = Apollo.MutationFunction<CreateUploadFileMutation, CreateUploadFileMutationVariables>;

/**
 * __useCreateUploadFileMutation__
 *
 * To run a mutation, you first call `useCreateUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUploadFileMutation, { data, loading, error }] = useCreateUploadFileMutation({
 *   variables: {
 *      createFileRequest: // value for 'createFileRequest'
 *   },
 * });
 */
export function useCreateUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<CreateUploadFileMutation, CreateUploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUploadFileMutation, CreateUploadFileMutationVariables>(CreateUploadFileDocument, options);
      }
export type CreateUploadFileMutationHookResult = ReturnType<typeof useCreateUploadFileMutation>;
export type CreateUploadFileMutationResult = Apollo.MutationResult<CreateUploadFileMutation>;
export type CreateUploadFileMutationOptions = Apollo.BaseMutationOptions<CreateUploadFileMutation, CreateUploadFileMutationVariables>;
export const GetFilesDocument = gql`
    query GetFiles($getFilesRequest: GetFilesRequest!) {
  getFiles(getFilesRequest: $getFilesRequest) {
    data {
      createdAt
      errorMessage
      id
      url
      mime
      name
      filename
      resume {
        fullName
        firstName
        middleName
        lastName
        email
        phoneNumber
        address
        skills
        certifications
        languages
        summary
        education {
          institution
          degree
          fieldOfStudy
          startDate
          endDate
          description
        }
        experience {
          company
          position
          startDate
          endDate
          description
        }
      }
      size
      status
      type
      updatedAt
    }
    pagination {
      limit
      page
      total
      totalPages
    }
  }
}
    `;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *      getFilesRequest: // value for 'getFilesRequest'
 *   },
 * });
 */
export function useGetFilesQuery(baseOptions: Apollo.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables> & ({ variables: GetFilesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
      }
export function useGetFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
        }
export function useGetFilesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
        }
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<typeof useGetFilesLazyQuery>;
export type GetFilesSuspenseQueryHookResult = ReturnType<typeof useGetFilesSuspenseQuery>;
export type GetFilesQueryResult = Apollo.QueryResult<GetFilesQuery, GetFilesQueryVariables>;
export const AskQuestionJobAnswerDocument = gql`
    mutation AskQuestionJobAnswer($input: AskQuestionJobAnswerRequest!) {
  askQuestion(input: $input) {
    createdAt
    id
    jobId
    question
    type
    updatedAt
    content {
      content
      chats {
        content
        role
      }
    }
  }
}
    `;
export type AskQuestionJobAnswerMutationFn = Apollo.MutationFunction<AskQuestionJobAnswerMutation, AskQuestionJobAnswerMutationVariables>;

/**
 * __useAskQuestionJobAnswerMutation__
 *
 * To run a mutation, you first call `useAskQuestionJobAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAskQuestionJobAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [askQuestionJobAnswerMutation, { data, loading, error }] = useAskQuestionJobAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAskQuestionJobAnswerMutation(baseOptions?: Apollo.MutationHookOptions<AskQuestionJobAnswerMutation, AskQuestionJobAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AskQuestionJobAnswerMutation, AskQuestionJobAnswerMutationVariables>(AskQuestionJobAnswerDocument, options);
      }
export type AskQuestionJobAnswerMutationHookResult = ReturnType<typeof useAskQuestionJobAnswerMutation>;
export type AskQuestionJobAnswerMutationResult = Apollo.MutationResult<AskQuestionJobAnswerMutation>;
export type AskQuestionJobAnswerMutationOptions = Apollo.BaseMutationOptions<AskQuestionJobAnswerMutation, AskQuestionJobAnswerMutationVariables>;
export const GenerateCoverLetterDocument = gql`
    mutation GenerateCoverLetter($input: GenerateCoverLetterRequest!) {
  generateCoverLetter(input: $input) {
    content {
      content
      chats {
        content
        role
      }
    }
    createdAt
    id
    question
    jobId
    type
    updatedAt
  }
}
    `;
export type GenerateCoverLetterMutationFn = Apollo.MutationFunction<GenerateCoverLetterMutation, GenerateCoverLetterMutationVariables>;

/**
 * __useGenerateCoverLetterMutation__
 *
 * To run a mutation, you first call `useGenerateCoverLetterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateCoverLetterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateCoverLetterMutation, { data, loading, error }] = useGenerateCoverLetterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateCoverLetterMutation(baseOptions?: Apollo.MutationHookOptions<GenerateCoverLetterMutation, GenerateCoverLetterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateCoverLetterMutation, GenerateCoverLetterMutationVariables>(GenerateCoverLetterDocument, options);
      }
export type GenerateCoverLetterMutationHookResult = ReturnType<typeof useGenerateCoverLetterMutation>;
export type GenerateCoverLetterMutationResult = Apollo.MutationResult<GenerateCoverLetterMutation>;
export type GenerateCoverLetterMutationOptions = Apollo.BaseMutationOptions<GenerateCoverLetterMutation, GenerateCoverLetterMutationVariables>;
export const GetJobAnswersDocument = gql`
    query GetJobAnswers($getJobAnswers: GetJobAnswersRequest!) {
  getJobAnswers(input: $getJobAnswers) {
    type
    updatedAt
    question
    jobId
    id
    createdAt
    content {
      content
      chats {
        content
        role
      }
    }
  }
}
    `;

/**
 * __useGetJobAnswersQuery__
 *
 * To run a query within a React component, call `useGetJobAnswersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobAnswersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobAnswersQuery({
 *   variables: {
 *      getJobAnswers: // value for 'getJobAnswers'
 *   },
 * });
 */
export function useGetJobAnswersQuery(baseOptions: Apollo.QueryHookOptions<GetJobAnswersQuery, GetJobAnswersQueryVariables> & ({ variables: GetJobAnswersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobAnswersQuery, GetJobAnswersQueryVariables>(GetJobAnswersDocument, options);
      }
export function useGetJobAnswersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobAnswersQuery, GetJobAnswersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobAnswersQuery, GetJobAnswersQueryVariables>(GetJobAnswersDocument, options);
        }
export function useGetJobAnswersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJobAnswersQuery, GetJobAnswersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobAnswersQuery, GetJobAnswersQueryVariables>(GetJobAnswersDocument, options);
        }
export type GetJobAnswersQueryHookResult = ReturnType<typeof useGetJobAnswersQuery>;
export type GetJobAnswersLazyQueryHookResult = ReturnType<typeof useGetJobAnswersLazyQuery>;
export type GetJobAnswersSuspenseQueryHookResult = ReturnType<typeof useGetJobAnswersSuspenseQuery>;
export type GetJobAnswersQueryResult = Apollo.QueryResult<GetJobAnswersQuery, GetJobAnswersQueryVariables>;
export const CreateJobDocument = gql`
    mutation CreateJob($createJobRequest: CreateJobRequest!) {
  createJob(input: $createJobRequest) {
    createdAt
    description
    id
    link
    status
    title
    updatedAt
    company
    skills {
      description
      mandatory
      name
      technical
    }
  }
}
    `;
export type CreateJobMutationFn = Apollo.MutationFunction<CreateJobMutation, CreateJobMutationVariables>;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutation, { data, loading, error }] = useCreateJobMutation({
 *   variables: {
 *      createJobRequest: // value for 'createJobRequest'
 *   },
 * });
 */
export function useCreateJobMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobMutation, CreateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
      }
export type CreateJobMutationHookResult = ReturnType<typeof useCreateJobMutation>;
export type CreateJobMutationResult = Apollo.MutationResult<CreateJobMutation>;
export type CreateJobMutationOptions = Apollo.BaseMutationOptions<CreateJobMutation, CreateJobMutationVariables>;
export const GetJobDocument = gql`
    query GetJob($getJob: GetJobRequest!) {
  job(GetJobRequest: $getJob) {
    createdAt
    description
    id
    company
    link
    status
    title
    updatedAt
    skills {
      description
      mandatory
      name
      technical
    }
  }
}
    `;

/**
 * __useGetJobQuery__
 *
 * To run a query within a React component, call `useGetJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobQuery({
 *   variables: {
 *      getJob: // value for 'getJob'
 *   },
 * });
 */
export function useGetJobQuery(baseOptions: Apollo.QueryHookOptions<GetJobQuery, GetJobQueryVariables> & ({ variables: GetJobQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
      }
export function useGetJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
        }
export function useGetJobSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
        }
export type GetJobQueryHookResult = ReturnType<typeof useGetJobQuery>;
export type GetJobLazyQueryHookResult = ReturnType<typeof useGetJobLazyQuery>;
export type GetJobSuspenseQueryHookResult = ReturnType<typeof useGetJobSuspenseQuery>;
export type GetJobQueryResult = Apollo.QueryResult<GetJobQuery, GetJobQueryVariables>;
export const GetJobsDocument = gql`
    query GetJobs($getJobsRequest: GetJobsRequest!) {
  jobs(GetJobsRequest: $getJobsRequest) {
    createdAt
    description
    id
    company
    link
    status
    title
    updatedAt
    skills {
      description
      mandatory
      name
      technical
    }
  }
}
    `;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *      getJobsRequest: // value for 'getJobsRequest'
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions: Apollo.QueryHookOptions<GetJobsQuery, GetJobsQueryVariables> & ({ variables: GetJobsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export function useGetJobsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsSuspenseQueryHookResult = ReturnType<typeof useGetJobsSuspenseQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQuery, GetJobsQueryVariables>;
export const CreateMockInterviewSessionDocument = gql`
    mutation CreateMockInterviewSession($input: CreateMockInterviewSessionRequest!) {
  createMockInterviewSession(input: $input) {
    createdAt
    id
    mockInterviewId
    questions {
      question
      type
    }
    updatedAt
  }
}
    `;
export type CreateMockInterviewSessionMutationFn = Apollo.MutationFunction<CreateMockInterviewSessionMutation, CreateMockInterviewSessionMutationVariables>;

/**
 * __useCreateMockInterviewSessionMutation__
 *
 * To run a mutation, you first call `useCreateMockInterviewSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMockInterviewSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMockInterviewSessionMutation, { data, loading, error }] = useCreateMockInterviewSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMockInterviewSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateMockInterviewSessionMutation, CreateMockInterviewSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMockInterviewSessionMutation, CreateMockInterviewSessionMutationVariables>(CreateMockInterviewSessionDocument, options);
      }
export type CreateMockInterviewSessionMutationHookResult = ReturnType<typeof useCreateMockInterviewSessionMutation>;
export type CreateMockInterviewSessionMutationResult = Apollo.MutationResult<CreateMockInterviewSessionMutation>;
export type CreateMockInterviewSessionMutationOptions = Apollo.BaseMutationOptions<CreateMockInterviewSessionMutation, CreateMockInterviewSessionMutationVariables>;
export const GetMockInterviewSessionByIdDocument = gql`
    query GetMockInterviewSessionById($input: GetMockInterviewSessionRequest!) {
  getMockInterviewSessionById(input: $input) {
    createdAt
    id
    mockInterviewId
    updatedAt
    isCompleted
    startedAt
    completedAt
    questions {
      question
      type
    }
  }
}
    `;

/**
 * __useGetMockInterviewSessionByIdQuery__
 *
 * To run a query within a React component, call `useGetMockInterviewSessionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMockInterviewSessionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMockInterviewSessionByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMockInterviewSessionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables> & ({ variables: GetMockInterviewSessionByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables>(GetMockInterviewSessionByIdDocument, options);
      }
export function useGetMockInterviewSessionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables>(GetMockInterviewSessionByIdDocument, options);
        }
export function useGetMockInterviewSessionByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables>(GetMockInterviewSessionByIdDocument, options);
        }
export type GetMockInterviewSessionByIdQueryHookResult = ReturnType<typeof useGetMockInterviewSessionByIdQuery>;
export type GetMockInterviewSessionByIdLazyQueryHookResult = ReturnType<typeof useGetMockInterviewSessionByIdLazyQuery>;
export type GetMockInterviewSessionByIdSuspenseQueryHookResult = ReturnType<typeof useGetMockInterviewSessionByIdSuspenseQuery>;
export type GetMockInterviewSessionByIdQueryResult = Apollo.QueryResult<GetMockInterviewSessionByIdQuery, GetMockInterviewSessionByIdQueryVariables>;
export const GetMockInterviewSessionsDocument = gql`
    query GetMockInterviewSessions($input: GetMockInterviewSessionsRequest!) {
  getMockInterviewSessions(input: $input) {
    data {
      createdAt
      id
      mockInterviewId
      updatedAt
      isCompleted
      startedAt
      completedAt
      questions {
        question
        type
      }
    }
    pagination {
      limit
      page
      total
      totalPages
    }
  }
}
    `;

/**
 * __useGetMockInterviewSessionsQuery__
 *
 * To run a query within a React component, call `useGetMockInterviewSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMockInterviewSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMockInterviewSessionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMockInterviewSessionsQuery(baseOptions: Apollo.QueryHookOptions<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables> & ({ variables: GetMockInterviewSessionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables>(GetMockInterviewSessionsDocument, options);
      }
export function useGetMockInterviewSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables>(GetMockInterviewSessionsDocument, options);
        }
export function useGetMockInterviewSessionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables>(GetMockInterviewSessionsDocument, options);
        }
export type GetMockInterviewSessionsQueryHookResult = ReturnType<typeof useGetMockInterviewSessionsQuery>;
export type GetMockInterviewSessionsLazyQueryHookResult = ReturnType<typeof useGetMockInterviewSessionsLazyQuery>;
export type GetMockInterviewSessionsSuspenseQueryHookResult = ReturnType<typeof useGetMockInterviewSessionsSuspenseQuery>;
export type GetMockInterviewSessionsQueryResult = Apollo.QueryResult<GetMockInterviewSessionsQuery, GetMockInterviewSessionsQueryVariables>;
export const CreateMockInterviewDocument = gql`
    mutation CreateMockInterview($input: CreateMockInterviewRequest!) {
  createMockInterview(input: $input) {
    createdAt
    difficulty
    globalPrompt
    id
    jobId
    questionType
    stage
    type
    updatedAt
  }
}
    `;
export type CreateMockInterviewMutationFn = Apollo.MutationFunction<CreateMockInterviewMutation, CreateMockInterviewMutationVariables>;

/**
 * __useCreateMockInterviewMutation__
 *
 * To run a mutation, you first call `useCreateMockInterviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMockInterviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMockInterviewMutation, { data, loading, error }] = useCreateMockInterviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMockInterviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateMockInterviewMutation, CreateMockInterviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMockInterviewMutation, CreateMockInterviewMutationVariables>(CreateMockInterviewDocument, options);
      }
export type CreateMockInterviewMutationHookResult = ReturnType<typeof useCreateMockInterviewMutation>;
export type CreateMockInterviewMutationResult = Apollo.MutationResult<CreateMockInterviewMutation>;
export type CreateMockInterviewMutationOptions = Apollo.BaseMutationOptions<CreateMockInterviewMutation, CreateMockInterviewMutationVariables>;
export const GetMockInterviewByIdDocument = gql`
    query GetMockInterviewById($input: GetMockInterviewRequest!) {
  getMockInterviewById(input: $input) {
    createdAt
    difficulty
    globalPrompt
    id
    jobId
    questionType
    stage
    type
    updatedAt
  }
}
    `;

/**
 * __useGetMockInterviewByIdQuery__
 *
 * To run a query within a React component, call `useGetMockInterviewByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMockInterviewByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMockInterviewByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMockInterviewByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables> & ({ variables: GetMockInterviewByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables>(GetMockInterviewByIdDocument, options);
      }
export function useGetMockInterviewByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables>(GetMockInterviewByIdDocument, options);
        }
export function useGetMockInterviewByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables>(GetMockInterviewByIdDocument, options);
        }
export type GetMockInterviewByIdQueryHookResult = ReturnType<typeof useGetMockInterviewByIdQuery>;
export type GetMockInterviewByIdLazyQueryHookResult = ReturnType<typeof useGetMockInterviewByIdLazyQuery>;
export type GetMockInterviewByIdSuspenseQueryHookResult = ReturnType<typeof useGetMockInterviewByIdSuspenseQuery>;
export type GetMockInterviewByIdQueryResult = Apollo.QueryResult<GetMockInterviewByIdQuery, GetMockInterviewByIdQueryVariables>;
export const GetMockInterviewsDocument = gql`
    query GetMockInterviews($input: GetMockInterviewsRequest!) {
  getMockInterviews(input: $input) {
    data {
      createdAt
      difficulty
      globalPrompt
      id
      jobId
      questionType
      stage
      type
      updatedAt
    }
    pagination {
      limit
      page
      total
      totalPages
    }
  }
}
    `;

/**
 * __useGetMockInterviewsQuery__
 *
 * To run a query within a React component, call `useGetMockInterviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMockInterviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMockInterviewsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMockInterviewsQuery(baseOptions: Apollo.QueryHookOptions<GetMockInterviewsQuery, GetMockInterviewsQueryVariables> & ({ variables: GetMockInterviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMockInterviewsQuery, GetMockInterviewsQueryVariables>(GetMockInterviewsDocument, options);
      }
export function useGetMockInterviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMockInterviewsQuery, GetMockInterviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMockInterviewsQuery, GetMockInterviewsQueryVariables>(GetMockInterviewsDocument, options);
        }
export function useGetMockInterviewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMockInterviewsQuery, GetMockInterviewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMockInterviewsQuery, GetMockInterviewsQueryVariables>(GetMockInterviewsDocument, options);
        }
export type GetMockInterviewsQueryHookResult = ReturnType<typeof useGetMockInterviewsQuery>;
export type GetMockInterviewsLazyQueryHookResult = ReturnType<typeof useGetMockInterviewsLazyQuery>;
export type GetMockInterviewsSuspenseQueryHookResult = ReturnType<typeof useGetMockInterviewsSuspenseQuery>;
export type GetMockInterviewsQueryResult = Apollo.QueryResult<GetMockInterviewsQuery, GetMockInterviewsQueryVariables>;