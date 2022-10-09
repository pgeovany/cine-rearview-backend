import prisma from '../database/database';
import { UserFilms, Films } from '@prisma/client';

export type UserFilmsInsertData = Omit<UserFilms, 'id' | 'createdAt'>;

async function create(userId: string, filmId: string) {
  return await prisma.userFilms.create({
    data: {
      userId,
      filmId,
    },
  });
}

async function remove(userId: string, filmId: string) {
  return await prisma.userFilms.delete({
    where: {
      userId_filmId: {
        userId,
        filmId,
      },
    },
  });
}

async function findUnique(userId: string, filmId: string) {
  return await prisma.userFilms.findUnique({
    where: {
      userId_filmId: {
        userId,
        filmId,
      },
    },
  });
}

async function getUserFilms(userId: string) {
  return await prisma.$queryRaw<Films>`
    SELECT films.id, "originalId", title, overview, "posterUrl", "releaseDate"
    from "userFilms"
    JOIN users
    ON users.id = "userFilms"."userId"
    JOIN films
    ON films.id = "userFilms"."filmId"
    WHERE users.id = ${userId}
  `;
}

export { create, remove, findUnique, getUserFilms };
