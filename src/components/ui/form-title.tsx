type Props = {
  title: string;
  description: string;
};

function FormTitle({ title, description }: Props) {
  return (
    <div className="mb-7 space-y-2 text-center">
      <h1 className="text-primary text-3xl font-semibold tracking-tight">{title}</h1>

      {description && <p className="text-foreground/70 text-base leading-relaxed">{description}</p>}
    </div>
  );
}

export default FormTitle;
