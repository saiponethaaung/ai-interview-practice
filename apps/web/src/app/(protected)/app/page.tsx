import { Box, Card, Container, Flex } from "@mantine/core";

export default function App() {
  return (
    <div>
      <Container>
        <Flex pt="50px" pb="20px">
          <div>AI Interview Practice</div>
          <div>
            Practice your interview skills with AI-powered feedback and
            personalized coaching
          </div>
        </Flex>
        <Flex pt="20px" pb="20px">
          <Flex style={{ width: "100%" }} gap="20px" direction={"row"}>
            <Flex direction="column">
              <Box>
                <Card>Start an interview</Card>
              </Box>
            </Flex>
            <Flex direction="column">
              <Box>
                <Card>View history</Card>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex pt="20px" pb="20px">
          <Flex direction="column">
            <Box>
              <Card>Recent activities</Card>
            </Box>
          </Flex>
        </Flex>
        <Flex pt="20px" pb="20px">
          <Flex gap="20px" direction={"row"}>
            <Flex direction="column">
              <Box>
                <Card>Total Interview</Card>
              </Box>
            </Flex>
            <Flex direction="column">
              <Box>
                <Card>Completed</Card>
              </Box>
            </Flex>
            <Flex direction="column">
              <Box>
                <Card>Average Score</Card>
              </Box>
            </Flex>
            <Flex direction="column">
              <Box>
                <Card>Test</Card>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
