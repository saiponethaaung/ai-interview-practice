"use client";

import { Container } from "@mantine/core";
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

  return (
    <div>
      <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
        <h1>Session Page</h1>
        <p>Welcome to the session page for session {session}!</p>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div style={{ marginTop: "20px" }}>
            {data.getMockInterviewSessionById.questions.map((q, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <h3>Type: {q.type}</h3>
                <p>Question: {q.question}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
