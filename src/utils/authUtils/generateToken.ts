import jwt from 'jsonwebtoken';

function generateToken(id: string) {
  const { JWT_SECRET, JWT_EXPIRATION } = process.env;

  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRATION,
  });

  return token;
}

export default generateToken;
