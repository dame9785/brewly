import FormField from '#/components/ui/form-field';
import Input from '#/components/ui/input';
import FormTitle from '@/components/ui/form-title';

import { UserRound } from 'lucide-react';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <form className="border-border bg-surface w-full max-w-md rounded-xl border p-6 shadow-sm sm:p-8">
        <FormTitle title="Welcome back" description="Sign in to your Brewly account." />

        <FormField label="Username" htmlFor="username" icon={<UserRound size={18} />}>
          <Input id="username" type="text" placeholder="Username" />
        </FormField>
      </form>
    </main>
  );
}
