import { Button, Flex, Input, Loader } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useAskQuestionJobAnswerMutation } from "@ai-interview-practice/gql";

interface IProps {
  jobID: string;
  completeCallback?: () => void;
}

interface AskQuestion {
  question: string;
}

export default function AskQuestion({ jobID, completeCallback }: IProps) {
  const form = useForm<AskQuestion>({
    initialValues: {
      question: "",
    },
  });

  const [askQuestion, { loading }] = useAskQuestionJobAnswerMutation({});

  return (
    <Form
      form={form}
      onSubmit={(values) =>
        askQuestion({
          variables: {
            input: {
              jobId: jobID,
              question: values.question,
            },
          },
        }).then(() => {
          form.reset();
          if (typeof completeCallback === "function") {
            completeCallback();
          }
        })
      }
    >
      <Flex>
        <Input
          placeholder="Ask a question"
          style={{ width: 400 }}
          {...form.getInputProps("question")}
        />
        {!loading && <Button type="submit">Ask</Button>}
        {loading && (
          <Button type="button">
            <Loader color="white" />
          </Button>
        )}
      </Flex>
    </Form>
  );
}
