-- CreateTable
CREATE TABLE "PatientAccess" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "accessLevel" TEXT NOT NULL,
    CONSTRAINT "PatientAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PatientAccess_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "patientId" TEXT NOT NULL,
    "therapistId" TEXT NOT NULL,
    "sessionDate" DATETIME NOT NULL,
    "startTime" TEXT,
    "endTime" TEXT,
    "location" TEXT,
    "participants" TEXT,
    "materials" TEXT,
    "notes" TEXT,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Session_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Session_therapistId_fkey" FOREIGN KEY ("therapistId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("createdAt", "endTime", "id", "location", "materials", "notes", "participants", "patientId", "sessionDate", "startTime", "therapistId") SELECT "createdAt", "endTime", "id", "location", "materials", "notes", "participants", "patientId", "sessionDate", "startTime", "therapistId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT 'demo123',
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("createdAt", "email", "id", "name", "role") SELECT "createdAt", "email", "id", "name", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "PatientAccess_userId_patientId_key" ON "PatientAccess"("userId", "patientId");
