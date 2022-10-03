import bcrypt from 'bcrypt';

async function hashPassword(password: string) {
  const SALT = 10;
  return bcrypt.hash(password, SALT);
}

export default hashPassword;
