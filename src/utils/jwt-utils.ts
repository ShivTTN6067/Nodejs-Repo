import jwt from 'jsonwebtoken';

export const createToken = (payload: any) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY || '', { expiresIn: process.env.EXPIRATION_TIME });
  }

export const verifyToken = async (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY || '');
}
  