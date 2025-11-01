"use client";

import { Button, Card, Flex, Text, Textarea } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { MockInterviewSessionQuestionResponse,
  useAnswerMockInterviewSessionQuestionMutation,
  useStartMockInterviewSessionQuestionMutation,
} from "@ai-interview-practice/gql";
import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeech } from "react-text-to-speech";

interface IProps {
  questions: MockInterviewSessionQuestionResponse[];
  questionsRefetch: () => void;
}

export function MockInterviewSessionTextAnswer({
  questions,
  questionsRefetch,
}: IProps) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    interimTranscript,
    finalTranscript,
  } = useSpeechRecognition();

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
  console.log(questions[currentQuestionIndex].question);
  const {
    // Text, // Component that renders speech text in a <div> and supports standard HTML <div> props
    speechStatus, // String that stores current speech status
    isInQueue, // Indicates whether the speech is currently playing or waiting in the queue
    start, // Function to start the speech or put it in queue
    pause, // Function to pause the speech
    stop, // Function to stop the speech or remove it from queue
  } = useSpeech({
    text: questions[currentQuestionIndex].question,
    voiceURI: "Google UK English Male",
    volume: 1,
  });

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
    // start();
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    const index = questions.findIndex((question) => question.endTime === null);
    setCurrentQuestionIndex(index !== -1 ? index : 0);
  }, []);

  useEffect(() => {
    form.setFieldValue(
      "answer",
      form.getValues().answer + " " + finalTranscript
    );
  }, [finalTranscript]);

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
              resize="vertical"
              disabled={listening}
              value={
                listening
                  ? form.getInputProps("answer").value + transcript
                  : undefined
              }
              {...form.getInputProps("answer")}
            />
            <div>
              <p>Microphone: {listening ? "on" : "off"}</p>
              <button type="button" onClick={SpeechRecognition.startListening}>
                Start
              </button>
              <button type="button" onClick={SpeechRecognition.stopListening}>
                Stop
              </button>
              <button type="button" onClick={resetTranscript}>
                Reset
              </button>
              <p>Transcript: {transcript}</p>
              <p>Interm: {interimTranscript}</p>
              <p>Final: {finalTranscript}</p>
            </div>
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
                <Button onClick={() => start()}>Speak</Button>
                <Button onClick={() => stop()}>Stop</Button>
              </Flex>
              <Button
                type="submit"
                disabled={form.values.answer.trim().length === 0}
              >
                Answer
              </Button>
            </Flex>
          </Card>
          <div>isInQueue: {isInQueue ? "true" : "false"}</div>
          <div>speechStatus: {speechStatus}</div>
        </Form>
      </div>
    </div>
  );
}
