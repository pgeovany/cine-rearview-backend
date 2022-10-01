import prisma from '../database/database';
import { Users } from '@prisma/client';

export type UserInsertData = Omit<Users, 'id' | 'createdAt'>;

async function create(data: UserInsertData) {
  return await prisma.users.create({ data });
}

async function findByEmail(email: string) {
  return await prisma.users.findUnique({ where: { email } });
}

export { create, findByEmail };
