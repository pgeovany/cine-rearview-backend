/*
  Warnings:

  - You are about to drop the column `hated` on the `userFilms` table. All the data in the column will be lost.
  - You are about to drop the column `liked` on the `userFilms` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `userFilms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "userFilms" DROP COLUMN "hated",
DROP COLUMN "liked",
DROP COLUMN "score";
