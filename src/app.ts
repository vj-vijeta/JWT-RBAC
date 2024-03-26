
import express, { Request, Response } from 'express';
import { authenticate, authorize } from './middleware';
import { generateToken, User } from './auth';
import { Role } from './roles';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, 'public');

// Define route handler for the root URL
app.get('/', (req: Request, res: Response) => {
  // Send the index.html file
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Mock user (Replace this with your actual authentication mechanism)
const mockUser: User = {
  id: '1',
  username: 'user',
  role: Role.USER,
};
const mockAdmin: User = {
  id: '1a',
  username: 'admin',
  role: Role.ADMIN,
};

// Define route handler for the login endpoint
app.post('/login', (req: Request, res: Response) => {
  // Mock authentication, validate username and password
  const { username, password } = req.body;

  // Replace this with your actual authentication logic
  if (username === 'user' && password === '123') {
    const token = generateToken(mockUser);
    console.log('User login successful')
    // Send token as response
    return res.json({ token });
  } 
  if (username === 'admin' && password === 'admin123') {
    const token = generateToken(mockAdmin);
    console.log('Admin login successful');
    // Send token as response
    return res.json({ token });
  }

  // If no valid credentials are found, send an error response
  return res.status(401).json({ message: 'Invalid username or password' });
});

// Other routes and middleware can be defined here...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
