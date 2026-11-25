// Tanstack Routing
import { createFileRoute } from '@tanstack/react-router';

// Components
import ForgotPasswordForm from '#/components/auth/Forgot-password-form';

export const Route = createFileRoute('/(auth)/forgot-password')({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <ForgotPasswordForm />
    </main>
  );
}
