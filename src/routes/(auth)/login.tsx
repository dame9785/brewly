import { createFileRoute, redirect } from '@tanstack/react-router';
import { getSession } from '@/lib/auth-server';

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
  return <div>Hello "/(auth)/login"!</div>;
}
