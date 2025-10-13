-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_file" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "mime" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "error_message" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_file" ("createdAt", "id", "mime", "name", "size", "type", "updatedAt") SELECT "createdAt", "id", "mime", "name", "size", "type", "updatedAt" FROM "file";
DROP TABLE "file";
ALTER TABLE "new_file" RENAME TO "file";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
