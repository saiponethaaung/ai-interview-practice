"use client";

import { Button, Card, Flex, Text, Textarea } from "@mantine/core";
import {
  MockInterviewSessionQuestionResponse,
  useStartMockInterviewSessionQuestionMutation,
} from "@ai-interview-practice/gql";
import { useState, useEffect } from "react";

interface IProps {
  questions: MockInterviewSessionQuestionResponse[];
  questionsRefetch: () => void;
}

export function MockInterviewSessionChat({
  questions,
  questionsRefetch,
}: IProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const totalQuestions = questions.length;

  const [startQuestion] = useStartMockInterviewSessionQuestionMutation({});

  const updateCurrentQuestionTimestamp = () => {
    startQuestion({
      variables: {
        input: {
          mockInterviewSessionQuestionId: questions[currentQuestionIndex].id,
        },
      },
    })
      .then(() => {
        questionsRefetch();
      })
      .catch((error) => {
        console.error("Error starting question:", error);
      });
  };

  useEffect(() => {
    if (!questions[currentQuestionIndex].startTime) {
      updateCurrentQuestionTimestamp();
    }
  }, [currentQuestionIndex, questions]);

  return (
    <div>
      {/* <h2>Mock Interview Session Chat</h2> */}
      <div>
        {/* <div>feed back</div> */}
        <div>
          {/* <div>chat panel</div> */}
          <Card>
            <Text fw={500} mb="sm">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </Text>
            <Text size="sm" c="dimmed">
              Type: {questions[currentQuestionIndex].type}
            </Text>
            <Text size="sm">
              Question: {questions[currentQuestionIndex].question}
            </Text>
            <Textarea mt="sm" placeholder="Type your answer here..." />
            <Text size="xs" mt="sm" fw={800} c="dimmed">
              Note: Take your time to think and answer the question to the best
              of your ability but try to reduce the time taken to answer each
              question on every practice.
              <br />
              Consistent practice will help you improve your response time and
              build confidence.
              <br />
              You won't able to go back to previous questions once you move to
              the next question due to the nature of mock interviews.
            </Text>
            <Flex mt="md" gap="md" justify="space-between">
              <Button
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    prev > 0 ? prev - 1 : prev
                  )
                }
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    prev < totalQuestions - 1 ? prev + 1 : prev
                  )
                }
                disabled={currentQuestionIndex === totalQuestions - 1}
              >
                Next
              </Button>
            </Flex>
          </Card>
        </div>
      </div>
    </div>
  );
}
