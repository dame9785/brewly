// // Taanstack react-form && React-router
import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';

// //Lucide-React Icons
import { UserRound, Mail, Lock } from 'lucide-react';

// // Components
import FormField from '@/components/ui/Form-field';
import Input from '#/components/ui/Input';
import FormTitle from '#/components/ui/Form-title';
import Button from '@/components/ui/Button';

// //Validation schemas
import { registerSchema } from '@/validations/auth-schemas/register.schema';

function RegisterForm() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validators: {
      onSubmit: registerSchema,
    },

    onSubmit: async ({ value }) => {
      console.log(value);
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
      <FormTitle title="Create your account" description="Join Brewly and discover your new favorite coffee." />

      {/* Username */}
      <form.Field name="name">
        {(field) => (
          <FormField
            error={field.state.meta.errors[0]?.message}
            label="Name"
            htmlFor="name"
            icon={<UserRound size={18} />}
          >
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
          <FormField
            error={field.state.meta.errors[0]?.message}
            label="Email"
            htmlFor="email"
            icon={<Mail size={18} />}
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
            error={field.state.meta.errors[0]?.message}
            label="Password"
            htmlFor="password"
            icon={<Lock size={18} />}
          >
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
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
          </FormField>
        )}
      </form.Field>

      {/* Actions sumbit button & Go to login */}
      <div className="mt-3 flex gap-2">
        <Button text="Create account" type="submit" variant="primary" size="s" />
        <Button
          text="Go to login"
          type="button"
          variant="secondary"
          size="s"
          onClick={() => navigate({ to: '/login' })}
        />
      </div>
    </form>
  );
}

export default RegisterForm;
