import * as userRepository from '../repositories/userRepository';
import hashPassword from '../utils/hashPassword';
import exclude from '../utils/deleteKey';

async function createAccount(
  username: string,
  email: string,
  password: string
) {
  const userExists = await userRepository.findByEmail(email);

  if (userExists) {
    throw {
      type: 'CONFLICT',
      message: 'This email is already registered!',
    };
  }

  const passwordHash = await hashPassword(password);

  const createdUser = await userRepository.create({
    username,
    email,
    password: passwordHash,
  });

  return exclude(createdUser, 'password');
}

export { createAccount };
