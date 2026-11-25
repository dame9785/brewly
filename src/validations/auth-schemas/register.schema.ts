import { z } from 'zod';

/*
.trim() removes unwanted whitespace from the beginning and end of names and email addresses.
.toLowerCase() converts, for example, DAVID@EMAIL.COM to david@email.com.
.pipe(z.email()) validates the email address after normalization.
*/

export const registerSchema = z
  .object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters'),
    email: z.string().trim().toLowerCase().pipe(z.email('Please enter a valid email address')),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
