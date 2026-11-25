import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import ResetPasswordForm from '@/components/auth/Reset-password-form';

export const Route = createFileRoute('/(auth)/reset-password')({
  validateSearch: z.object({
    token: z.string().optional(),
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-8">
      <ResetPasswordForm />
    </main>
  );
}
