import { Button, Table } from "@mantine/core";
import {
  MockInterviewResponse,
  useGetJobQuery,
} from "@web/utils/graphql/generated/types";
import Link from "next/link";

interface IProps {
  interview: MockInterviewResponse;
}

export function MockInterviewTableItem({ interview }: IProps) {
  const { data, loading } = useGetJobQuery({
    variables: {
      getJob: {
        id: interview.jobId,
      },
    },
  });

  return (
    <Table.Tr key={interview.id}>
      <Table.Td>{loading ? "Loading job..." : data?.job?.title}</Table.Td>
      <Table.Td>{loading ? "Loading job..." : data?.job?.company}</Table.Td>
      <Table.Td>{interview.type}</Table.Td>
      <Table.Td>{interview.questionType}</Table.Td>
      <Table.Td>{interview.stage}</Table.Td>
      <Table.Td>{interview.difficulty}</Table.Td>
      <Table.Td>
        <Link href={`/app/interview/${interview.id}`}>
          <Button>View</Button>
        </Link>
        {/* <Button
          onClick={() => {
            // handleDelete(interview.id)
          }}
        >
          Delete
        </Button> */}
      </Table.Td>
    </Table.Tr>
  );
}
