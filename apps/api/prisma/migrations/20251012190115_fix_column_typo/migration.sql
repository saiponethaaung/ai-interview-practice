/*
  Warnings:

  - You are about to drop the column `questions` on the `job_answer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_job_answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "job_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "question" TEXT,
    "content" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "job_answer_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_job_answer" ("content", "createdAt", "id", "job_id", "type", "updatedAt") SELECT "content", "createdAt", "id", "job_id", "type", "updatedAt" FROM "job_answer";
DROP TABLE "job_answer";
ALTER TABLE "new_job_answer" RENAME TO "job_answer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
