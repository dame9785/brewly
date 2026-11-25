// Tanstack Routing & Redirection
import { createFileRoute, redirect } from '@tanstack/react-router';

// Better Auth handling
import { getSession } from '@/lib/auth-server';

// Components
import LoginForm from '@/components/auth/Login-form';

export const Route = createFileRoute('/(auth)/login')({
  beforeLoad: async () => {
    const session = await getSession();

    if (session) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <LoginForm />
    </main>
  );
}
