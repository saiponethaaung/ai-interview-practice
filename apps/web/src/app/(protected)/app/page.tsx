import { Badge, Box, Button, Container, Flex, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";
import {
  IconCheck,
  IconHistory,
  IconNote,
  IconRobot,
  IconStar,
  IconVideo
} from "@tabler/icons-react";

const recenteActivities = [
  { label: "Total Interviews", value: "24", icon: IconVideo, bgColor: "bg-purple-light", iconColor: "#6366F1" },
  { label: "Completed", value: "18", icon: IconCheck, bgColor: "bg-green-light", iconColor: "#22C55F" },
  { label: "Average Score", value: "85%", icon: IconStar, bgColor: "bg-yellow-light", iconColor: "#EAB308" },
  { label: "Pending", value: "6", icon: IconNote, bgColor: "bg-red-light", iconColor: "#EF4D4C" }
]

export default function App() {
  return (
    <div>
      <Container size="xl">
        <Flex justify="center" direction="column" align="start" my={20}>
          <h1 className="text-3xl font-bold mb-2">
            Dashboard
          </h1>
          <span className="text-gray-600">
            Welcome back, John Doe! Let's get you prepared for your next interview.
          </span>
        </Flex>
        <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6 ">
          <Flex direction="column" gap="20px">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">AI Interview Practice</h2>
              <span className="text-base text-gray-500">
                Practice your interview skills with AI-powered feedback and personalized coaching
              </span>
            </div>
            <div className="space-x-4">
              <Button style={{
                backgroundColor: 'var(--primary)',
                fontWeight: '700'
              }}>
                <IconRobot className="mr-2" size={20} color="white" />
                Start an interview</Button>
              <Button variant="light" style={{
                backgroundColor: '#E5E7EB',
                fontWeight: '700',
                color: 'black',
              }}>
                <IconHistory className="mr-2" size={20} color="black" />
                View history
              </Button>
            </div>
          </Flex>
        </Box>
        <Group mb={20} justify="space-between" align="center">
          {recenteActivities.map((activity) => (
            <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6" key={activity.label}>
              <Flex direction="row" gap="20px" w={200}>
                <div key={activity.label} className="flex items-center gap-4">
                  <div className={`flex items-center justify-center rounded-full ${activity.bgColor} p-4`}>
                    <activity.icon size={30} color={activity.iconColor} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-semibold">{activity.label}</span>
                    <h2 className="text-2xl font-semibold">{activity.value}</h2>
                  </div>
                </div>
              </Flex>
            </Box>
          ))}
        </Group>
        <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <Group mb={20} justify="space-between" align="center">
            <Table>
              <TableThead>
                <TableTr>
                  <TableTh>Activity</TableTh>
                  <TableTh>Date</TableTh>
                  <TableTh>Status</TableTh>
                  <TableTh>Score</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                <TableTr>
                  <TableTd>Interview with Google</TableTd>
                  <TableTd>2024-06-15</TableTd>
                  <TableTd>
                    <Badge color="green" variant="light">Completed</Badge>
                  </TableTd>
                  <TableTd>90%</TableTd>
                </TableTr>
              </TableTbody>
            </Table>
          </Group>
        </Box>
      </Container>
    </div>
  );
}
