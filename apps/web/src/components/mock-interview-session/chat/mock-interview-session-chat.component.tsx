"use client";

import { Button, Card, Flex, Text, Textarea } from "@mantine/core";
import { InterviewQuestions } from "@web/utils/graphql/generated/graphql";
import { useState } from "react";

interface IProps {
  questions: InterviewQuestions[];
}

export function MockInterviewSessionChat({ questions }: IProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const totalQuestions = questions.length;

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
