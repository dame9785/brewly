// // Taanstack react-form && React-router
import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';

// Better auth Client
import { authClient } from '@/lib/auth-client';

// @Sonner Toast pup up alert
import { toast } from 'sonner';

// Lucide-react Icons
import { Mail, Lock } from 'lucide-react';

// Zod validation schemas.
import { loginSchema } from '@/validations/auth-schemas/login-schema';

// Components
import FormField from '@/components/ui/Form-field';
import Input from '#/components/ui/Input';
import FormTitle from '#/components/ui/Form-title';
import Button from '@/components/ui/Button';

function LoginForm() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await authClient.signIn.email({
        email: value.email,
        password: value.password,
      });

      if (error) {
        toast.error('Login failed', {
          description: 'Invalid email or password. Please try again.',
        });

        return;
      }

      toast.success('Welcome back!', {
        description: 'You have successfully signed in to Brewly.',
      });

      await navigate({ to: '/' });
    },
  });

  return (
    <form
      className="border-border bg-surface w-full max-w-md rounded-xl border p-6 shadow-sm sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="mb-5 flex justify-center">
        <img src="/brewly-icon.png" alt="Brewly logo" className="h-25 w-25 object-contain" />
      </div>
      <FormTitle title="Welcome back!" description="Sign in to your Brewly account and enjoy your favorite coffee." />

      {/* Email */}
      <form.Field name="email">
        {(field) => (
          <FormField
            label="Email"
            htmlFor="email"
            icon={<Mail size={18} />}
            error={field.state.meta.errors[0]?.message}
          >
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
          <FormField
            label="Password"
            htmlFor="password"
            icon={<Lock size={18} />}
            error={field.state.meta.errors[0]?.message}
          >
            <Input
              id="password"
              type="password"
              placeholder="Password"
              showPasswordToggle
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
          </FormField>
        )}
      </form.Field>

      {/* Actions sumbit button & Go to login */}
      <div className="mt-3 flex gap-2">
        <form.Subscribe
          selector={(state) => ({
            canSubmit: state.canSubmit,
            isSubmitting: state.isSubmitting,
          })}
        >
          {({ canSubmit, isSubmitting }) => (
            <Button
              text={isSubmitting ? 'Signing in...' : 'Login'}
              type="submit"
              variant="primary"
              size="s"
              disabled={!canSubmit || isSubmitting}
            />
          )}
        </form.Subscribe>

        <Button
          text="Register new account"
          type="button"
          variant="secondary"
          size="s"
          onClick={() => navigate({ to: '/register' })}
        />
      </div>
    </form>
  );
}

export default LoginForm;
