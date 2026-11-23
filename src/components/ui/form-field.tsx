import type { ReactNode } from 'react';

type Props = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  error?: string;
  description?: string;
};

function FormField({ label, htmlFor, children, error, description }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {children}

      {description && <p className="text-muted-foreground text-sm">{description}</p>}

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}

export default FormField;
