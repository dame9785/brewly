type Props = {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
};

function CategoryCard({ title, description, imageUrl, alt }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img src={imageUrl} alt={alt} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />

      <div className="from-foreground/80 via-foreground/20 absolute inset-0 bg-linear-to-t to-transparent" />

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-background font-serif text-2xl font-semibold">{title}</h3>

        <p className="text-background/80 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
