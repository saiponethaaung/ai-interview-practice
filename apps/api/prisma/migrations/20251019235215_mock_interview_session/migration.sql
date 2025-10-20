-- CreateTable
CREATE TABLE "mock_interview_question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mock_interview_id" TEXT NOT NULL,
    "questions" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_question_mock_interview_id_fkey" FOREIGN KEY ("mock_interview_id") REFERENCES "mock_interview" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
