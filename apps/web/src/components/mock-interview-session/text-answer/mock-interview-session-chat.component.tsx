"use client";

import { Button, Card, Flex, Text, Textarea } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { MockInterviewSessionQuestionResponse } from "@web/utils/graphql/generated/graphql";
import {
  useAnswerMockInterviewSessionQuestionMutation,
  useStartMockInterviewSessionQuestionMutation,
} from "@web/utils/graphql/generated/types";
import { useState, useEffect } from "react";

interface IProps {
  questions: MockInterviewSessionQuestionResponse[];
  questionsRefetch: () => void;
}

export function MockInterviewSessionTextAnswer({
  questions,
  questionsRefetch,
}: IProps) {
  const form = useForm<{ answer: string }>({
    initialValues: {
      answer: "",
    },
    validate: {
      answer: (value) => (value.length === 0 ? "Answer is required" : null),
    },
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const totalQuestions = questions.length;

  const [startQuestion] = useStartMockInterviewSessionQuestionMutation({});
  const [answerQuestion] = useAnswerMockInterviewSessionQuestionMutation({});

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

  const answerQuestionFunc = async () => {
    await answerQuestion({
      variables: {
        input: {
          mockInterviewSessionQuestionId: questions[currentQuestionIndex].id,
          answer: form.values.answer,
        },
      },
    })
      .then(() => {
        form.reset();
        questionsRefetch();
        setCurrentQuestionIndex((prev) =>
          prev < totalQuestions - 1 ? prev + 1 : prev
        );
      })
      .catch((error) => {
        console.error("Error answering question:", error);
      });
  };

  useEffect(() => {
    if (!questions[currentQuestionIndex].startTime) {
      updateCurrentQuestionTimestamp();
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    const index = questions.findIndex((question) => question.endTime === null);
    setCurrentQuestionIndex(index !== -1 ? index : 0);
  }, []);

  return (
    <div>
      {/* <h2>Mock Interview Session Chat</h2> */}
      <div>
        {/* <div>feed back</div> */}
        <Form form={form} onSubmit={answerQuestionFunc}>
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
            <Textarea
              mt="sm"
              placeholder="Type your answer here..."
              {...form.getInputProps("answer")}
            />
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
              <Flex gap="md" justify="space-between">
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
              <Button
                type="submit"
                disabled={form.values.answer.trim().length === 0}
              >
                Answer
              </Button>
            </Flex>
          </Card>
        </Form>
      </div>
    </div>
  );
}
