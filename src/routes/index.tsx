import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/home/hero';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <Hero />
    </div>
  );
}
