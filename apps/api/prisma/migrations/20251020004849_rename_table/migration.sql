/*
  Warnings:

  - You are about to drop the `mock_interview_question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "mock_interview_question";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "mock_interview_session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mock_interview_id" TEXT NOT NULL,
    "questions" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_session_mock_interview_id_fkey" FOREIGN KEY ("mock_interview_id") REFERENCES "mock_interview" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
