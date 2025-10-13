import {
  Button,
  Drawer,
  Flex,
  Input,
  List,
  Table,
  Tabs,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { JobResponse } from "@web/utils/graphql/generated/graphql";
import {
  useAskQuestionJobAnswerMutation,
  useGenerateCoverLetterMutation,
  useGetJobAnswersQuery,
} from "@web/utils/graphql/generated/types";
import AskQuestion from "../ask-question/ask-question";

interface IProps {
  open: boolean;
  closeCallback: () => void;
  job: JobResponse;
}

export function JobDetailDrawer({ open, closeCallback, job }: IProps) {
  const { data, refetch } = useGetJobAnswersQuery({
    variables: {
      getJobAnswers: {
        jobId: job.id,
      },
    },
  });

  const coverLetter = () =>
    data?.getJobAnswers?.find((answer) => answer.type === "COVER_LETTER");

  const questions = () =>
    data?.getJobAnswers?.filter((answer) => answer.type === "QUESTIONS");

  const [generateCoverLetter, { loading: coverLetterGenerating }] =
    useGenerateCoverLetterMutation({});

  return (
    <Drawer
      title={`${job.title} (${job.company})`}
      opened={open}
      onClose={closeCallback}
      size="90%"
      position="right"
    >
      <Tabs defaultValue={"desc"} mb={"md"}>
        <Tabs.List>
          <Tabs.Tab value="desc" title="Description">
            Description
          </Tabs.Tab>
          <Tabs.Tab value="skills" title="Skills">
            Skill
          </Tabs.Tab>
          <Tabs.Tab value="coverLetter" title="Cover letter">
            Cover letter
          </Tabs.Tab>
          <Tabs.Tab value="qna" title="Q&A">
            Q&A
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="desc" pt="xs">
          <Text style={{ whiteSpace: "pre-wrap" }}>
            {job.description.replaceAll(/\n\n+/g, "\n\n")}
          </Text>
        </Tabs.Panel>
        <Tabs.Panel value="coverLetter" pt="xs">
          {!coverLetter() && (
            <>
              {!coverLetterGenerating && (
                <Button
                  onClick={() =>
                    generateCoverLetter({
                      variables: { input: { jobId: job.id } },
                      onCompleted: () => refetch(),
                    })
                  }
                >
                  Generate
                </Button>
              )}
              {coverLetterGenerating && <Text>Generating...</Text>}
            </>
          )}
          {coverLetter() && (
            <Text
              style={{ whiteSpace: "pre-wrap" }}
              onClick={() => {
                navigator.clipboard.writeText(
                  (coverLetter()?.content.content || "")
                    .replaceAll("\n", "")
                    .replaceAll(/<br\s*\/?>/gi, "\n")
                );
              }}
              dangerouslySetInnerHTML={{
                __html: coverLetter()?.content.content.replaceAll(
                  "\n",
                  ""
                ) as string,
              }}
            ></Text>
          )}
        </Tabs.Panel>
        <Tabs.Panel value="qna" pt="xs">
          <AskQuestion jobID={job.id} completeCallback={refetch} />
          <List
            mt="md"
            size="sm"
            icon={<ThemeIcon color="teal" radius="xl"></ThemeIcon>}
            center={false}
          >
            {questions()?.length === 0 && <Text>No questions found.</Text>}
            {questions()?.map((qna, index) => (
              <List.Item key={index} style={{ marginBottom: 20 }}>
                Q: {qna.question}
                <br />
                A: {qna.content.content}
              </List.Item>
            ))}
          </List>
        </Tabs.Panel>
        <Tabs.Panel value="skills" pt="xs">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Skill</Table.Th>
                <Table.Th>Technical</Table.Th>
                <Table.Th>Required</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Analysis</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {job.skills
                ?.map((s) => s)
                .sort((a, b) => (a.mandatory < b.mandatory ? 1 : -1))
                .map((skill, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>{skill.name}</Table.Td>
                    <Table.Td>{skill.technical ? "Yes" : "No"}</Table.Td>
                    <Table.Td>{skill.mandatory ? "Yes" : "No"}</Table.Td>
                    <Table.Td>{skill.description}</Table.Td>
                    <Table.Td>{skill.analysis ?? "-"}</Table.Td>
                  </Table.Tr>
                ))}
            </Table.Tbody>
          </Table>
        </Tabs.Panel>
      </Tabs>
    </Drawer>
  );
}
