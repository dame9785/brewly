import type { z } from 'zod';
import type { registerSchema } from '@/validations/auth-schemas/register.schema';

export type RegisterFormData = z.infer<typeof registerSchema>;
export type RegisterDto = Omit<RegisterFormData, 'confirmPassword'>;
