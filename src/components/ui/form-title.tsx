type Props = {
  title: string;
  description: string;
};

function FormTitle({ title, description }: Props) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

      {description && <p className="mt-2 text-sm">{description}</p>}
    </div>
  );
}

export default FormTitle;
