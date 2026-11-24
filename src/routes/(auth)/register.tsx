// //Lucide-React Icons
import { UserRound, Mail, Lock } from 'lucide-react';

// // React Routing & Taanstack react-form
import { createFileRoute } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';

// // Components
import FormField from '@/components/ui/Form-field';
import Input from '#/components/ui/Input';
import FormTitle from '#/components/ui/Form-title';

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterPage,
});

function RegisterPage() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <form className="border-border bg-surface w-full max-w-md rounded-xl border p-6 shadow-sm sm:p-8">
        <FormTitle title="Create your account" description="Join Brewly and discover your new favorite coffee." />

        {/* Username */}
        <form.Field name="name">
          {(field) => (
            <FormField label="Name" htmlFor="name" icon={<UserRound size={18} />}>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            </FormField>
          )}
        </form.Field>

        {/* Email */}
        <form.Field name="email">
          {(field) => (
            <FormField label="Email" htmlFor="email" icon={<Mail size={18} />}>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            </FormField>
          )}
        </form.Field>

        {/* Password */}
        <form.Field name="password">
          {(field) => (
            <FormField label="Password" htmlFor="password" icon={<Lock size={18} />}>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            </FormField>
          )}
        </form.Field>

        {/* Confirm password */}
        <form.Field name="confirmPassword">
          {(field) => (
            <FormField label="Confirm password" htmlFor="confirmPassword" icon={<Lock size={18} />}>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            </FormField>
          )}
        </form.Field>
      </form>
    </main>
  );
}
