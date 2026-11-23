import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/home/hero';
import Categories from '@/components/categories/categories';

export const Route = createFileRoute('/')({ component: Home });

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
