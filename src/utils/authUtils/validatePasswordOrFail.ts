import bcrypt from 'bcrypt';

async function validatePasswordOrFail(
  plainTextPassword: string,
  passwordHash: string
) {
  if (bcrypt.compareSync(plainTextPassword, passwordHash)) {
    return;
  }

  throw {
    type: 'UNAUTHORIZED',
    message: 'Wrong email or password!',
  };
}

export default validatePasswordOrFail;
