import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/home/Hero';
import Categories from '@/components/categories/Categories';

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
