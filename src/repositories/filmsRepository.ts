import prisma from '../database/database';
import { Films } from '@prisma/client';

export type FilmInsertData = Omit<Films, 'id'>;

async function create(data: FilmInsertData) {
  return await prisma.films.create({ data });
}

async function findByOriginalId(id: number) {
  return await prisma.films.findUnique({ where: { originalId: id } });
}

export { create, findByOriginalId };
