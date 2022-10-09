/*
  Warnings:

  - You are about to drop the `watchlists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "watchlists" DROP CONSTRAINT "watchlists_filmId_fkey";

-- DropForeignKey
ALTER TABLE "watchlists" DROP CONSTRAINT "watchlists_userId_fkey";

-- DropTable
DROP TABLE "watchlists";

-- CreateTable
CREATE TABLE "watchlistFilms" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "filmId" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "watchlistFilms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "watchlistFilms_userId_filmId_key" ON "watchlistFilms"("userId", "filmId");

-- AddForeignKey
ALTER TABLE "watchlistFilms" ADD CONSTRAINT "watchlistFilms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchlistFilms" ADD CONSTRAINT "watchlistFilms_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE CASCADE ON UPDATE CASCADE;
