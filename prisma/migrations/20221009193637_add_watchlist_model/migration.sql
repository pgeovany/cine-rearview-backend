-- CreateTable
CREATE TABLE "watchlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "filmId" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "watchlist_userId_filmId_key" ON "watchlist"("userId", "filmId");

-- AddForeignKey
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE CASCADE ON UPDATE CASCADE;
