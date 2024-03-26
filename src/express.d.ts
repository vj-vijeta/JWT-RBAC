import { User } from './auth';
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: User;
  }
}