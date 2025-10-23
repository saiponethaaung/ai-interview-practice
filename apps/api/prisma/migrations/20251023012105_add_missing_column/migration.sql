/*
  Warnings:

  - Added the required column `type` to the `mock_interview_question` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mock_interview_question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mock_interview_session_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "conversations" JSONB DEFAULT [],
    "start_time" DATETIME,
    "end_time" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_question_mock_interview_session_id_fkey" FOREIGN KEY ("mock_interview_session_id") REFERENCES "mock_interview_session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mock_interview_question" ("conversations", "createdAt", "end_time", "id", "mock_interview_session_id", "question", "start_time", "updatedAt") SELECT "conversations", "createdAt", "end_time", "id", "mock_interview_session_id", "question", "start_time", "updatedAt" FROM "mock_interview_question";
DROP TABLE "mock_interview_question";
ALTER TABLE "new_mock_interview_question" RENAME TO "mock_interview_question";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
