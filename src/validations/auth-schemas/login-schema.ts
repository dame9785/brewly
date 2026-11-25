import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email('Please enter a valid email address')),
  password: z.string().min(8, 'Password must at least be minimum 8 character long.'),
});
