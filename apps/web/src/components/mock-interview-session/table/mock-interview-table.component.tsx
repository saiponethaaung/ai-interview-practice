"use client";

import { Table } from "@mantine/core";
import { GetMockInterviewSessionsQuery } from "@web/utils/graphql/generated/types";
import Link from "next/link";

interface IProps {
  mockInterviewId: string;
  loading: boolean;
  error: Error | null | undefined;
  data: GetMockInterviewSessionsQuery | undefined;
}

export function MockInterviewSessionTable({
  mockInterviewId,
  loading,
  error,
  data,
}: IProps) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Created At</Table.Th>
          <Table.Th>Updated At</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.getMockInterviewSessions.data.map((session) => (
          <Table.Tr key={session.id}>
            <Table.Td>
              <Link href={`/app/interview/${mockInterviewId}/${session.id}`}>
                {session.id}
              </Link>
            </Table.Td>
            <Table.Td>{session.createdAt}</Table.Td>
            <Table.Td>{session.updatedAt}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
