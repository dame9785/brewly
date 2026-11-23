import type { ReactNode } from 'react';

import Label from '@/components/ui/label';

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
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        <Label htmlFor={htmlFor}>{label}</Label>
      </div>

      {children}

      {description && <p className="text-muted-foreground text-sm">{description}</p>}

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}

export default FormField;
