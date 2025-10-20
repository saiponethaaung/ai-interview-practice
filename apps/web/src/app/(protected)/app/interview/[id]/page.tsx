"use client";

import { Button } from "@mantine/core";
import { MockInterviewSessionTable } from "@web/components/mock-interview-session/table/mock-interview-table.component";
import {
  useCreateMockInterviewSessionMutation,
  useGetMockInterviewByIdQuery,
  useGetMockInterviewSessionsQuery,
} from "@web/utils/graphql/generated/types";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function InterviewPage() {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useGetMockInterviewByIdQuery({
    variables: {
      input: {
        id: id!,
      },
    },
  });

  const {
    data: sessionsData,
    loading: sessionsLoading,
    error: sessionsError,
    refetch,
  } = useGetMockInterviewSessionsQuery({
    variables: {
      input: {
        mockInterviewId: id!,
      },
    },
  });

  const [createNewSession, { loading: creatingSession, data: newSessionData }] =
    useCreateMockInterviewSessionMutation({
      variables: {
        input: {
          mockInterviewId: id!,
        },
      },
    });

  const createSession = async () => {
    if (creatingSession) return;
    await createNewSession();
  };

  useEffect(() => {
    if (newSessionData) {
      refetch();
    }
  }, [newSessionData, refetch]);

  return (
    <div>
      <h1>Interview Page {id}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>Interview ID: {data.getMockInterviewById.id}</p>
          <p>Job ID: {data.getMockInterviewById.jobId}</p>
          <p>Type: {data.getMockInterviewById.type}</p>
          <p>Question Type: {data.getMockInterviewById.questionType}</p>
          <p>Stage: {data.getMockInterviewById.stage}</p>
          <p>Difficulty: {data.getMockInterviewById.difficulty}</p>
        </div>
      )}
      <h2>Session List</h2>
      <Button onClick={createSession} disabled={creatingSession}>
        Create a new session
      </Button>
      <MockInterviewSessionTable
        mockInterviewId={id}
        loading={sessionsLoading}
        error={sessionsError}
        data={sessionsData}
      />
    </div>
  );
}
