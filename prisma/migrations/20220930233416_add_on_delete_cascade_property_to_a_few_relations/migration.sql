-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_filmId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- DropForeignKey
ALTER TABLE "userFilms" DROP CONSTRAINT "userFilms_filmId_fkey";

-- DropForeignKey
ALTER TABLE "userFilms" DROP CONSTRAINT "userFilms_userId_fkey";

-- AddForeignKey
ALTER TABLE "userFilms" ADD CONSTRAINT "userFilms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userFilms" ADD CONSTRAINT "userFilms_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE CASCADE ON UPDATE CASCADE;
