import {
  Box,
  Button,
  Flex,
  LoadingOverlay,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { CreateMockInterviewSessionRequest } from "@web/utils/graphql/generated/graphql";
import { useCreateMockInterviewSessionMutation } from "@web/utils/graphql/generated/types";
import { useEffect } from "react";

interface IProps {
  mockInterviewId: string;
  callback: (completed: boolean) => void;
}

export function CreateMockInterviewSessionForm({
  mockInterviewId,
  callback,
}: IProps) {
  const [createSession, { loading, data, error }] =
    useCreateMockInterviewSessionMutation({
      variables: { input: { mockInterviewId } },
    });

  const handleSubmit = async (input: CreateMockInterviewSessionRequest) => {
    console.log("Create session");
    if (loading) return;
    console.log("Create session");
    await createSession({
      variables: {
        input: {
          ...input,
          numberOfQuestions: Number(input.numberOfQuestions),
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      callback(true);
    }
  }, [data, callback]);

  const form = useForm<CreateMockInterviewSessionRequest>({
    initialValues: {
      mockInterviewId,
      skillsFocus: false,
      numberOfQuestions: 50,
    },
    validate: {
      skillsFocus: (value) =>
        typeof value === "boolean" ? null : "Skills focus must be a boolean",
      numberOfQuestions: (value) =>
        value && value >= 20 ? null : "Number of questions must be min of 20",
    },
  });

  return (
    <Form form={form} onSubmit={() => handleSubmit(form.values)}>
      <Box>
        <LoadingOverlay visible={loading} />
        <Flex direction="column" gap="15px">
          <label>
            <TextInput
              label="Number of Questions"
              placeholder="Enter number of questions"
              type="number"
              {...form.getInputProps("numberOfQuestions", { required: true })}
            />
          </label>

          <label>
            <Switch
              label="Skills Focus"
              {...form.getInputProps("skillsFocus", { required: true })}
            />
          </label>
          {form.getInputProps("mockInterviewId").error && (
            <Text color="red">
              {form.getInputProps("mockInterviewId").error}
            </Text>
          )}
          <Button type="submit">Create</Button>
        </Flex>
      </Box>
    </Form>
  );
}
