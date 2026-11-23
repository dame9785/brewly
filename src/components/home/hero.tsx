import Button from '@/components/ui/button';

function Hero() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <div className="flex flex-2 items-center gap-2">
        <Button text="Shop now" size="s" />
        <Button text="Explore Categoriees" size="s" />
      </div>
    </section>
  );
}

export default Hero;
