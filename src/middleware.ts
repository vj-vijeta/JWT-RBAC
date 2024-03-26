// middleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken, User } from './auth';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  const user = verifyToken(token);

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }

  req.user = user;
  next();
}

export function authorize(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Check if user object exists in the request
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: Missing user information' });
    }

    const user = req.user as User;

    if (user.role !== role) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }

    next();
  };
}
