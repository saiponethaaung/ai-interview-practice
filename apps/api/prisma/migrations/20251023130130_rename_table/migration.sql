/*
  Warnings:

  - You are about to drop the `mock_interview_question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "mock_interview_question";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "mock_interview_session_question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mock_interview_session_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "conversations" JSONB DEFAULT [],
    "start_time" DATETIME,
    "end_time" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_session_question_mock_interview_session_id_fkey" FOREIGN KEY ("mock_interview_session_id") REFERENCES "mock_interview_session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
