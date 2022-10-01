import * as userRepository from '../repositories/userRepository';
import hashPassword from '../utils/hashPassword';
import exclude from '../utils/deleteKey';
import validatePasswordOrFail from '../utils/validatePasswordOrFail';
import generateToken from '../utils/generateToken';

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

async function login(email: string, password: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw {
      type: 'UNAUTHORIZED',
      message: 'Wrong email or password!',
    };
  }

  await validatePasswordOrFail(password, user.password);

  return generateToken(user.id);
}

export { createAccount, login };
