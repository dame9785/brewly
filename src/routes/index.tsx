import { redirect, createFileRoute } from '@tanstack/react-router';
import { getSession } from '#/lib/auth/auth-server';

import Hero from '@/components/home/Hero';
import Categories from '@/components/categories/Categories';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const session = await getSession();

    if (!session) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Categories Section */}
      <Categories />
    </div>
  );
}
