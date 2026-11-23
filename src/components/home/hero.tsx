import Button from '@/components/ui/button';

function Hero() {
  return (
    <section className="bg-background relative flex min-h-125 items-center overflow-hidden rounded-2xl">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-[url('/brewly-hero.png')] bg-cover bg-center" />

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span className="bg-primary h-px w-12" />

            <p className="text-primary text-sm font-semibold tracking-[0.3em]">PREMIUM COFFEE</p>

            <span className="bg-primary h-px w-12" />
          </div>

          {/* Title */}
          <h1 className="text-foreground font-serif text-5xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Coffee for
            <br />
            every moment.
          </h1>

          {/* Description */}
          <p className="text-foreground/80 mt-6 max-w-lg text-lg leading-8 sm:text-xl">Discover our carefully selected coffee, accessories and everything you need for the perfect brew.</p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button type="button" text="Shop Now" size="l" variant="primary" />
            <Button type="button" text="Explore Categories" size="l" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
