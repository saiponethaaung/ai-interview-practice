"use client";

import { Container } from "@mantine/core";
import { MockInterviewSessionChat } from "@web/components/mock-interview-session/chat/mock-interview-session-chat.component";
import {
  useGetMockInterviewByIdQuery,
  useGetMockInterviewSessionByIdQuery,
} from "@web/utils/graphql/generated/types";
import { useParams } from "next/navigation";

export default function SessionPage() {
  const { id, session } = useParams<{ id: string; session: string }>();

  const { data, loading, error } = useGetMockInterviewSessionByIdQuery({
    variables: {
      input: {
        id: session,
      },
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data?.getMockInterviewSessionById.isCompleted) {
    return (
      <div>
        <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
          <h1>Session Completed</h1>
          <p>This mock interview session has been completed.</p>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
        {data && (
          <div style={{ marginTop: "20px" }}>
            <MockInterviewSessionChat
              questions={data.getMockInterviewSessionById.questions}
            />
          </div>
        )}
      </Container>
    </div>
  );
}
