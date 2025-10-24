import {
  Accordion,
  Badge,
  Button,
  Flex,
  Indicator,
  Table,
  Text,
} from "@mantine/core";
import {
  MockInterviewResponse,
  MockInterviewSessionQuestionResponse,
  MockInterviewSessionResponse,
} from "@web/utils/graphql/generated/graphql";
import { useAnalyzeMockInterviewSessionQuestionMutation } from "@web/utils/graphql/generated/types";

interface IProps {
  interview: MockInterviewResponse;
  session: MockInterviewSessionResponse;
  questions: MockInterviewSessionQuestionResponse[];
  refechQuestions: () => void;
}

export default function MockInterviewSessionAnalysis({
  interview,
  session,
  questions,
  // To remove in the future
  refechQuestions,
}: IProps) {
  const [analyzeMockInterviewSessionQuestion, { loading }] =
    useAnalyzeMockInterviewSessionQuestionMutation();

  const requestAnalysis = async (questionId: string) => {
    analyzeMockInterviewSessionQuestion({
      variables: { input: { mockInterviewSessionQuestionId: questionId } },
    }).then(() => {
      refechQuestions();
    });
  };

  return (
    <div>
      <Text>Congratulation on completing the Mock Interview Session!</Text>
      <Text>Mock Interview Session Answers Component</Text>
      <Flex direction="row" gap="md" mt="md">
        <Accordion>
          {questions.map((question, index) => (
            <Accordion.Item key={question.id} value={question.id}>
              <Accordion.Control>
                {index + 1 + ". " + question.question}
              </Accordion.Control>
              <Accordion.Panel>
                <div style={{ position: "relative", paddingRight: "60px" }}>
                  <Text fw={500}>Answer:</Text>
                  {interview.type === "TEXT" && (
                    <Text>{question.conversations.slice(-1)[0].content}</Text>
                  )}
                </div>
                <div
                  style={{
                    position: "relative",
                    paddingRight: "60px",
                    marginTop: "20px",
                  }}
                >
                  <Text fw={700}>Analysis</Text>
                  {question.analysis ? (
                    <Flex direction="column" gap="sm" mt="md">
                      <Text>
                        <b>Overview:</b> {question.analysis.overview}
                      </Text>
                      <Text>
                        <b>Strength:</b> {question.analysis.strengths}
                      </Text>
                      <Text>
                        <b>Improvement:</b> {question.analysis.improvements}
                      </Text>
                      <Text>
                        <b>Average Score:</b> {question.analysis.averageScore}
                      </Text>

                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th>Criteria</Table.Th>
                            <Table.Th>Score</Table.Th>
                            <Table.Th>Comments</Table.Th>
                            <Table.Th>Example</Table.Th>
                            <Table.Th>Highlight</Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          {[
                            "correctness",
                            "relevance",
                            "depth",
                            "structure",
                            "clarity",
                            "tone",
                            "confidence",
                          ].map((criteria, idx) => (
                            <Table.Tr key={idx}>
                              <Table.Td>{criteria}</Table.Td>
                              <Table.Td>
                                {question.analysis.scores[criteria].score}
                              </Table.Td>
                              <Table.Td>
                                {question.analysis.scores[criteria].feedback ||
                                  "N/A"}
                              </Table.Td>
                              <Table.Td>
                                {question.analysis.scores[criteria].example ||
                                  "N/A"}
                              </Table.Td>
                              <Table.Td>
                                {question.analysis.scores[criteria]
                                  .highlights || "N/A"}
                              </Table.Td>
                            </Table.Tr>
                          ))}
                        </Table.Tbody>
                      </Table>
                    </Flex>
                  ) : loading ? (
                    <Text>Loading...</Text>
                  ) : (
                    <Button onClick={() => requestAnalysis(question.id)}>
                      Request analysis
                    </Button>
                  )}
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Flex>
    </div>
  );
}
