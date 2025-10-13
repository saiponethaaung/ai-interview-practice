-- CreateTable
CREATE TABLE "job_answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "job_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "questions" TEXT,
    "content" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "job_answer_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
