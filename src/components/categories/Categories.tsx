// //Components
import CategoryHeading from '@/components/categories/CategoryHeading';
import CategoryCard from '@/components/categories/CategoryCard';

// //Categories OBJECTS
const CATEGORIES = [
  {
    title: 'Coffee',
    description: 'Discover our selection of coffee',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e',
    alt: 'Freshly brewed coffee',
  },
  {
    title: 'Brewing Equipment',
    description: 'Tools for the perfect brew',
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6',
    alt: 'Coffee brewing equipment',
  },
  {
    title: 'Accessories',
    description: 'Everything for your coffee ritual',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    alt: 'Coffee cups and accessories',
  },
];

function Categories() {
  return (
    <section className="bg-background w-full py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category heading */}
        <CategoryHeading />

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => {
            return <CategoryCard key={category.title} title={category.title} description={category.description} imageUrl={category.imageUrl} alt={category.alt} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
