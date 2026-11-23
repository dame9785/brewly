function Categories() {
  return (
    <section className="bg-background w-full py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="text-primary mb-3 text-sm font-semibold tracking-[0.3em]">EXPLORE BREWLY</p>

          <h2 className="text-foreground font-serif text-3xl font-bold sm:text-4xl">Shop by Category</h2>

          <p className="text-foreground/70 mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg">Discover everything you need to create your perfect coffee experience, from carefully selected beans to brewing essentials.</p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Coffee */}
          <div className="group relative overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e" alt="Freshly brewed coffee" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />

            <div className="from-foreground/80 via-foreground/20 absolute inset-0 bg-linear-to-t to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-background font-serif text-2xl font-semibold">Coffee</h3>

              <p className="text-background/80 mt-2 text-sm">Discover our selection of coffee</p>
            </div>
          </div>

          {/* Equipment */}
          <div className="group relative overflow-hidden rounded-xl">
            <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6" alt="Coffee brewing equipment" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />

            <div className="from-foreground/80 via-foreground/20 bg-linear-to-tto-transparent absolute inset-0" />

            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-background font-serif text-2xl font-semibold">Brewing Equipment</h3>

              <p className="text-background/80 mt-2 text-sm">Tools for the perfect brew</p>
            </div>
          </div>

          {/* Accessories */}
          <div className="group relative overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" alt="Coffee cups and accessories" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />

            <div className="from-foreground/80 via-foreground/20 absolute inset-0 bg-linear-to-t to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-background font-serif text-2xl font-semibold">Accessories</h3>

              <p className="text-background/80 mt-2 text-sm">Everything for your coffee ritual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
