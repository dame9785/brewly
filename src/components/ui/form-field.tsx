import type { ReactNode } from 'react';

import Label from '@/components/ui/Label';

type Props = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  error?: string;
  description?: string;
  icon?: ReactNode;
};

function FormField({ label, htmlFor, children, error, description, icon }: Props) {
  return (
    <div className="mt-5 flex flex-col gap-1.5">
      <div className="flex min-h-6 items-center gap-2">
        {icon && <span className="text-muted-foreground flex items-center">{icon}</span>}
        <Label htmlFor={htmlFor}>{label}</Label>
      </div>

      {children}

      {description && <p className="text-muted-foreground text-sm">{description}</p>}

      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
}

export default FormField;
