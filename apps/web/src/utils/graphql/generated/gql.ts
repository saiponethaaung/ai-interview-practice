/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateUploadFile($createFileRequest: CreateFileRequest!) {\n  createUploadFile(createFileRequest: $createFileRequest) {\n    url\n    file {\n      createdAt\n      errorMessage\n      id\n      mime\n      name\n      size\n      status\n      type\n      updatedAt\n    }\n  }\n}": typeof types.CreateUploadFileDocument,
    "query GetFiles($getFilesRequest: GetFilesRequest!) {\n  getFiles(getFilesRequest: $getFilesRequest) {\n    data {\n      createdAt\n      errorMessage\n      id\n      url\n      mime\n      name\n      filename\n      resume {\n        fullName\n        firstName\n        middleName\n        lastName\n        email\n        phoneNumber\n        address\n        skills\n        certifications\n        languages\n        summary\n        education {\n          institution\n          degree\n          fieldOfStudy\n          startDate\n          endDate\n          description\n        }\n        experience {\n          company\n          position\n          startDate\n          endDate\n          description\n        }\n      }\n      size\n      status\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}": typeof types.GetFilesDocument,
    "mutation AskQuestionJobAnswer($input: AskQuestionJobAnswerRequest!) {\n  askQuestion(input: $input) {\n    createdAt\n    id\n    jobId\n    question\n    type\n    updatedAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}": typeof types.AskQuestionJobAnswerDocument,
    "mutation GenerateCoverLetter($input: GenerateCoverLetterRequest!) {\n  generateCoverLetter(input: $input) {\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n    createdAt\n    id\n    question\n    jobId\n    type\n    updatedAt\n  }\n}": typeof types.GenerateCoverLetterDocument,
    "query GetJobAnswers($getJobAnswers: GetJobAnswersRequest!) {\n  getJobAnswers(input: $getJobAnswers) {\n    type\n    updatedAt\n    question\n    jobId\n    id\n    createdAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}": typeof types.GetJobAnswersDocument,
    "mutation CreateJob($createJobRequest: CreateJobRequest!) {\n  createJob(input: $createJobRequest) {\n    createdAt\n    description\n    id\n    link\n    status\n    title\n    updatedAt\n    company\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}": typeof types.CreateJobDocument,
    "query GetJob($getJob: GetJobRequest!) {\n  job(GetJobRequest: $getJob) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}": typeof types.GetJobDocument,
    "query GetJobs($getJobsRequest: GetJobsRequest!) {\n  jobs(GetJobsRequest: $getJobsRequest) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}": typeof types.GetJobsDocument,
    "mutation CreateMockInterviewSession($input: CreateMockInterviewSessionRequest!) {\n  createMockInterviewSession(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    questions {\n      question\n      type\n    }\n    updatedAt\n  }\n}": typeof types.CreateMockInterviewSessionDocument,
    "query GetMockInterviewSessionById($input: GetMockInterviewSessionRequest!) {\n  getMockInterviewSessionById(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    updatedAt\n    isCompleted\n    startedAt\n    completedAt\n    questions {\n      question\n      type\n    }\n  }\n}": typeof types.GetMockInterviewSessionByIdDocument,
    "query GetMockInterviewSessions($input: GetMockInterviewSessionsRequest!) {\n  getMockInterviewSessions(input: $input) {\n    data {\n      createdAt\n      id\n      mockInterviewId\n      updatedAt\n      isCompleted\n      startedAt\n      completedAt\n      questions {\n        question\n        type\n      }\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}": typeof types.GetMockInterviewSessionsDocument,
    "mutation CreateMockInterview($input: CreateMockInterviewRequest!) {\n  createMockInterview(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}": typeof types.CreateMockInterviewDocument,
    "query GetMockInterviewById($input: GetMockInterviewRequest!) {\n  getMockInterviewById(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}": typeof types.GetMockInterviewByIdDocument,
    "query GetMockInterviews($input: GetMockInterviewsRequest!) {\n  getMockInterviews(input: $input) {\n    data {\n      createdAt\n      difficulty\n      globalPrompt\n      id\n      jobId\n      questionType\n      stage\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}": typeof types.GetMockInterviewsDocument,
};
const documents: Documents = {
    "mutation CreateUploadFile($createFileRequest: CreateFileRequest!) {\n  createUploadFile(createFileRequest: $createFileRequest) {\n    url\n    file {\n      createdAt\n      errorMessage\n      id\n      mime\n      name\n      size\n      status\n      type\n      updatedAt\n    }\n  }\n}": types.CreateUploadFileDocument,
    "query GetFiles($getFilesRequest: GetFilesRequest!) {\n  getFiles(getFilesRequest: $getFilesRequest) {\n    data {\n      createdAt\n      errorMessage\n      id\n      url\n      mime\n      name\n      filename\n      resume {\n        fullName\n        firstName\n        middleName\n        lastName\n        email\n        phoneNumber\n        address\n        skills\n        certifications\n        languages\n        summary\n        education {\n          institution\n          degree\n          fieldOfStudy\n          startDate\n          endDate\n          description\n        }\n        experience {\n          company\n          position\n          startDate\n          endDate\n          description\n        }\n      }\n      size\n      status\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}": types.GetFilesDocument,
    "mutation AskQuestionJobAnswer($input: AskQuestionJobAnswerRequest!) {\n  askQuestion(input: $input) {\n    createdAt\n    id\n    jobId\n    question\n    type\n    updatedAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}": types.AskQuestionJobAnswerDocument,
    "mutation GenerateCoverLetter($input: GenerateCoverLetterRequest!) {\n  generateCoverLetter(input: $input) {\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n    createdAt\n    id\n    question\n    jobId\n    type\n    updatedAt\n  }\n}": types.GenerateCoverLetterDocument,
    "query GetJobAnswers($getJobAnswers: GetJobAnswersRequest!) {\n  getJobAnswers(input: $getJobAnswers) {\n    type\n    updatedAt\n    question\n    jobId\n    id\n    createdAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}": types.GetJobAnswersDocument,
    "mutation CreateJob($createJobRequest: CreateJobRequest!) {\n  createJob(input: $createJobRequest) {\n    createdAt\n    description\n    id\n    link\n    status\n    title\n    updatedAt\n    company\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}": types.CreateJobDocument,
    "query GetJob($getJob: GetJobRequest!) {\n  job(GetJobRequest: $getJob) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}": types.GetJobDocument,
    "query GetJobs($getJobsRequest: GetJobsRequest!) {\n  jobs(GetJobsRequest: $getJobsRequest) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}": types.GetJobsDocument,
    "mutation CreateMockInterviewSession($input: CreateMockInterviewSessionRequest!) {\n  createMockInterviewSession(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    questions {\n      question\n      type\n    }\n    updatedAt\n  }\n}": types.CreateMockInterviewSessionDocument,
    "query GetMockInterviewSessionById($input: GetMockInterviewSessionRequest!) {\n  getMockInterviewSessionById(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    updatedAt\n    isCompleted\n    startedAt\n    completedAt\n    questions {\n      question\n      type\n    }\n  }\n}": types.GetMockInterviewSessionByIdDocument,
    "query GetMockInterviewSessions($input: GetMockInterviewSessionsRequest!) {\n  getMockInterviewSessions(input: $input) {\n    data {\n      createdAt\n      id\n      mockInterviewId\n      updatedAt\n      isCompleted\n      startedAt\n      completedAt\n      questions {\n        question\n        type\n      }\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}": types.GetMockInterviewSessionsDocument,
    "mutation CreateMockInterview($input: CreateMockInterviewRequest!) {\n  createMockInterview(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}": types.CreateMockInterviewDocument,
    "query GetMockInterviewById($input: GetMockInterviewRequest!) {\n  getMockInterviewById(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}": types.GetMockInterviewByIdDocument,
    "query GetMockInterviews($input: GetMockInterviewsRequest!) {\n  getMockInterviews(input: $input) {\n    data {\n      createdAt\n      difficulty\n      globalPrompt\n      id\n      jobId\n      questionType\n      stage\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}": types.GetMockInterviewsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation CreateUploadFile($createFileRequest: CreateFileRequest!) {\n  createUploadFile(createFileRequest: $createFileRequest) {\n    url\n    file {\n      createdAt\n      errorMessage\n      id\n      mime\n      name\n      size\n      status\n      type\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation CreateUploadFile($createFileRequest: CreateFileRequest!) {\n  createUploadFile(createFileRequest: $createFileRequest) {\n    url\n    file {\n      createdAt\n      errorMessage\n      id\n      mime\n      name\n      size\n      status\n      type\n      updatedAt\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetFiles($getFilesRequest: GetFilesRequest!) {\n  getFiles(getFilesRequest: $getFilesRequest) {\n    data {\n      createdAt\n      errorMessage\n      id\n      url\n      mime\n      name\n      filename\n      resume {\n        fullName\n        firstName\n        middleName\n        lastName\n        email\n        phoneNumber\n        address\n        skills\n        certifications\n        languages\n        summary\n        education {\n          institution\n          degree\n          fieldOfStudy\n          startDate\n          endDate\n          description\n        }\n        experience {\n          company\n          position\n          startDate\n          endDate\n          description\n        }\n      }\n      size\n      status\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}"): (typeof documents)["query GetFiles($getFilesRequest: GetFilesRequest!) {\n  getFiles(getFilesRequest: $getFilesRequest) {\n    data {\n      createdAt\n      errorMessage\n      id\n      url\n      mime\n      name\n      filename\n      resume {\n        fullName\n        firstName\n        middleName\n        lastName\n        email\n        phoneNumber\n        address\n        skills\n        certifications\n        languages\n        summary\n        education {\n          institution\n          degree\n          fieldOfStudy\n          startDate\n          endDate\n          description\n        }\n        experience {\n          company\n          position\n          startDate\n          endDate\n          description\n        }\n      }\n      size\n      status\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation AskQuestionJobAnswer($input: AskQuestionJobAnswerRequest!) {\n  askQuestion(input: $input) {\n    createdAt\n    id\n    jobId\n    question\n    type\n    updatedAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}"): (typeof documents)["mutation AskQuestionJobAnswer($input: AskQuestionJobAnswerRequest!) {\n  askQuestion(input: $input) {\n    createdAt\n    id\n    jobId\n    question\n    type\n    updatedAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation GenerateCoverLetter($input: GenerateCoverLetterRequest!) {\n  generateCoverLetter(input: $input) {\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n    createdAt\n    id\n    question\n    jobId\n    type\n    updatedAt\n  }\n}"): (typeof documents)["mutation GenerateCoverLetter($input: GenerateCoverLetterRequest!) {\n  generateCoverLetter(input: $input) {\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n    createdAt\n    id\n    question\n    jobId\n    type\n    updatedAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetJobAnswers($getJobAnswers: GetJobAnswersRequest!) {\n  getJobAnswers(input: $getJobAnswers) {\n    type\n    updatedAt\n    question\n    jobId\n    id\n    createdAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}"): (typeof documents)["query GetJobAnswers($getJobAnswers: GetJobAnswersRequest!) {\n  getJobAnswers(input: $getJobAnswers) {\n    type\n    updatedAt\n    question\n    jobId\n    id\n    createdAt\n    content {\n      content\n      chats {\n        content\n        role\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation CreateJob($createJobRequest: CreateJobRequest!) {\n  createJob(input: $createJobRequest) {\n    createdAt\n    description\n    id\n    link\n    status\n    title\n    updatedAt\n    company\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}"): (typeof documents)["mutation CreateJob($createJobRequest: CreateJobRequest!) {\n  createJob(input: $createJobRequest) {\n    createdAt\n    description\n    id\n    link\n    status\n    title\n    updatedAt\n    company\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetJob($getJob: GetJobRequest!) {\n  job(GetJobRequest: $getJob) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}"): (typeof documents)["query GetJob($getJob: GetJobRequest!) {\n  job(GetJobRequest: $getJob) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetJobs($getJobsRequest: GetJobsRequest!) {\n  jobs(GetJobsRequest: $getJobsRequest) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}"): (typeof documents)["query GetJobs($getJobsRequest: GetJobsRequest!) {\n  jobs(GetJobsRequest: $getJobsRequest) {\n    createdAt\n    description\n    id\n    company\n    link\n    status\n    title\n    updatedAt\n    skills {\n      description\n      mandatory\n      name\n      technical\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation CreateMockInterviewSession($input: CreateMockInterviewSessionRequest!) {\n  createMockInterviewSession(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    questions {\n      question\n      type\n    }\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateMockInterviewSession($input: CreateMockInterviewSessionRequest!) {\n  createMockInterviewSession(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    questions {\n      question\n      type\n    }\n    updatedAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetMockInterviewSessionById($input: GetMockInterviewSessionRequest!) {\n  getMockInterviewSessionById(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    updatedAt\n    isCompleted\n    startedAt\n    completedAt\n    questions {\n      question\n      type\n    }\n  }\n}"): (typeof documents)["query GetMockInterviewSessionById($input: GetMockInterviewSessionRequest!) {\n  getMockInterviewSessionById(input: $input) {\n    createdAt\n    id\n    mockInterviewId\n    updatedAt\n    isCompleted\n    startedAt\n    completedAt\n    questions {\n      question\n      type\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetMockInterviewSessions($input: GetMockInterviewSessionsRequest!) {\n  getMockInterviewSessions(input: $input) {\n    data {\n      createdAt\n      id\n      mockInterviewId\n      updatedAt\n      isCompleted\n      startedAt\n      completedAt\n      questions {\n        question\n        type\n      }\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}"): (typeof documents)["query GetMockInterviewSessions($input: GetMockInterviewSessionsRequest!) {\n  getMockInterviewSessions(input: $input) {\n    data {\n      createdAt\n      id\n      mockInterviewId\n      updatedAt\n      isCompleted\n      startedAt\n      completedAt\n      questions {\n        question\n        type\n      }\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation CreateMockInterview($input: CreateMockInterviewRequest!) {\n  createMockInterview(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateMockInterview($input: CreateMockInterviewRequest!) {\n  createMockInterview(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetMockInterviewById($input: GetMockInterviewRequest!) {\n  getMockInterviewById(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}"): (typeof documents)["query GetMockInterviewById($input: GetMockInterviewRequest!) {\n  getMockInterviewById(input: $input) {\n    createdAt\n    difficulty\n    globalPrompt\n    id\n    jobId\n    questionType\n    stage\n    type\n    updatedAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetMockInterviews($input: GetMockInterviewsRequest!) {\n  getMockInterviews(input: $input) {\n    data {\n      createdAt\n      difficulty\n      globalPrompt\n      id\n      jobId\n      questionType\n      stage\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}"): (typeof documents)["query GetMockInterviews($input: GetMockInterviewsRequest!) {\n  getMockInterviews(input: $input) {\n    data {\n      createdAt\n      difficulty\n      globalPrompt\n      id\n      jobId\n      questionType\n      stage\n      type\n      updatedAt\n    }\n    pagination {\n      limit\n      page\n      total\n      totalPages\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;