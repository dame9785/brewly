// Tanstack react-form && React-router
import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';

// Better auth
import { authClient } from '@/lib/auth/auth-client';

// @Sonner Toast pup up alert
import { toast } from 'sonner';

// Zod validation schemas.
import { forgotPasswordSchema } from '#/validations/auth-schemas/forgot-password-schema';

// Lucide-react Icons
import { Mail } from 'lucide-react';

// Components
import FormField from '@/components/ui/Form-field';
import Input from '#/components/ui/Input';
import FormTitle from '#/components/ui/Form-title';
import Button from '@/components/ui/Button';

function ForgotPasswordForm() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: '',
    },
    validators: {
      onSubmit: forgotPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await authClient.requestPasswordReset({
        email: value.email,
        redirectTo: '/reset-password',
      });

      if (error) {
        toast.error('Something went wrong', {
          description: 'Please try again later.',
        });

        return;
      }

      toast.success('Reset link requested!', {
        description: 'If an account exists with that email, you will receive a password reset link.',
      });

      await navigate({ to: '/login' });
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
      <FormTitle title="Forgot your password?" description="Enter your email and we send you reset password link." />

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
              text={isSubmitting ? 'Sending link...' : 'Send reset link'}
              type="submit"
              variant="primary"
              size="s"
              disabled={!canSubmit || isSubmitting}
            />
          )}
        </form.Subscribe>

        <Button text="Go back" type="button" variant="secondary" size="s" onClick={() => navigate({ to: '/login' })} />
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
