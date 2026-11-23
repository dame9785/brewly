import Button from '@/components/ui/button';

function Hero() {
  return (
    <section className="bg-background relative flex min-h-130 items-center overflow-hidden sm:min-h-150">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-[url('/brewly-hero.png')] bg-cover bg-[position:65%_center] sm:bg-center" />

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="bg-primary h-px w-8 sm:w-12" />

            <p className="text-primary text-xs font-semibold tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">PREMIUM COFFEE</p>

            <span className="bg-primary h-px w-8 sm:w-12" />
          </div>

          {/* Title */}
          <h1 className="text-foreground font-serif text-4xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Coffee for
            <br />
            every moment.
          </h1>

          {/* Description */}
          <p className="text-foreground/80 mt-5 max-w-md text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">Discover our carefully selected coffee, accessories and everything you need for the perfect brew.</p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button text="Shop Now" size="l" variant="primary" />
            <Button text="Explore Categories" size="l" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
