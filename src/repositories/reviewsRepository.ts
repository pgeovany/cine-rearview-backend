import prisma from '../database/database';
import { Reviews } from '@prisma/client';

export type ReviewInsertData = Omit<Reviews, 'id' | 'createdAt'>;

async function create(data: ReviewInsertData) {
  return await prisma.reviews.create({ data });
}

async function findByFilmIdUserIdAndTitle(
  userId: string,
  filmId: string,
  title: string
) {
  return await prisma.reviews.findUnique({
    where: {
      title_userId_filmId: {
        title,
        userId,
        filmId,
      },
    },
  });
}

export { create, findByFilmIdUserIdAndTitle };
