import { Router } from 'express';
import { z } from 'zod';
import { connect } from '../database';
import jwt from 'jsonwebtoken';
import { authenticate } from './routes/auth';

const router = Router();

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

router.post('/users', async (req, res) => {
  const { name, email, password } = userSchema.parse(req.body);

  const db = await connect();
  const result = await db.run(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );

  res.json({ id: result.lastID, name, email });
});

router.get('/users', authenticate, async (req, res) => {
  const db = await connect();
  const users = await db.all('SELECT * FROM users');

  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const db = await connect();
  const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = userSchema.parse(req.body);

  const db = await connect();
  const result = await db.run(
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id]
  );

  if (result.changes === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ id, name, email });
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  const db = await connect();
  const result = await db.run('DELETE FROM users WHERE id = ?', [id]);

  if (result.changes === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ id });
});

router.post('/login', async (req, res) => {
  const { email, password } = loginSchema.parse(req.body);

  const db = await connect();
  const user = await db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1h',
  });

  res.json({ token });
});

export default router;