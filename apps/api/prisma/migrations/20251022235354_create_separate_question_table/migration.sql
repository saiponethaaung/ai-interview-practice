/*
  Warnings:

  - You are about to drop the column `questions` on the `mock_interview_session` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "mock_interview_question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mock_interview_session_id" TEXT NOT NULL,
    "question_text" TEXT NOT NULL,
    "sample_answer" JSONB NOT NULL,
    "start_time" DATETIME,
    "end_time" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_question_mock_interview_session_id_fkey" FOREIGN KEY ("mock_interview_session_id") REFERENCES "mock_interview_session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mock_interview_session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mock_interview_id" TEXT NOT NULL,
    "number_of_questions" INTEGER NOT NULL DEFAULT 50,
    "skill_focus" BOOLEAN DEFAULT false,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "started_at" DATETIME,
    "completed_at" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_session_mock_interview_id_fkey" FOREIGN KEY ("mock_interview_id") REFERENCES "mock_interview" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mock_interview_session" ("completed_at", "createdAt", "id", "is_completed", "mock_interview_id", "number_of_questions", "skill_focus", "started_at", "updatedAt") SELECT "completed_at", "createdAt", "id", "is_completed", "mock_interview_id", "number_of_questions", "skill_focus", "started_at", "updatedAt" FROM "mock_interview_session";
DROP TABLE "mock_interview_session";
ALTER TABLE "new_mock_interview_session" RENAME TO "mock_interview_session";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
