"use client";

import { Button, Card, Flex, Modal } from "@mantine/core";
import { CreateMockInterviewSessionForm } from "@web/components/mock-interview-session/create-form/create-mock-interview-session-form.component";
import { MockInterviewSessionTable } from "@web/components/mock-interview-session/table/mock-interview-table.component";
import {
  useGetMockInterviewByIdQuery,
  useGetMockInterviewSessionsQuery,
} from "@web/utils/graphql/generated/types";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function InterviewPage() {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState<boolean>(false);

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

  return (
    <Flex direction="column" gap="md" p="md">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <Card>
          <p>Interview ID: {data.getMockInterviewById.id}</p>
          <p>Job ID: {data.getMockInterviewById.jobId}</p>
          <p>Type: {data.getMockInterviewById.type}</p>
          <p>Question Type: {data.getMockInterviewById.questionType}</p>
          <p>Stage: {data.getMockInterviewById.stage}</p>
          <p>Difficulty: {data.getMockInterviewById.difficulty}</p>
        </Card>
      )}
      <Flex align="center" justify="space-between" gap="md">
        <h2>Session List</h2>
        <Button onClick={() => setOpen(true)}>Create a new session</Button>
        <Modal
          title="Create Mock Interview Session"
          opened={open}
          onClose={() => setOpen(false)}
        >
          <CreateMockInterviewSessionForm
            mockInterviewId={id}
            callback={(completed: boolean) => {
              setOpen(false);
              if (completed) {
                refetch();
              }
            }}
          />
        </Modal>
      </Flex>
      <MockInterviewSessionTable
        mockInterviewId={id}
        loading={sessionsLoading}
        error={sessionsError}
        data={sessionsData}
      />
    </Flex>
  );
}
