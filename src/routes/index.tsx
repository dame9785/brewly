import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/home/hero';
import Categories from '@/components/home/categories';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
    </div>
  );
}
