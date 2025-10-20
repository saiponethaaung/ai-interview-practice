-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mock_interview_session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mock_interview_id" TEXT NOT NULL,
    "questions" JSONB NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "started_at" DATETIME,
    "completed_at" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_session_mock_interview_id_fkey" FOREIGN KEY ("mock_interview_id") REFERENCES "mock_interview" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mock_interview_session" ("createdAt", "id", "mock_interview_id", "questions", "updatedAt") SELECT "createdAt", "id", "mock_interview_id", "questions", "updatedAt" FROM "mock_interview_session";
DROP TABLE "mock_interview_session";
ALTER TABLE "new_mock_interview_session" RENAME TO "mock_interview_session";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
