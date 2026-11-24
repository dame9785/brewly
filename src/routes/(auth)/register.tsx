// // React Routing & Taanstack react-form
import { createFileRoute } from '@tanstack/react-router';

// // Components
import RegisterForm from '#/components/auth/Register-form';

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <RegisterForm />
    </main>
  );
}
