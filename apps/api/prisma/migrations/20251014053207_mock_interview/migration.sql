-- CreateTable
CREATE TABLE "mock_interview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "job_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "question_type" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,
    "global_prompt" TEXT,
    "archived_at" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "mock_interview_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
