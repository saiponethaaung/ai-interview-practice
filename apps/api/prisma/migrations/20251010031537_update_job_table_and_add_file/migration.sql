-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "company" TEXT,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "skills" JSONB,
    "resume_file_id" TEXT,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "job_resume_file_id_fkey" FOREIGN KEY ("resume_file_id") REFERENCES "file" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_job" ("company", "createdAt", "description", "id", "link", "skills", "status", "title", "updatedAt") SELECT "company", "createdAt", "description", "id", "link", "skills", "status", "title", "updatedAt" FROM "job";
DROP TABLE "job";
ALTER TABLE "new_job" RENAME TO "job";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
