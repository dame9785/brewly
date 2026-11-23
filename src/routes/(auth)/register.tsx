import FormField from '#/components/ui/form-field';
import Input from '#/components/ui/input';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <main>
      <form>
        <FormField label="Username" htmlFor="username">
          <Input type="text" placeholder="userName" />
        </FormField>
      </form>
    </main>
  );
}
