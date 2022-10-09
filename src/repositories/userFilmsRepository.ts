import prisma from '../database/database';
import { UserFilms } from '@prisma/client';

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
  return await prisma.userFilms.findMany({
    where: { userId },
    include: { Film: true },
  });
}

export { create, remove, findUnique, getUserFilms };
