import prisma from '../database/database';
import { WatchlistFilms, Films } from '@prisma/client';

export type WatchlistInsertData = Omit<WatchlistFilms, 'id' | 'createdAt'>;

async function create(data: WatchlistInsertData) {
  return await prisma.watchlistFilms.create({ data });
}

async function remove(userId: string, filmId: string) {
  return await prisma.watchlistFilms.delete({
    where: {
      userId_filmId: {
        userId,
        filmId,
      },
    },
  });
}

async function findUnique(userId: string, filmId: string) {
  return await prisma.watchlistFilms.findUnique({
    where: {
      userId_filmId: {
        userId,
        filmId,
      },
    },
  });
}

async function getUserWatchlist(userId: string) {
  return await prisma.$queryRaw<Films>`
    SELECT films.id, "originalId", title, overview, "posterUrl", "releaseDate"
    from "watchlistFilms"
    JOIN users
    ON users.id = "watchlistFilms"."userId"
    JOIN films
    ON films.id = "watchlistFilms"."filmId"
    WHERE users.id = ${userId}
  `;
}

export { create, remove, findUnique, getUserWatchlist };
