"use client";

import { MockInterviewTableItem } from "../table-item/mock-interview-table-item.component";
import { Table } from "@mantine/core";
import { GetMockInterviewsQuery } from "@web/utils/graphql/generated/graphql";

interface IProps {
  loading: boolean;
  error: Error | null | undefined;
  data: GetMockInterviewsQuery | undefined;
}

export function MockInterviewTable({ loading, error, data }: IProps) {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Job Title</Table.Th>
              <Table.Th>Company</Table.Th>
              <Table.Th>Method</Table.Th>
              <Table.Th>Question Type</Table.Th>
              <Table.Th>Stage</Table.Th>
              <Table.Th>Difficulty</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.getMockInterviews.data.map((interview) => (
              <MockInterviewTableItem
                key={interview.id}
                interview={interview}
              />
            ))}
          </Table.Tbody>
        </Table>
      )}
    </>
  );
}
