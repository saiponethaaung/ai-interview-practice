"use client";

import { useEffect } from "react";
import { Button, Container } from "@mantine/core";
import { MockInterviewSessionTextAnswer } from "@web/components/mock-interview-session/text-answer/mock-interview-session-chat.component";
import {
  useEndMockInterviewSessionMutation,
  useGetMockInterviewByIdQuery,
  useGetMockInterviewSessionByIdQuery,
  useGetMockInterviewSessionQuestionsQuery,
  useStartMockInterviewSessionMutation,
} from "@web/utils/graphql/generated/types";
import { useParams } from "next/navigation";
import MockInterviewSessionAnalysis from "@web/components/mock-interview-session/analysis/mock-interview-session-answers.component";

export default function SessionPage() {
  const { id, session } = useParams<{ id: string; session: string }>();

  const [startSession] = useStartMockInterviewSessionMutation({
    variables: {
      input: {
        mockInterviewSessionId: session,
      },
    },
  });

  const { data, loading, error, refetch } = useGetMockInterviewSessionByIdQuery(
    {
      variables: {
        input: {
          id: session,
        },
      },
    }
  );

  const { data: mockInterviewData, loading: mockInterviewLoading } =
    useGetMockInterviewByIdQuery({
      variables: {
        input: {
          id: id,
        },
      },
    });

  const {
    data: questions,
    loading: questionsLoading,
    error: questionsError,
    refetch: questionsRefetch,
  } = useGetMockInterviewSessionQuestionsQuery({
    variables: {
      input: {
        mockInterviewSessionId: session,
      },
    },
  });

  const [endSession] = useEndMockInterviewSessionMutation({
    variables: {
      input: {
        mockInterviewSessionId: session,
      },
    },
  });

  useEffect(() => {
    if (data && !data.getMockInterviewSessionById.isCompleted) {
      const unansweredQuestions =
        questions?.getMockInterviewSessionQuestions.findIndex(
          (question) => question.endTime === null
        );
      console.log("Questions data:", unansweredQuestions);

      if (unansweredQuestions === -1) {
        endSession().then(() => {
          refetch();
        });
      }
    }
  }, [questions]);

  if (loading || mockInterviewLoading) {
    return <div>Loading...</div>;
  }

  if (error || questionsError) {
    return <div>Error: {error?.message || questionsError?.message}</div>;
  }

  if (data?.getMockInterviewSessionById.isCompleted) {
    return (
      <div>
        <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
          <MockInterviewSessionAnalysis
            refechQuestions={questionsRefetch}
            interview={mockInterviewData!.getMockInterviewById}
            session={data!.getMockInterviewSessionById}
            questions={questions?.getMockInterviewSessionQuestions ?? []}
          />
        </Container>
      </div>
    );
  }

  if (data?.getMockInterviewSessionById.startedAt === null) {
    return (
      <div>
        <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
          <h1>Session Not Started</h1>
          <p>This mock interview session has not been started yet.</p>
          <Button
            onClick={() => {
              startSession().then(() => {
                refetch();
              });
            }}
          >
            Start Session
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
        {data && (
          <div style={{ marginTop: "20px" }}>
            {!questionsLoading && questions && (
              <>
                {mockInterviewData?.getMockInterviewById.type === "TEXT" && (
                  <MockInterviewSessionTextAnswer
                    questions={
                      questions?.getMockInterviewSessionQuestions || []
                    }
                    questionsRefetch={questionsRefetch}
                  />
                )}
              </>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
