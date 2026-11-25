// Tanstack react-form && React-router
import { useForm } from '@tanstack/react-form';
import { useNavigate, useSearch } from '@tanstack/react-router';

// Better auth
import { authClient } from '@/lib/auth/auth-client';

// @Sonner Toast pup up alert
import { toast } from 'sonner';

// Lucide-react Icons
import { Lock } from 'lucide-react';

// Zod validation schemas.
import { resetPasswordSchema } from '@/validations/auth-schemas/reset-password-schema';

// Components
import FormField from '@/components/ui/Form-field';
import Input from '@/components/ui/Input';
import FormTitle from '@/components/ui/Form-title';
import Button from '@/components/ui/Button';

function ResetPasswordForm() {
  const navigate = useNavigate();

  const { token } = useSearch({
    from: '/(auth)/reset-password',
  });

  const form = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: resetPasswordSchema,
    },

    onSubmit: async ({ value }) => {
      // Check if token existing
      if (typeof token !== 'string' || token.length === 0) {
        toast.error('Invalid reset link', {
          description: 'Your password reset link is missing or invalid.',
        });
        return;
      }

      // Reset password and catch if something went wrong
      const { error } = await authClient.resetPassword({
        newPassword: value.password,
        token,
      });

      // Show popup message if something went wrong.
      if (error) {
        toast.error('Password reset failed', {
          description: error.message || 'Please request a new reset link.',
        });
        return;
      }

      // Password reset success.
      toast.success('Password updated successfully!', {
        description: 'You can now log in with your new password.',
      });

      // Navigate to login
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
      <FormTitle title="Reset your password" description="Choose a new password for your Brewly account." />

      {/* Password */}
      <form.Field name="password">
        {(field) => (
          <FormField
            error={field.state.meta.errors[0]?.message}
            label="Password"
            htmlFor="password"
            icon={<Lock size={18} />}
            description="Use at least 8 characters."
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

      {/* Confirm password */}
      <form.Field name="confirmPassword">
        {(field) => (
          <FormField
            error={field.state.meta.errors[0]?.message}
            label="Confirm password"
            htmlFor="confirmPassword"
            icon={<Lock size={18} />}
          >
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
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
              text={isSubmitting ? 'Reset password...' : 'Reset password'}
              type="submit"
              variant="primary"
              size="s"
              disabled={!canSubmit || isSubmitting}
            />
          )}
        </form.Subscribe>
        <Button text="Login" type="button" variant="secondary" size="s" onClick={() => navigate({ to: '/login' })} />
      </div>
    </form>
  );
}

export default ResetPasswordForm;
