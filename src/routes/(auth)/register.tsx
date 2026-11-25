import { createFileRoute, redirect } from '@tanstack/react-router';
import { getSession } from '#/lib/auth/auth-server';

// // Components
import RegisterForm from '#/components/auth/Register-form';

export const Route = createFileRoute('/(auth)/register')({
  beforeLoad: async () => {
    const session = await getSession();

    if (session) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <RegisterForm />
    </main>
  );
}
