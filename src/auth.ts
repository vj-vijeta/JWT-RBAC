import * as jwt from 'jsonwebtoken';

export interface User {
  id: string;
  username: string;
  role: string;
}

export function generateToken(user: User): string {
  return jwt.sign(user, 'demojwt', { expiresIn: '1h' }); 
}

export function verifyToken(token: string): User | null {
  try {
    const decoded = jwt.verify(token, 'demojwt') as User;
    return decoded;
  } catch (error) {
    return null;
  }
}